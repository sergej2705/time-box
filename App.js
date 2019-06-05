import { ScreenOrientation, Speech } from 'expo';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import CountDown from 'react-native-countdown-component';

export default class App extends Component {
  speechOptions = {
    language: "de_DE",
    rate: 1,
  }
  speechOptionsSlow = Object.assign({}, this.speechOptions, {
    rate: 0.1,
  })

  state = {
    play: true,
    time: 17,
  }

  componentDidMount() {
    Speech.stop();
    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.ALL_BUT_UPSIDE_DOWN);
  }

  tellTime = (seconds) => {
    // gets wrong seconds as input... subtract 1
    seconds = seconds - 1;

    timesToTell = [1, 2, 3, 4, 5, 10, 15, 30, 45];

    minutes = seconds / 60;
    hours = minutes / 60;

    if (timesToTell.includes(seconds)) {
      Speech.speak(seconds + "", this.speechOptions);
    } else if (timesToTell.includes(minutes)) {
      console.log("minutes");
      Speech.speak(minutes + " Minute" + ((minutes == 1) ? "" : "n"), this.speechOptions);
    } else if (timesToTell.includes(hours)) {
      Speech.speak(hours + " Stunde" + ((hours == 1) ? "" : "n"), this.speechOptions);
    }
  }

  render() {
    var { play, time } = this.state;

    return (
      <View style={styles.container}>
        <CountDown
          until={time}
          running={play}
          onFinish={() => Speech.speak("biep, biep, biep", this.speechOptionsSlow)}
          onPress={() => this.state.play = !this.state.play}
          onChange={this.tellTime}
          size={40}
          showSeparator={false}
          timeToShow={['H', 'M', 'S']}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
