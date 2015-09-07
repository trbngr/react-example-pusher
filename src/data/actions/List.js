export const ITEM_ADDED = 'ITEM_ADDED';

export function itemAdded(item){
    return {type: ITEM_ADDED, item};
}