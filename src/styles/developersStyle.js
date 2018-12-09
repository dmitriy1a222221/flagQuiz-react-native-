import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: 100 + '%',
        height: 100 + '%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#E3E3E3'
    },
    containerItem: {
        marginTop: 15,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    wrapTextBlock: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 5 + '%'
    },
    nameDev: {
        width: 100 + '%',
        fontSize: 20,
        fontWeight: 'bold'
    },
    aboutDev: {
        width: 100 + '%',
        fontSize: 14,
    }
});

export default styles
