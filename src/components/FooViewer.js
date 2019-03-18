import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux'

class FooViewer extends React.Component {
  render() {
    return (
      <View>
          <Text>This is the Foo Viewer. Foo is {this.props.foo ? "true" : "false"}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {foo} = state.foobar;
  return { foo };
};

export default connect(
  mapStateToProps,
)(FooViewer);
