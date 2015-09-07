import { CONNECT_TO_PUSHER, CONNECTED_TO_PUSHER } from '../actions/Pusher.js';

const initialState = {
    connecting: false,
    client: undefined
};

export default function pusher(state = initialState, action = undefined) {
    switch (action.type) {

        case CONNECT_TO_PUSHER:
            return Object.assign({}, state, {connecting: true});

        case CONNECTED_TO_PUSHER:
            return Object.assign({}, state, {connecting: false, client: action.client});

        default:
            return state;
    }
}