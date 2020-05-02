import {ADD_QUESTION, ADD_ALL_QUESTION, ADD_DECK} from '../actionTypes.js';

export default function(state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION: {
      const {id, questionArray} = action.payload;
      return {
        ...state,
        [id]: {
          ...questionArray,
        },
      };
    }
    case ADD_ALL_QUESTION: {
      return {
        ...state,
        ...action.payload.questions,
      };
    }
    case ADD_DECK: {
      const {id, title} = action.payload;
      return {
        ...state,
        [id]: {
          title: title,
        },
      };
    }
    default:
      return state;
  }
}
