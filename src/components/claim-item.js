import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Picker } from 'react-native';

export default class ClaimItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      claimedQty: 0,
    };
  }
  _onPressPlus = () => this.setState({ claimedQty: this.state.claimedQty + 1 })
  _onPressMinus = () => this.setState({ claimedQty: this.state.claimedQty - 1 })
  render() {
    return (
      <View style={styles.itemWhole}>
          <Text style={styles.item}>
            {this.props.foodName}
          </Text>
          <Text style={styles.item}>
            {this.state.claimedQty}
          </Text>
          <Button style={styles.item}
            onPress={this._onPressPlus}
            title="+"
            color="gray"
          />
          <Button style={styles.item}
            onPress={this._onPressMinus}
            title="-"
            color="gray"
          />
          <Text style={styles.item}>
            {this.props.remainingQty}
          </Text>
          <Text style={styles.item}>
            {this.props.QtyUnits}
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
