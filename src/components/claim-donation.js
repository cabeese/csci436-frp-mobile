import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Picker } from 'react-native';

export default class ClaimDonation extends React.Component {
  render() {
    return (
      <View style={styles.itemWhole}>
          <Text style={styles.item}>
            {this.props.foodName}
          </Text>
          <Text style={styles.item}>
            {this.props.QtyUnits}
          </Text>
          <Text style={styles.item}>
            {this.props.remainingQty}
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    margin: 5,
  },
  itemWhole: {
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
