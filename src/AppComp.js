import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './store'

import Home from './containers/Home';
import Developers from './components/Developers';


import {
    Router,
    Scene
} from  'react-native-router-flux';

import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';


class AppComp extends React.Component {
    render() {
        return(
            <Provider store={createStore()}>
                <Router>
                    <Scene key='root' style={{paddingTop: Platform.OS === 'ios' ? 64 : 54}}>
                        <Scene key='home' component={Home} title='Flag Quiz' />
                        <Scene key='developers' component={Developers} title='Developed By...' />
                    </Scene>
                </Router>
            </Provider>
        );
    }
}

export default AppComp
