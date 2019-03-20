import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux'
import ClaimItem from "./claim-item"

class ClaimDonation extends React.Component {
    static navigationOptions = {
        title: "Claim Donation"
    }

    _listItems(items){
        return items.map(item => (
            <ClaimItem {...item} key={item.id} />
        ));
    }

    render() {
        let { items } = this.props;
        items = items || [];

        return (
            <View>
                <Text>There are {items.length} items</Text>

                {this._listItems(items)}
            </View>
        )
    }
}

const mapStateToProps = state => {
    let { activeDonation } = state.existingDonations;
    return activeDonation || {};
};

export default connect(
    mapStateToProps,
    null
)(ClaimDonation);
