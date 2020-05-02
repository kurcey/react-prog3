import {ADD_QUESTION, ADD_ALL_QUESTION} from '../actionTypes.js';

export default function(state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION: {
      const {id, author, optionOne, optionTwo, timestamp} = action.payload;
      return {
        ...state,
        [id]: {
          id: id,
          author: author,
          optionOne: optionOne,
          optionTwo: optionTwo,
          timestamp,
        },
      };
    }
    case ADD_ALL_QUESTION: {
      return {
        ...state,
        ...action.payload.questions,
      };
    }
    default:
      return state;
  }
}
