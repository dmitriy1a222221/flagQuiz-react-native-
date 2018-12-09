import React, { Component } from 'react';
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
import styles from '../styles/HomeStyle'


const Home = ({ NextQuestion }) => {
        return (
            <View
                style={styles.wrapBtn}
            >
                {NextQuestion}
            </View>
        );
}


export default Home;
