import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

class Quiz extends Component {
  state = {
    question: '',
    answer: '',
  };
  handleQuestion = text => {
    this.setState({question: text});
  };
  handleAnswer = text => {
    this.setState({answer: text});
  };
  login = (question, answer) => {
    alert('question: ' + question + ' answer: ' + answer);
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
          onChangeText={this.handleQuestion}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Answer"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleAnswer}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.login(this.state.question, this.state.answer)}>
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
});
