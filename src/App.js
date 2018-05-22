import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import Calc from './components/Calc'

import * as allReducers from './reducers';

const appReducers = combineReducers({
    mathReducer: allReducers.mathReducer,
    bleReducer: allReducers.bluetoothReducer
})

//const store = createStore(allReducers.mathReducer);
const store = createStore(appReducers);

class App extends Component {
    render(){
        return(
            <Provider store={store}>
                <View style={{ flex: 1}}>
                    <Text style={styles.textStyle}>
                        Welcome to Cycle Finder
                    </Text>
                    <Calc />
                </View>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        fontSize: 24,
        alignSelf: 'center'
    }
});

export default App;
