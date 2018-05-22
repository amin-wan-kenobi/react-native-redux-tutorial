//Action Creators
import * as MathTypes from '../constants/math-types';

export const ADD = (payload = 0) => ({
    type: MathTypes.ADD_NUMBER,
    payload
})

export const SUB = (payload = 0) => ({
    type: MathTypes.SUB_NUMBER,
    payload
})

export const MULT = (payload = 1) => ({
    type: MathTypes.MULTIPLY_NUMBER,
    payload
})

export const DIV = (payload = 1) => ({
    type: MathTypes.DIVIDE_NUMBER,
    payload
})

// export function testFunc (helloThere){
//     function asyncFunc(dispatch){
//         dispatch({
//             type:'ASD',
//             payload: 123
//         })
//     }
// }