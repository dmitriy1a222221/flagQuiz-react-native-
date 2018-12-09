import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: 100 + '%',
        height: 100 + '%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#CFC93A'
    },
    title: {
        width: 50 + '%',
        marginLeft: 30 + '%',
        marginTop: 4 + '%',
        fontSize: 20
    },
    buttonText: {
        marginLeft: 20,
        fontSize: 20
    },
    wrapFlag: {
        width: 100 + '%',
        alignItems: 'center',
        backgroundColor: '#7E8D9B',
        padding: 20,
        marginTop: 15,
        marginBottom: 5
    },
    image: {
        width: 300,
        height: 200,
    },
    button: {
        width: 30 + '%',
        backgroundColor: '#351808',
        color: 'green'
    },
    viewButtonContainerAll: {
        width: 100 + '%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewButtonContainer: {
        width: 95 + '%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
    },
    touchableOpacity: {
        textAlign: 'center',
        width: 45 + '%',
        backgroundColor: '#D9E2E7',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    btnRed: {
        textAlign: 'center',
        width: 45 + '%',
        backgroundColor: '#EA4F06',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    btnGreen: {
        textAlign: 'center',
        width: 45 + '%',
        backgroundColor: '#0AEA06',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    touchableOpacityText: {
        fontSize: 24
    },
    touchableOpacityTextDisableBtn: {
        fontSize: 24,
        color: '#959595'
    },
    btnNextQuestionDisable: {
        width: 95 + '%',
        backgroundColor: '#CBCBCB',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginBottom: 10,
        marginTop: 15
    },
    btnNextQuestionActive: {
        width: 95 + '%',
        backgroundColor: '#F2C15D',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginBottom: 10,
        marginTop: 15
    }

});

export default styles
