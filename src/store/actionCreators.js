import {ADD_ITEM, DELETE_ITEM, INPUT_CHANGED} from "./actionTypes";

export const getInputChangeAction = (value) => ({
    type: INPUT_CHANGED,
    value
});


export const getAddItemAction = (value) => ({
    type: ADD_ITEM,
    value

});

export const getDeleteItemAction = (value) => ({
    type: DELETE_ITEM,
    value
});
