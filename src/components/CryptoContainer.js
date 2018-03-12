import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class CryptoContainer extends Component {
  render() {
    return (
      <View>
        <Text>Container</Text>
      </View>
    )
  }
}

// export default CryptoContainer;

function mapStateToProps(state) {
  return {
    test: state.test,
    // crypto: state.crypto
  }
}

export default connect(mapStateToProps)(CryptoContainer);
