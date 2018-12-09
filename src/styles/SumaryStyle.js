import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: 100 + '%',
        height: 100 + '%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#E3E3E3'
    },
    containerText: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        width: 50 + '%',
        fontSize: 30
    },
    titleBig: {
        width: 50 + '%',
        fontSize: 37,
        fontWeight: 'bold'
    },
    viewButtonContainer: {
        width: 100 + '%',
        height: 20 + '%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    touchableOpacityText: {
        fontSize: 24
    },
    btnNextQuestion: {
        width: 75 + '%',
        backgroundColor: '#10AB03',
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
    devByText: {
        fontSize: 14
    },
    devByBTN: {
        width: 50 + '%',
        backgroundColor: '#84997F',
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
    }
});

export default styles
