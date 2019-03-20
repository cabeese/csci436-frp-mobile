import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux'
import ClaimItem from "./claim-item"

class ClaimDonation extends React.Component {
    static navigationOptions = {
        title: "Claim Donation"
    }

    _listItems(items){
        return items.map(item => (
            <ClaimItem {...item} key={item.id} ref={`item${item.id}`} />
        ));
    }

    _getQtyFromChildren = () => {
        let ret = [];
        const items = this.props.items || [];
        items.forEach( item => {
            let {claimedQty} = this.refs[`item${item.id}`].exportState();
            let { foodName } = item;
            if(claimedQty){
                ret.push({
                    foodName,
                    qty: claimedQty
                });
            }
        });
        return ret;
    }

    _doClaim = () =>{
        console.log(this._getQtyFromChildren());
    }

    render() {
        let { items } = this.props;
        items = items || [];

        return (
            <View>
                <Text>Use the +/- buttons to claim items</Text>

                {this._listItems(items)}

                <Button title="Claim Selected Quantities!" onPress={this._doClaim} />
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
