/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const image = require('./ignite_logo.png')

class imageTest extends Component {
  render() {
    return (
      <View style={styles.container} removeClippedSubviews={false}>
        <View style={styles.imageWrap} removeClippedSubviews={false}>
          {false && <Image source={image} style={styles.image} />}
          {true && <Image source={{uri: 'https://github.com/infinitered/ignite/blob/master/ignite-base/App/Images/ignite_logo.png?raw=true'}} style={styles.image} />}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  imageWrap: {
    width: 187,
    height: 120
  },
  image: {
    resizeMode: 'cover',
    overflow: 'hidden',
    borderColor: '#000000',
    borderWidth: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 10,
    bottom: 0
  }
});

AppRegistry.registerComponent('imageTest', () => imageTest);
