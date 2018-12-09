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
import {
    Actions
} from  'react-native-router-flux';

import styles from '../styles/SumaryStyle';
import Question1 from '../containers/Question1';

class Sumary extends React.Component {

    componentWillMount() {
        this.props.nextImage(0)
    }

    changeComponent(){
        this.props.nextQuestion(<Question1/>)
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.containerText}>
                    <Text style={styles.title}>Game Over</Text>
                    <Text style={styles.titleBig}>Your result</Text>
                    <Text style={styles.title}>{this.props.countAns}/10</Text>
                </View>
                <View style={styles.viewButtonContainer} >
                    <TouchableOpacity
                        onPress={this.changeComponent.bind(this)}
                        style={styles.btnNextQuestion}>
                        <Text style={styles.touchableOpacityText}>
                            Start again
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={Actions.developers}
                        style={styles.devByBTN}>
                        <Text style={styles.devByText}>
                            Developed by
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Sumary;
