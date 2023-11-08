//Максимально допустимое время для ответа (в секундах)
export const ALLOWED_TIME = 15;

//Данные для отображения информации в зависимости от ответа
export const answerTypes = {
  correct: {
    class: 'correct',
    icon: '/icons/success.svg',
    description: 'You answered correctly! <br> Continue to next question?',
  },
  wrong: {
    class: 'wrong',
    icon: '/icons/wrong.svg',
    description: 'You answered incorrectly! <br> Continue to next question?',
  },
};

//Возможные варианты ответа
export const getActionButtons = (action: (answer: boolean) => void) => [
  {
    type: 'wrong',
    action: () => action(false),
    text: 'False',
    id: 1,
  },
  {
    type: 'success',
    action: () => action(true),
    text: 'True',
    id: 2,
  },
];
