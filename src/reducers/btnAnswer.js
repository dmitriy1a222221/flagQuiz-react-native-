
import styles from '../styles/QuestionStyle.js';

const initialState = {
    btnState: {
        btn1: styles.touchableOpacity,
        btn2: styles.touchableOpacity,
        btn3: styles.touchableOpacity,
        btn4: styles.touchableOpacity
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'BTN_STATE_CHANGE_1':
            return {
                ...state,
                btnState: {
                    ...state.btnState,
                    btn1: action.payload
                }
            };
            break;
        case 'BTN_STATE_CHANGE_2':
            return {
                ...state,
                btnState: {
                    ...state.btnState,
                    btn2: action.payload
                }
            };
            break;
        case 'BTN_STATE_CHANGE_3':
            return {
                ...state,
                btnState: {
                    ...state.btnState,
                    btn3: action.payload
                }
            };
            break;
        case 'BTN_STATE_CHANGE_4':
            return {
                ...state,
                btnState: {
                    ...state.btnState,
                    btn4: action.payload
                }
            };
            break;
        case 'BTN_STATE_CHANGE_All':
            return {
                ...state,
                btnState: {
                    btn1: action.payload,
                    btn2: action.payload,
                    btn3: action.payload,
                    btn4: action.payload
                }
            };
            break;
        default:
            return state
    }
}
