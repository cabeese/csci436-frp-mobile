import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Picker } from 'react-native';

export default class ClaimItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      claimedQty: 0,
    };
  }
  _onPressPlus = () => {
    const { claimedQty } = this.state;
    const { remainingQty } = this.props;
    if(claimedQty >= remainingQty) return;
    this.setState({ claimedQty: this.state.claimedQty + 1 })
  }
  _onPressMinus = () => {
    const { claimedQty } = this.state;
    if(claimedQty < 1) return;
    this.setState({ claimedQty: this.state.claimedQty - 1 })
  }
  exportState = () => this.state;
  render() {
    const { foodName, remainingQty, qtyUnits } = this.props;
    return (
      <View style={styles.itemWhole}>
          <Text style={styles.item}>
            {foodName}
          </Text>

          <Text style={styles.item}>
            {this.state.claimedQty} / {remainingQty} {qtyUnits}
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
