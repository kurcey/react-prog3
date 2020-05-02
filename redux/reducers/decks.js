import {
  ADD_QUESTION,
  ADD_ALL_QUESTION,
  ADD_DECK,
  ADD_CARD,
} from '../actionTypes.js';

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
    case ADD_CARD: {
      const {deckID, question, answer} = action.payload;
      const origionalQuesiton = state[deckID].questions;
      origionalQuesiton.push({question: question, answer: answer});
      const origionalTitle = state[deckID].title;
      console.log(origionalQuesiton);
      return {
        ...state,
        [deckID]: {
          title: origionalTitle,
          questions: origionalQuesiton,
        },
      };
    }
    default:
      return state;
  }
}
