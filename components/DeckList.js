import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {loadInitalDeck} from '../redux/actions';

class DeckList extends Component {
  state = {};

  genertateQuestionGrouping = () => {
    const {decks} = this.props;
    let allAuthors = <Text />;
    let cards = 0;

    const jumpToQuizWindow = quizId => {
      const {navigation} = this.props;
      navigation.navigate('DeckView', {
        itemId: quizId,
      });
    };

    if (decks.constructor === Object) {
      allAuthors = Object.keys(decks).map(function(id, index) {
        const {title, questions} = decks[id];

        cards =
          questions !== undefined && questions.constructor === Array
            ? questions.length
            : 0;
        return (
          <TouchableOpacity
            key={id}
            onPress={e => {
              jumpToQuizWindow(id);
            }}
            style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{title}</Text>
              <Text style={styles.sectionDescription}>{cards} Cards</Text>
            </View>
          </TouchableOpacity>
        );
      });
    }
    return allAuthors;
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {this.genertateQuestionGrouping()}
        </ScrollView>
      </SafeAreaView>
    );
  }

  componentDidMount() {
    const {decks, loadInitalDeck} = this.props;

    if (Object.keys(decks).length === 0 && decks.constructor === Object) {
      loadInitalDeck();
      console.log('loading questions from mock db no data in local storage');
    } else {
      console.log('questions loaded from local storage');
      console.log(decks);
    }
  }
}

const mapStateToProps = ({decks}) => {
  return {
    decks: decks,
  };
};

const mapDispatchToProps = {loadInitalDeck};

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
    backgroundColor: '#e5dfde',
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
