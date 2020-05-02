import {
  ADD_QUESTION,
  ADD_ALL_QUESTION,
  ADD_DECK,
  ADD_CARD,
} from './actionTypes';
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

export const addCard = (deckID, question, answer) => ({
  type: ADD_CARD,
  payload: {
    deckID: deckID,
    question: question,
    answer: answer,
  },
});

export const saveDeck = deckTitle => {
  const newID = generateUID();
  store.dispatch(addDeck(newID, deckTitle));
  return newID;
};

export const addCardToDeck = (deckID, {question, answer}) => {
  const cardID = generateUID();
  store.dispatch(addCard(deckID, question, answer));
  return cardID;
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
