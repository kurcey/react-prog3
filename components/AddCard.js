import React, {Component} from 'react';

import {connect} from 'react-redux';
import {storeData, getData, addCardToDeck} from '../redux/actions';

import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

class AddCard extends Component {
  state = {
    title: '',
  };

  handleQuestion = text => {
    this.setState({question: text});
  };

  handleAnswer = text => {
    this.setState({answer: text});
  };

  jumpToAddCardWindow = () => {
    const {navigation, route} = this.props;
    const {deckID} = route.params;
    addCardToDeck(deckID, this.state);
    this.setState({question: '', answer: ''});
    navigation.navigate('DeckView', {
      deckID: deckID,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Question"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          multiline={true}
          onChangeText={this.handleQuestion}
          value={this.state.question}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Answer"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          multiline={true}
          onChangeText={this.handleAnswer}
          value={this.state.answer}
        />

        <View style={styles.btnContainer}>
          <Button
            title="Submit"
            raised={true}
            type="outline"
            buttonStyle={styles.submitButton}
            onPress={() => this.jumpToAddCardWindow()}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({decks}) => {
  return {
    decks: decks,
  };
};

const mapDispatchToProps = {storeData, getData, addCardToDeck};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  input: {
    marginHorizontal: 80,
    marginTop: 30,
    height: 100,
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#66b0ff',
    borderRadius: 20,
    borderWidth: 0.25,
    padding: 10,
  },
  btnContainer: {
    marginTop: 30,
    marginHorizontal: 80,
  },
  submitButton: {
    borderRadius: 20,
    borderWidth: 0.25,
  },
  questionHeading: {
    color: 'black',
    fontSize: 40,
    textAlign: 'center',
    paddingHorizontal: 24,
  },
});
