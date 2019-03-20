import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux'
import ClaimItem from "./claim-item"
import { claimDonationPart } from "../redux/actions"

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
        const details = this._getQtyFromChildren();
        const { id } = this.props;
        this.props.claimDonationPart(id, details);
    }

    render() {
        let { loading, errorMessage, justClaimed, items } = this.props;
        items = items || [];
        let text = justClaimed ? "Claimed!" : "Claim Selected Quantities..."
        if(loading) text = "Loading..."
        let disabled = justClaimed || loading;

        return (
            <View>
                <Text>Use the +/- buttons to claim items</Text>

                {this._listItems(items)}

                <Text>{errorMessage || ""}</Text>

                <Button
                    title={text}
                    disabled={disabled}
                    onPress={this._doClaim} />
            </View>
        )
    }
}

const mapStateToProps = state => {
    let { donations, activeDonationIdx } = state.existingDonations;
    console.log(activeDonationIdx);
    let { loading, errorMessage, justClaimed } = state.claim;
    let activeDonation = activeDonationIdx > -1 ? donations[activeDonationIdx] : {};
    return { loading, errorMessage, justClaimed, ...activeDonation };
};

export default connect(
    mapStateToProps,
    { claimDonationPart }
)(ClaimDonation);
