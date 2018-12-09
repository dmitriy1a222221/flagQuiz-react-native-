import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,

} from 'react-native';
import Question1 from '../containers/Question1';
import styles from '../styles/WelcomeScreenStyle'

const DefaultComponent = ({nextQuestion}) => {
    let changeComponent = () => {
        nextQuestion(<Question1/>)
    }
    return (
        <TouchableOpacity
            onPress={changeComponent}
            style={styles.btnStart}
        >
            <Text
                style={styles.btnStartText}
            >
                Start
            </Text>
        </TouchableOpacity>
    );
}

export default DefaultComponent
