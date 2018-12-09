import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WelcomeScreen from '../components/WelcomeScreen';
import * as nextQuestionActions from '../actions/nextQuestion';


const mapStateToProps = (state) => {
    return {
        NextQuestion: state.newQuestion.component
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(nextQuestionActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
