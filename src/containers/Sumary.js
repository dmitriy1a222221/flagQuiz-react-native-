import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Sumary from '../components/Sumary';
import * as nextQuestionActions from '../actions/nextQuestion';
import * as imageActions from '../actions/image';


const mapStateToProps = (state) => {
    return {
        NextQuestion: state.newQuestion.component,
        countAns: state.newQuestion.countAnswer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(nextQuestionActions, dispatch),
        ...bindActionCreators(imageActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sumary);
