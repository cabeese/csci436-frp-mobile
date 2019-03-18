import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { connect } from 'react-redux'
import { fetchDonations } from '../redux/actions'

class DonationList extends React.Component {
    _listItem({item}){
        return(
            <Text>{item.name}</Text>
        )
    }

    render() {
        let { donations, fetchDonations } = this.props;
        return (
            <View style={styles.container}>
                <Text>Here's the data:</Text>

                <FlatList data={donations} renderItem={this._listItem} />

                <Button title="Refresh" onPress={fetchDonations} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      height: "50%",
      backgroundColor: '#ffeeee',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {}
});
  
const mapStateToProps = state => {
    const  { donations } = state.existingDonations;
    return { donations };
};

const actionCreators = {
    fetchDonations
};

export default connect(
    mapStateToProps,
    actionCreators
)(DonationList);
