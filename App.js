import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store'
import ListItem from './src/components/list-item'
import CreateDonation from "./src/components/create-donation"
// Could import donation list:
//   import DonationList from './src/components/donation-list';
// and then render it in the body with
//   <DonationList />

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Please enter your information to post a donation below</Text>

          <CreateDonation />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
