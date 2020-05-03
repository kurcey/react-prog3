import React, {Component} from 'react';

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button} from 'react-native-elements';

class Score extends Component {
  state = {};

  jumpToQuizWindow = quizItems => {
    const {navigation} = this.props;
    navigation.navigate('Quiz', {
      questions: this.state.deckID,
    });
  };

  jumpToDeckWindow = () => {
    const {navigation} = this.props;

    navigation.navigate('DeckView', {
      deckID: this.state.deckID,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>
              You got {this.state.numberOfQuestionsCorrect} out of{' '}
              {this.state.numberOfQuestions}
            </Text>
            <TouchableOpacity onPress={e => {}} style={styles.body}>
              <Text style={styles.sectionAnswerLink}>
                that is{' '}
                {Math.round(
                  (this.state.numberOfQuestionsCorrect /
                    this.state.numberOfQuestions) *
                    100,
                )}{' '}
                Percent
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Button
            title="Restart Quiz"
            raised={true}
            buttonStyle={styles.submitButton}
            onPress={() => {
              this.jumpToQuizWindow();
            }}
          />
        </View>

        <View style={styles.btnContainer}>
          <Button
            title="Back to Deck"
            raised={true}
            buttonStyle={styles.submitButton}
            onPress={() => {
              this.jumpToDeckWindow();
            }}
          />
        </View>
      </View>
    );
  }

  componentDidMount() {
    const {
      deckID,
      numberOfQuestions,
      numberOfQuestionsCorrect,
    } = this.props.route.params;
    //console.log(this.props.route.params);
    this.setState({
      deckID: deckID,
      numberOfQuestions: numberOfQuestions,
      numberOfQuestionsCorrect: numberOfQuestionsCorrect,
    });
  }
}

export default Score;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  input: {
    marginHorizontal: 80,
    marginTop: 30,
    height: 40,
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
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  sectionContainer: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 35,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
    textAlign: 'center',
  },
  sectionAnswerLink: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#ed020a',
    textAlign: 'center',
  },
});
