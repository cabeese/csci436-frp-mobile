import React, { Component } from 'react'
import { View, Button } from 'react-native';

import DonationList from './components/donation-list'
import ListItem from './components/list-item'

import { createStackNavigator, createAppContainer } from 'react-navigation'

class Home extends Component {
    static navigationOptions = {
        title: "FoodBanks.Network"
    }
    render(){
        return (
            <View>
                <Button title="View Donations"
                    onPress={() => this.props.navigation.navigate('DonationList')} />

                <View style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }} />

                <Button title="Post a Donation"
                    onPress={() => this.props.navigation.navigate('ListItem')} />
            </View>
        )
    }
}

export const Navigator = createStackNavigator({
    Home: { screen: Home },
    DonationList: { screen: DonationList },
    ListItem: { screen: ListItem },
},{
    initialRouteName: 'Home',
});

export default createAppContainer(Navigator);

