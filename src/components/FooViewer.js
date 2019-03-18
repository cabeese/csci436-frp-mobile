import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux'
import { toggleFoo } from '../redux/actions'

class FooViewer extends React.Component {
  render() {
    return (
      <View>
        <Button title="Toggle Foo" onPress={this.props.toggleFoo} />
        <Text>This is the Foo Viewer. Foo is {this.props.foo ? "true" : "false"}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {foo} = state.foobar;
  return { foo };
};

const actionCreators = {
  toggleFoo
};

export default connect(
  mapStateToProps,
  actionCreators
)(FooViewer);
