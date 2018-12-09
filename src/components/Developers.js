import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Button,
    Alert,
    ScrollView
} from 'react-native';
import styles from '../styles/developersStyle';

const DevelopItem = (props) => {
    const {img, nameDev, aboutDev} = props
        return(
            <View style={styles.containerItem}>
                <Image
                    style={styles.img}
                    source={img}
                />
                <View style={styles.wrapTextBlock}>
                    <Text style={styles.nameDev}>{nameDev}</Text>
                    <Text style={styles.aboutDev}>{aboutDev}</Text>
                </View>
            </View>
        );
};

class Developers extends React.Component {

    render() {
        return(
            <View style={styles.container}>
                <DevelopItem
                    img={require('../img/kate.jpg')}
                    nameDev={'Симоненко Катя'}
                    aboutDev={'Студентка 41ІА групи'}
                />
                <DevelopItem
                    img={require('../img/andry.jpg')}
                    nameDev={'Шадура Анрдій'}
                    aboutDev={'Студент 41ІА групи'}
                />
                <DevelopItem
                    img={require('../img/dima.jpg')}
                    nameDev={'Касянчук Дмитро'}
                    aboutDev={'Студент 41ІА групи'}
                />
            </View>
        );
    }
}

export default Developers;
