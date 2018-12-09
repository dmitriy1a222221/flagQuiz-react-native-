export const nextQuestion = (component) => ({
    type: 'NEXT_QUESTION',
    payload: component
});

export const countAnswer = (count) => ({
    type: 'COUNT_ANSWER',
    payload: count
});

export const selectAnswer = (arr) => ({
    type: 'SELECT_ANSWER',
    payload: arr
});
