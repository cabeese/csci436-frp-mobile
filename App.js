import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import ListItem from './source/components/list-item'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ListItem />
      </View>
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
