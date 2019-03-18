import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { connect } from 'react-redux'
import { fetchDonations } from '../redux/actions'

class DonationList extends React.Component {
    _listItem({item}){
        return(
            <Text>{item.location}</Text>
        )
    }
    _keyExtractor(item){
        return String(item.id);
    }
    _error(){
        let {errorMessage} = this.props;
        if(errorMessage){
            return <Text>Error: {errorMessage}</Text>
        } else {
            return null;
        }
    }

    render() {
        let { donations, fetchDonations, loading, errorMessage } = this.props;
        return (
            <View style={styles.container}>
                <Text>{loading ? "Loading..." : "Here's the data:"}</Text>

                <FlatList data={donations} renderItem={this._listItem} keyExtractor={this._keyExtractor} />

                {this._error()}

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
    const  { donations, loading, errorMessage } = state.existingDonations;
    return { donations, loading, errorMessage };
};

const actionCreators = {
    fetchDonations
};

export default connect(
    mapStateToProps,
    actionCreators
)(DonationList);
