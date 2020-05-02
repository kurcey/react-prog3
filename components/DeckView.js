import React, {Component} from 'react';
import {connect} from 'react-redux';

import {View, Button, Text, Animated} from 'react-native';

class DeckView extends Component {
  render() {
    const {navigation, decks} = this.props;
    const {itemId} = this.props.route.params;
    console.log(decks[itemId]);

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home screen</Text>

        <Button
          title="Go to Add Card"
          onPress={() => navigation.navigate('AddCard')}
        />

        <Button title="Go back" onPress={() => navigation.goBack()} />
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

//export default DeckView;
