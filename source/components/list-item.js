import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class ListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: ''
    };
  }
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.itemName}>
          <TextInput
            placeholder="Item"
            onChangeText={(item) => this.setState({item})}
            />
        </View>
        <View style={styles.itemQuant}>
          <TextInput
            placeholder="Quantity"
            onChangeText={(number) => this.setState({number})}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemName: {
    flex: 2,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
    //flexDirection: 'row',
  },
  itemQuant: {
    flex: 1,
    backgroundColor: 'darkblue',
    alignItems: 'center',
    justifyContent: 'center',
    //flexDirection: 'row',
  },
});
