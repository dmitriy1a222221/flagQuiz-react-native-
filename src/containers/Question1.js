import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Question1 from '../components/Question1';
import * as imageActions from '../actions/image';
import * as nextQuestionActions from '../actions/nextQuestion';
import * as btnAnswerActions from '../actions/btnAnswer'


const mapStateToProps = (state) => {
    return {
        arrIndex: state.image.arrayIndex,
        NextQuestion: state.newQuestion.component,
        changeSteteBtnNext: state.newQuestion.nextBtnState,
        changeBtnState: state.btnAnswer.btnState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(imageActions, dispatch),
        ...bindActionCreators(nextQuestionActions, dispatch),
        ...bindActionCreators(btnAnswerActions, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Question1);
