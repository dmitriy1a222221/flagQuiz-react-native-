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
import Sumary from '../containers/Sumary';


import styles from '../styles/QuestionStyle';

const arrImages = [
    require('../img/flags/albania.gif'),
    require('../img/flags/algeria.gif'),
    require('../img/flags/andorra.gif'),
    require('../img/flags/angola.gif'),
    require('../img/flags/argentina.gif'),
    require('../img/flags/armenia.gif'),
    require('../img/flags/australia.gif'),
    require('../img/flags/austria.gif'),
    require('../img/flags/azerbaijan.gif'),
    require('../img/flags/bangladesh.gif')
];
const arrImagesName = [
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Argertina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bangladesh',
];

const arrBtnName = [
    ['Russia', 'Albania', 'USA', 'Austria'],
    ['Algeria', 'India', 'Jamaica', 'Kenya'],
    ['Liberia', 'Andorra', 'Malaysia', 'Mali'],
    ['Macedonia', 'Mexico', 'Namibia', 'Angola'],
    ['Pakistan', 'Argertina', 'Rwanda', 'Panama'],
    ['Samoa', 'Taiwan', 'Armenia', 'Thailand'],
    ['Australia', 'Vanuatu', 'Zambia', 'Monaco'],
    ['Zambia', 'Monaco', 'Austria', 'Mexico'],
    ['Azerbaijan', 'Russia', 'Uganda', 'Austria'],
    ['Uganda', 'Monaco', 'Algeria', 'Bangladesh']
]

class Question1 extends Component {

    constructor(props) {
        super(props);
        this.i = 0;
        this.countAnsw = 0;
    }

    onPressBtn(nameElem, array) {
        const {
            arrIndex,
            nextImage,
            nextQuestion,
            countAnswer,
            changeStateBtn_1,
            changeStateBtn_2,
            changeStateBtn_3,
            changeStateBtn_4,
            selectAnswer
        } = this.props;
        if(nameElem == arrImagesName[arrIndex]) {
            this.countAnsw++
            countAnswer(this.countAnsw)
            switch (array.indexOf(nameElem)) {
                case 0:
                    changeStateBtn_1(styles.btnGreen)
                    break;
                case 1:
                    changeStateBtn_2(styles.btnGreen)
                    break;
                case 2:
                    changeStateBtn_3(styles.btnGreen)
                    break;
                case 3:
                    changeStateBtn_4(styles.btnGreen)
                    break;
                default:
            }
            selectAnswer([false, styles.btnNextQuestionActive, styles.touchableOpacityText]);
        } else {
            switch (array.indexOf(arrImagesName[arrIndex])) {
                case 0:
                    changeStateBtn_1(styles.btnGreen)
                    break;
                case 1:
                    changeStateBtn_2(styles.btnGreen)
                    break;
                case 2:
                    changeStateBtn_3(styles.btnGreen)
                    break;
                case 3:
                    changeStateBtn_4(styles.btnGreen)
                    break;
                default:
            }
            switch (array.indexOf(nameElem)) {
                case 0:
                    changeStateBtn_1(styles.btnRed)
                    break;
                case 1:
                    changeStateBtn_2(styles.btnRed)
                    break;
                case 2:
                    changeStateBtn_3(styles.btnRed)
                    break;
                case 3:
                    changeStateBtn_4(styles.btnRed)
                    break;
                default:
            }
            selectAnswer([false, styles.btnNextQuestionActive, styles.touchableOpacityText]);
        }
    }

    nextQest(){
        const {
            arrIndex,
            nextImage,
            nextQuestion,
            changeStateBtnAll,
            selectAnswer,
            countAnswer
        } = this.props;
        if(this.i < 9) {
            this.i++;
            nextImage(this.i);
            changeStateBtnAll(styles.touchableOpacity)
            selectAnswer([true, styles.btnNextQuestionDisable, styles.touchableOpacityTextDisableBtn]);
        } else {
            this.i = 0;
            nextQuestion(<Sumary/>)
            changeStateBtnAll(styles.touchableOpacity)
            selectAnswer([true, styles.btnNextQuestionDisable, styles.touchableOpacityTextDisableBtn]);
            return
        }
    }
    render() {
        const { arrIndex, changeBtnState , changeSteteBtnNext} = this.props;
            return(
                <View>
                    <ScrollView styles={styles.container}>
                      <Text style={styles.title}>
                          Question {arrIndex+1} of 10
                      </Text>
                     <View style={styles.wrapFlag}>
                         <Image
                            resizeMode="contain"
                            source={arrImages[arrIndex]}
                            style={styles.image}
                         />
                     </View>
                      <Text style={styles.title}>
                         Guess the Country
                      </Text>
                      <View style={styles.viewButtonContainerAll}>
                          <View
                            style={styles.viewButtonContainer}
                          >
                              <TouchableOpacity
                                onPress={this.onPressBtn.bind(this, arrBtnName[arrIndex][0], arrBtnName[arrIndex])}
                                style={changeBtnState.btn1}
                              >
                                <Text
                                    style={styles.touchableOpacityText}
                                >
                                    {arrBtnName[arrIndex][0]}
                                </Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                              onPress={this.onPressBtn.bind(this, arrBtnName[arrIndex][1], arrBtnName[arrIndex])}
                                style={changeBtnState.btn2}
                              >
                                <Text
                                    style={styles.touchableOpacityText}
                                >
                                    {arrBtnName[arrIndex][1]}
                                </Text>
                              </TouchableOpacity>
                          </View>
                          <View
                            style={styles.viewButtonContainer}
                          >
                              <TouchableOpacity
                                onPress={this.onPressBtn.bind(this, arrBtnName[arrIndex][2], arrBtnName[arrIndex])}
                                style={changeBtnState.btn3}
                              >
                                <Text
                                    style={styles.touchableOpacityText}
                                >
                                    {arrBtnName[arrIndex][2]}
                                </Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                              onPress={this.onPressBtn.bind(this, arrBtnName[arrIndex][3], arrBtnName[arrIndex])}
                                style={changeBtnState.btn4}
                              >
                                <Text
                                    style={styles.touchableOpacityText}
                                >
                                    {arrBtnName[arrIndex][3]}
                                </Text>
                              </TouchableOpacity>
                          </View>
                          <View style={styles.viewButtonContainer}>
                              <TouchableOpacity
                                disabled={changeSteteBtnNext[0]}
                                onPress={this.nextQest.bind(this)}
                                style={changeSteteBtnNext[1]}
                              >
                                <Text
                                    style={changeSteteBtnNext[2]}
                                >
                                    Next
                                </Text>
                              </TouchableOpacity>
                          </View>
                      </View>
                    </ScrollView>
                </View>
            );
    }
}




export default Question1;
