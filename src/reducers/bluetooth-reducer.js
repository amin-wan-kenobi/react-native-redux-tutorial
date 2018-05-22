import * as Actions from '../constants';

export const bluetoothReducer = (previousState, action) => {
    let newState = { ...previousState};
    console.log('State-Bluetooth1', newState, previousState);
    switch(action.type){
        case Actions.SEARCH_FOR_LOCKS: {
            newState.lock = action.payload;
            break;
        }
        case Actions.CONNECT_LOCKS: {
            newState.connected = action.payload
            break;
        }
        // default:
        //     return newState;
    }
    console.log('State-Bluetooth2', newState);
    return newState;
}