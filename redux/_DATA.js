let questions = {
  '6ni6ok3ym7mf1p33lnez': {
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
  '8xf0y6ziyjabvozdd253nd': {
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

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000);
  });
}
