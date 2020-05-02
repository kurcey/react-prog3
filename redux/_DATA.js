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
};

export function _getInitialDeck() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...decks}), 1000);
  });
}
