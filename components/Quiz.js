import React, {Component} from 'react';
import {connect} from 'react-redux';

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button} from 'react-native-elements';

class Quiz extends Component {
  state = {
    currentQuestion: -1,
    numberOfQuestions: 0,
    numberOfQuestionsCorrect: 0,
    questionVisable: true,
    questions: [],
  };

  resetState = () => {
    this.setState({
      currentQuestion: -1,
      numberOfQuestions: 0,
      numberOfQuestionsCorrect: 0,
      questionVisable: true,
      questions: [],
    });
  };

  jumpToScoreWindow = () => {
    const {navigation, route} = this.props;
    navigation.navigate('Score', {
      deckID: route.params.deckID,
      numberOfQuestions: this.state.numberOfQuestions,
      numberOfQuestionsCorrect: this.state.numberOfQuestionsCorrect,
    });
    this.componentDidMount();
  };

  renderQuestion = () => {
    if (this.state.currentQuestion >= 0) {
      const currentQuestion = this.state.questions[this.state.currentQuestion]
        .question;
      return (
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{currentQuestion}</Text>
            <TouchableOpacity
              onPress={e => {
                this.setState({questionVisable: false});
              }}
              style={styles.body}>
              <Text style={styles.sectionAnswerLink}>Answer</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  renderNumberRemaining = () => {
    if (this.state.currentQuestion >= 0) {
      const currentQuestion = this.state.questions[this.state.currentQuestion]
        .question;
      return (
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>
              {this.state.currentQuestion + 1} / {this.state.numberOfQuestions}
            </Text>
          </View>
        </View>
      );
    }
  };

  renderAnswer = () => {
    if (this.state.currentQuestion >= 0) {
      const currentAnswer = this.state.questions[this.state.currentQuestion]
        .answer;
      return (
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{currentAnswer}</Text>
            <TouchableOpacity
              onPress={e => {
                this.setState({questionVisable: true});
              }}
              style={styles.body}>
              <Text style={styles.sectionAnswerLink}>Question</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  render() {
    if (this.state.currentQuestion + 1 <= this.state.numberOfQuestions) {
      const viewToShow = this.state.questionVisable
        ? this.renderQuestion()
        : this.renderAnswer();
      return (
        <View style={styles.container}>
          {viewToShow}
          <View style={styles.btnContainer}>
            <Button
              title="Correct"
              raised={true}
              buttonStyle={styles.correctButton}
              onPress={() =>
                this.setState({
                  currentQuestion: this.state.currentQuestion + 1,
                  numberOfQuestionsCorrect:
                    this.state.numberOfQuestionsCorrect + 1,
                  questionVisable: true,
                })
              }
            />
          </View>

          <View style={styles.btnContainer}>
            <Button
              title="Incorrect"
              raised={true}
              buttonStyle={styles.incorrectButton}
              onPress={() =>
                this.setState({
                  currentQuestion: this.state.currentQuestion + 1,
                  questionVisable: true,
                })
              }
            />
          </View>
          {this.renderNumberRemaining()}
        </View>
      );
    } else {
      this.jumpToScoreWindow();
      return null;
    }
  }

  componentDidMount() {
    const {route, decks} = this.props;
    const {deckID} = route.params;
    const {questions} = decks[deckID];
    //console.log(deckID);
    if (questions !== undefined) {
      const numberOfQuestions = questions.length;
      this.setState({
        deckID: route.params.deckID,
        currentQuestion: 0,
        numberOfQuestions: numberOfQuestions,
        numberOfQuestionsCorrect: 0,
        questionVisable: true,
        questions: questions,
      });
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
