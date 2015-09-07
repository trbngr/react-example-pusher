import { ITEM_ADDED } from '../actions/List.js';

const initialState = [];

export default function list(state = initialState, action = undefined){
    switch (action.type){

        case ITEM_ADDED:
            return [
                action.item,
                ...state
            ];

        default:
            return state;
    }
}