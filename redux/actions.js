import {ADD_QUESTION, ADD_ALL_QUESTION} from './actionTypes';

import {_getQuestions, _saveQuestion, _saveQuestionAnswer} from './_DATA';
import store from './store';

export const addQuestion = ({id, author, timestamp, optionOne, optionTwo}) => ({
  type: ADD_QUESTION,
  payload: {
    id: id,
    author: author,
    timestamp: timestamp,
    optionOne: optionOne,
    optionTwo: optionTwo,
  },
});

export const addAllQuestion = questions => ({
  type: ADD_ALL_QUESTION,
  payload: {
    questions,
  },
});

export const saveQuestion = questionObject => {
  return function(dispatch) {
    return _saveQuestion(questionObject).then(
      ques => {
        dispatch(addQuestion(ques));
      },
      error => console.log(error),
    );
  };
};

export const saveQuestionAnswer = questionObject => {
  return function(dispatch) {
    return _saveQuestionAnswer(questionObject).then(
      ans => {
        dispatch(saveAnswer(questionObject));
      },
      error => console.log(error),
    );
  };
};

export const loadInitalQuestions = () => {
  return function(dispatch) {
    return _getQuestions().then(
      ques => {
        store.dispatch(addAllQuestion(ques));
      },
      error => console.log(error),
    );
  };
};
