import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AllActions from '../actions';

class Calc extends Component {
    componentWillMount(){
        console.log('WILL',this.props)
    }

    componentDidMount(){
        setTimeout(() => {
            this.props.addAction(100);
        },1000);

        setTimeout(() => {
            this.props.subAction(50);
        },2000);

        setTimeout(() => {
            this.props.multAction(4);
        },3000);

        setTimeout(() => {
            this.props.divAction(10);
        },4000);
        
        setTimeout(() => {
            this.props.blutoothAction('555');
        },5000);
        setTimeout(() => {
            this.props.blutoothAction('1000');
        },6000);
    }

    render(){
        return(
            <View style={{ flex: 1}}>
                <Text style={styles.textStyle}>
                    {this.props.result}
                </Text>
                <Text style={styles.textStyle}>
                    {this.props.testValue}
                </Text>
                <Text style={styles.textStyle}>
                    {this.props.connected}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        fontSize: 20,
        alignSelf: 'center'
    }
});

mapStateToProps = (state) => ({
    result: state.mathReducer.result,
    testValue: state.mathReducer.testValue,
    connected: state.bleReducer.connected
});

mapDispatchToProps = (dispatch) => bindActionCreators({
    addAction: AllActions.ADD,
    subAction: AllActions.SUB,
    multAction: AllActions.MULT,
    divAction: AllActions.DIV,
    blutoothAction: AllActions.CONNECT_DEVICE
    //test: AllActions.testFunc
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Calc);
