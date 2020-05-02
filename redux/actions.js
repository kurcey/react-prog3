import {ADD_QUESTION, ADD_ALL_QUESTION, ADD_DECK} from './actionTypes';
import {_getInitialDeck} from './_DATA';
import store from './store';

//this will need to be fixed
export const addQuestion = ({question, answer}) => ({
  type: ADD_QUESTION,
  payload: {
    question: question,
    answer: answer,
  },
});

export const addDeck = (id, title) => ({
  type: ADD_DECK,
  payload: {
    id: id,
    title: title,
  },
});

export const saveDeck = deckTitle => {
  store.dispatch(addDeck(generateUID(), deckTitle));
};

export const addAllQuestion = questions => ({
  type: ADD_ALL_QUESTION,
  payload: {
    questions,
  },
});

export const loadInitalDeck = () => {
  return function(dispatch) {
    return _getInitialDeck().then(
      ques => {
        store.dispatch(addAllQuestion(ques));
      },
      error => console.log(error),
    );
  };
};

export const generateUID = () => {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
};
