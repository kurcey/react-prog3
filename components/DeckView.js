import {View, Button, Text, Animated} from 'react-native';

import React, {Component} from 'react';

class DeckView extends Component {
  render() {
    const {navigation} = this.props;
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
export default DeckView;
