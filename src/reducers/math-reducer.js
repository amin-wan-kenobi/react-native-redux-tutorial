import * as Actions from '../constants';


const initialState = {
    testValue: 'HELLO',
    result: 0
}

export const mathReducer = (previousState = initialState, action) => {
    //let newState = { ...previousState };
    let newState = Object.assign({}, previousState);
    console.log('State-Math 1', newState, previousState);
    switch(action.type){
        case Actions.ADD_NUMBER: {
            newState.result = previousState.result + action.payload,
            newState.testValue = 'ADD'
            break;
        }

        case Actions.SUB_NUMBER: {
            newState.result = previousState.result - action.payload;
            newState.testValue = 'SUB';
            break;
        }
        case Actions.MULTIPLY_NUMBER: {
            newState.result = previousState.result * action.payload;
            newState.testValue = 'MULT'
            break;
        }
        case Actions.DIVIDE_NUMBER: {
            newState.result = previousState.result / action.payload;
            newState.testValue = 'DIV'
            break;
        }
        default:
            return previousState;
    }
    console.log('State-Math 2', newState);
    return newState;
}