import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store'
import ListItem from './source/components/list-item'
// Could import donation list:
//   import DonationList from './src/components/donation-list';
// and then render it in the body with
//   <DonationList />

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <ListItem />
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
