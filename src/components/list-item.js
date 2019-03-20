import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Picker } from 'react-native';

const UNITS = [
  "cases",
  "lbs",
  "pallets",
];

export default class ListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      foodName: '',
      qty: 0,
      units: UNITS[0]
    };
  }
  _onPressPlus = () => this.setState({ number: this.state.number + 1 })
  _onPressMinus = () => {
    if(this.state.number < 1) return;
    this.setState({ number: this.state.number - 1 })
  }
  exportState(){
    return this.state;
  }

  render() {
    return (
      <View style={styles.itemWhole}>
        <View style={styles.itemName}>
          <TextInput style={styles.itemName}
            placeholder="Item"
            onChangeText={(item) => this.setState({item})}
            />
        </View>
        <View style={styles.AmountContainer}>
            <Text style={styles.itemAmount}>
              {this.state.number}
            </Text>
        </View>
        <Picker style={styles.itemType}
          selectedValue={this.state.units}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({units: itemValue})
          }>
          <Picker.Item label="cases" value="cases" />
          <Picker.Item label="lbs" value="lbs" />
          <Picker.Item label="pallets" value="pallets" />
        </Picker>
        <View style={styles.buttonContainer}>
          <View style={styles.itemButton}>
            <Button
              onPress={this._onPressPlus}
              title="+"
              color="gray"
            />
          </View>
          <View style={styles.itemButton}>
            <Button
              onPress={this._onPressMinus}
              title="-"
              color="gray"
            />
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemName: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 16,
  },
  itemAmount: {
    color: 'white',
  },
  AmountContainer: {
    flex: 1/2,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  itemType: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  itemButton: {
    alignItems: 'center',
    margin: 3,
  },
  itemWhole: {
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
