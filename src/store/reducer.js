import {INPUT_CHANGED, ADD_ITEM, DELETE_ITEM} from "./actionTypes"


const defaultState = {


    inputVal: "",
    list: []
}

export default (state = defaultState, action) => {


    const type = action.type
    const value = action.value

    console.log("type:" + type, "value" + value)

    const newState = JSON.parse(JSON.stringify(state))

    if (type === INPUT_CHANGED) {

        newState.inputVal = action.value
        return newState
    }
    if (type === DELETE_ITEM) {
        newState.list.splice(action.value, 1)

        return newState
    }
    if (type === ADD_ITEM) {
        newState.inputVal = ""
        newState.list.push(value)
        return newState
    }
    return state
}
