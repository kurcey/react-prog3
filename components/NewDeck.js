import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import {Button} from 'react-native-elements';

class NewDeck extends Component {
  state = {
    deckName: '',
  };

  handleDeckName = text => {
    this.setState({deckName: text});
  };

  stateDeckName = deckName => {
    alert('deckName: ' + deckName);
    const {navigation} = this.props;
    navigation.navigate('DeckView');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.questionHeading}>
          What is the title of your new deck?
        </Text>

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Deck Title"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleDeckName}
        />

        <View style={styles.btnContainer}>
          <Button
            title="Submit"
            raised={true}
            type="outline"
            buttonStyle={styles.submitButton}
            onPress={() => this.stateDeckName(this.state.deckName)}
          />
        </View>
      </View>
    );
  }
}
export default NewDeck;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    marginLeft: 80,
    marginRight: 80,
    height: 40,
    borderColor: '#66b0ff',
    borderRadius: 1,
    borderWidth: 0.25,
    padding: 10,
  },
  btnContainer: {
    margin: 80,
  },
  submitButton: {
    // backgroundColor: '#7a42f4',
  },
  questionHeading: {
    color: 'black',
    padding: 10,
    margin: 15,
    fontSize: 50,
    textAlign: 'center',
  },
});
