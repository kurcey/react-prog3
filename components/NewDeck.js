import React, {Component} from 'react';

import {connect} from 'react-redux';
import {storeData, getData, saveDeck} from '../redux/actions';

import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

const genertateQuestionGrouping = () => {
  const {decks} = this.props;
  let allAuthors = <Text />;
  let cards = 0;

  if (decks.constructor === Object) {
    allAuthors = Object.keys(decks).map(function(id, index) {
      const {title, questions} = decks[id];
      cards = questions.constructor === Array ? questions.length : 0;
      return (
        <View key={id} style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <Text style={styles.sectionDescription}>{cards} Cards</Text>
          </View>
        </View>
      );
    });
  }
  return allAuthors;
};

class NewDeck extends Component {
  state = {
    title: '',
  };

  handleTitle = text => {
    this.setState({title: text});
  };

  stateTitle = title => {
    saveDeck(title);
    const {navigation} = this.props;
    this.setState({title: ''});
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
          onChangeText={this.handleTitle}
          value={this.state.title}
        />

        <View style={styles.btnContainer}>
          <Button
            title="Submit"
            raised={true}
            type="outline"
            buttonStyle={styles.submitButton}
            onPress={() => this.stateTitle(this.state.title)}
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

const mapDispatchToProps = {storeData, getData, saveDeck};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewDeck);

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
});
