import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { fetchCoinData } from '../Actions/FetchCoinData';

class CryptoContainer extends Component {

  componentDidMount() {
    this.props.fetchCoinData();
  }
  
  render() {
    return (
      <View>
        <Text>Container</Text>
      </View>
    )
  }
}


function mapStateToProps(state) {
  return {
    crypto: state.crypto
  }
}

export default connect(mapStateToProps, { fetchCoinData })(CryptoContainer);
