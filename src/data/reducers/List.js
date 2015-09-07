import {ADD_ITEM} from '../actions/List.js';

const initialState = [];

export default function list(state = initialState, action = undefined){
    switch (action.type){

        case ADD_ITEM:
            return [
                action.item,
                ...state
            ];

        default:
            return state;
    }
}