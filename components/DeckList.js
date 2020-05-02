import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {loadInitalQuestions, storeData, getData} from '../redux/actions';

class DeckList extends Component {
  state = {};

  deckItem = () => {
    return (
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Deck Name</Text>
          <Text style={styles.sectionDescription}># Cards</Text>
        </View>
      </View>
    );
  };

  genertateQuestionGrouping = () => {
    const {questions} = this.props;

    const allAuthors = Object.keys(questions).map(function(id, index) {
      //console.log(questions[id]);
      return (
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{questions[id].title}</Text>
            <Text style={styles.sectionDescription}># Cards</Text>
          </View>
        </View>
      );
    });
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {this.deckItem()}

          {this.genertateQuestionGrouping()}
        </ScrollView>
      </SafeAreaView>
    );
  }

  componentDidMount() {
    const {questions, loadInitalQuestions, storeData, getData} = this.props;

    if (
      Object.keys(questions).length === 0 &&
      questions.constructor === Object
    ) {
      loadInitalQuestions();
      console.log(
        'loading questions from mock db becasue not in local storage',
      );
    } else {
      console.log('questions already in local storage');
      // console.log(questions);
    }
  }
}

const mapStateToProps = ({questions}) => {
  return {
    questions: questions,
  };
};

const mapDispatchToProps = {loadInitalQuestions, storeData, getData};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeckList);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    marginBottom: 10,
  },
  sectionContainer: {
    marginTop: 32,
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
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
