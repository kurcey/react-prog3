let decks = {
  '6ni6ok3ym7mf1p33lnez': {
    title: 'Is this Udacity Reviewer Cool?',
    questions: [
      {
        question: 'Will you let this app Pass on the first Review?',
        answer: '100% yes. (Well if you are cool) :)',
      },
      {
        question: 'Am I board so I am making up questions?',
        answer: 'You better beleve it!!!',
      },
      {
        question: 'Are the kids driving me crazy?',
        answer: 'Well yes being home with them for 8 weeks is not fun!!!',
      },
      {
        question: 'So how long have you be a developer?',
        answer: 'Proably a long time since you are reviewing code for the U.',
      },
      {
        question: 'Why did they make the second project so Hard?',
        answer:
          'This will be my 4th Udacity Nano degree and it looks like all the middle projects are hard.',
      },
      {
        question: 'Well I am done entertaining you with questions?',
        answer: 'Rate me a 5 star.',
      },
    ],
  },
  '7ni6ok3ym7mf1p33lnez': {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
  },
  '8ni6ok3ym7mf1p33lnez': {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
};

export function _getInitialDeck() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...decks}), 1000);
  });
}
