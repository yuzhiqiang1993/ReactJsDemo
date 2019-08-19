import {createStore} from "redux";
import reducer from "./reducer";


/*Redux使用原则
* 1.Store必须是唯一的
* 2.数据的修改由Store来完成，外部不可修改数据
*
*
* */
const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store
