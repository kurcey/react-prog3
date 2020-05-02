import React, {Component} from 'react';
import {connect} from 'react-redux';

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button} from 'react-native-elements';

class Quiz extends Component {
  jumpToQuizWindow = quizItems => {
    const {navigation} = this.props;
    navigation.navigate('Quiz', {
      questions: quizItems,
    });
  };

  renderQuestion = quizQuestion => {
    return (
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{quizQuestion}</Text>
          <TouchableOpacity
            onPress={e => {
              jumpToQuizWindow(id);
            }}
            style={styles.body}>
            <Text style={styles.sectionAnswerLink}>Answer</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    const {navigation, route, decks} = this.props;
    const {deckID} = route.params;
    const {questions} = decks[deckID];
    if (questions !== undefined && questions.constructor === Array) {
      return (
        <View style={styles.container}>
          {this.renderQuestion(questions[0].question)}
          <View style={styles.btnContainer}>
            <Button
              title="Correct"
              raised={true}
              buttonStyle={styles.correctButton}
              onPress={() => this.stateTitle(this.state.title)}
            />
          </View>

          <View style={styles.btnContainer}>
            <Button
              title="Incorrect"
              raised={true}
              buttonStyle={styles.incorrectButton}
              onPress={() => this.jumpToQuizWindow(itemId)}
            />
          </View>
        </View>
      );
    }
  }
}

const mapStateToProps = ({decks}) => {
  return {
    decks: decks,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Quiz);

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
  correctButton: {
    borderRadius: 20,
    borderWidth: 0.25,
    backgroundColor: '#02ed6c',
  },
  incorrectButton: {
    borderRadius: 20,
    borderWidth: 0.25,
    backgroundColor: '#ed020a',
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
