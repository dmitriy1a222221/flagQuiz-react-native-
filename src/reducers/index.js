import { combineReducers } from 'redux';

import newQuestion from './newQuestion.js';
import image from './image.js';
import btnAnswer from './btnAnswer.js'

export default combineReducers({
    image,
    newQuestion,
    btnAnswer
})
