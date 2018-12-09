import React from 'react';
import DefaultComponent from '../containers/WelcomeScreen.js';
import styles from '../styles/QuestionStyle';

const initialState = {
    component: <DefaultComponent/>,
    countAnswer: 0,
    nextBtnState: [
        true,
        styles.btnNextQuestionDisable,
        styles.touchableOpacityTextDisableBtn,

    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'NEXT_QUESTION':
            return {
                ...state,
                component: action.payload
            };
        case 'COUNT_ANSWER':
            return {
                ...state,
                countAnswer: action.payload
            };
        case 'SELECT_ANSWER':
            return {
                ...state,
                nextBtnState: action.payload
            };
        default:
            return state
    }
}
