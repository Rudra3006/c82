import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class Feed extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#000080',
        }}>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text style={{ color: 'white' }}>Sphatgram</Text>
          <Image
            source={require('../assets/logo.png')}
            style={{ width: '30%', height: '10%', resizeMode: 'contain', padding:10 }}
          />
        </View>
        <Image
          source={require('../assets/image_7.jpg')}
          style={{ width: '100%', height: '25%', resizeMode: 'contain' }}
        />
        <Text style={{ color: 'white', alignSelf: 'center' }}>
          rowing a boat with my daughter
        </Text>
        <Image
          source={require('../assets/image_6.jpg')}
          style={{ width: '100%', height: '25%', resizeMode: 'contain' }}
        />
        <Text style={{ color: 'white', alignSelf: 'center' }}>
          hiking with my dad
        </Text>
        <Image
          source={require('../assets/image_5.jpg')}
          style={{ width: '100%', height: '25%', resizeMode: 'contain' }}
        />
        <Text style={{ color: 'white', alignSelf: 'center' }}>
          biking time
        </Text>
      </View>
    );
  }
}
