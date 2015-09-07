export const CONNECT_TO_PUSHER = 'CONNECT_TO_PUSHER';
export const CONNECTED_TO_PUSHER = 'CONNECTED_TO_PUSHER';

import $script from 'scriptjs';

const scriptUrl = 'https://js.pusher.com/3.0/pusher.js';
const key = '3e619c9326c8ad4866cf';
const options = {
    encrypted: true
};

export function connectToPusher(){
    return (dispatch, getState) => {
        const client = getState().pusher.client;

        if(client !== undefined)
        {
            dispatch(connectedToPusher(client))
            return;
        }

        dispatch({type: CONNECT_TO_PUSHER});

        $script(scriptUrl, function () {
            dispatch(connectedToPusher(new Pusher(key, options)));
        });

    };
}

export function connectedToPusher(client){
    return {
        type: CONNECTED_TO_PUSHER,
        client
    }
}