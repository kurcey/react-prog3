import React, {Component} from 'react';
import {connect} from 'react-redux';

import {StyleSheet, View, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button} from 'react-native-elements';

class DeckView extends Component {
  jumpToQuizWindow = quizItems => {
    const {navigation} = this.props;
    navigation.navigate('Quiz', {
      deckID: quizItems,
    });
  };

  jumpToAddCardWindow = quizItems => {
    const {navigation} = this.props;
    navigation.navigate('AddCard', {
      deckID: quizItems,
    });
  };

  render() {
    const {navigation, decks} = this.props;
    const {itemId} = this.props.route.params;
    const {title, questions} = decks[itemId];
    const cards =
      questions !== undefined && questions.constructor === Array
        ? questions.length
        : 0;

    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <Text style={styles.sectionDescription}>{cards} Cards</Text>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <Button
            title="Add Card"
            raised={true}
            type="outline"
            buttonStyle={styles.submitButton}
            onPress={() => this.jumpToAddCardWindow(itemId)}
          />
        </View>

        <View style={styles.btnContainer}>
          <Button
            title="Start Quiz"
            raised={true}
            type="outline"
            buttonStyle={styles.submitButton}
            onPress={() => this.jumpToQuizWindow(itemId)}
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

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeckView);

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
});
