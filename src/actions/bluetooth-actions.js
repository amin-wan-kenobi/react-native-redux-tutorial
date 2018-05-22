import * as BluetoothTypes from '../constants/bluetooth-types';

export const CONNECT_DEVICE = (pid) => ({
    type: BluetoothTypes.CONNECT_LOCKS,
    payload: pid
})