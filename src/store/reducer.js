import {ADD_ITEM, DELETE_ITEM, INPUT_CHANGED} from "./actionTypes"


const defaultState = {


    inputVal: "",
    list: []
};


/*
*
* reducer可以接收state，但是不能修改state
* reducer必须是一个纯函数。纯函数指的是，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
* */
export default (state = defaultState, action) => {


    const type = action.type;
    const value = action.value;

    console.log(`type:${type}  ---  value:${value}`);

    const newState = JSON.parse(JSON.stringify(state));

    switch (type) {
        case INPUT_CHANGED:
            newState.inputVal = action.value;
            return newState;
        case DELETE_ITEM:
            newState.list.splice(action.value, 1);
            return newState;
        case ADD_ITEM:
            newState.inputVal = "";
            newState.list.push(value);
            return newState;

        default:

            return state

    }

}
