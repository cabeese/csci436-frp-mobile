import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { connect } from 'react-redux'
import { fetchDonations, setActiveDonation } from '../redux/actions'

class DonationList extends React.Component {
    static navigationOptions = {
        title: "Available Donations"
    }
    _listItem = ({item}) => {
        let { id, location, items } = item;
        const title = `#${id} / ${items.length} item(s) / ${location}`;
        return(
            <Button title={title} onPress={this._selectDonation.bind(null, id)} />
        )
    }
    _selectDonation = (id) => {
        this.props.setActiveDonation(id);
        this.props.navigation.navigate('ClaimDonation');
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
        let { donations, fetchDonations, loading, userName } = this.props;
        return (
            <View style={styles.container}>
                <Text>Hello, {userName}</Text>
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
      backgroundColor: '#ffeeee',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {}
});

const mapStateToProps = state => {
    const  { donations, loading, errorMessage } = state.existingDonations;
    const userName = state.user.name;
    return { donations, loading, errorMessage, userName };
};

const actionCreators = {
    fetchDonations,
    setActiveDonation
};

export default connect(
    mapStateToProps,
    actionCreators
)(DonationList);
