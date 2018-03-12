import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { fetchCoinData } from '../Actions/FetchCoinData';
import CoinCard from './CoinCard';
import Spinner from 'react-native-loading-spinner-overlay';

class CryptoContainer extends Component {

  componentDidMount() {
    this.props.fetchCoinData();
  }

  renderCoinCards() {
    const { crypto } = this.props;
    console.log(crypto);
    return crypto.data.map((coin, index) => 
      <CoinCard
        key={index}
        coin_name={coin.name}
        symbol={coin.symbol}
        price_usd={coin.price_usd}
        percent_change_7d={coin.percent_change_7d}
        percent_change_24h={coin.percent_change_24h}
      />
    )
  }
  
  render() {

    const { crypto } = this.props;
    const { contentContainer } = styles;

    if (crypto.isFetching) {
      return ( 
        <View>
          <Spinner
            visible={crypto.isFetching}
            textContent={'Loading...'}
            textStyle={{color: '#253145'}}
            animation='fade'
          />
        </View>
      )
    }
    
    return (
      <ScrollView contentContainerStyle={contentContainer}>
        {this.renderCoinCards()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 100,
    paddingTop: 55
  }
});


function mapStateToProps(state) {
  return {
    crypto: state.crypto
  }
}

export default connect(mapStateToProps, { fetchCoinData })(CryptoContainer);
