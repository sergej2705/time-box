import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Timer } from 'react-native-flip-timer';

export default class App extends Component {
  state = {
    play: true,
  }

  play = () => {
    this.setState(({ play }) => ({ play: !play }));
  }

  render() {
    const { play } = this.state;
    return (
      <View style={styles.container}>
        <Timer time={0} play={play} />
        <TouchableOpacity style={styles.button} onPress={this.play}>
          <Text style={styles.text}>{play ? 'Pause' : 'Play'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 40,
    backgroundColor: '#333333',
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#cccccc',
  },
});
