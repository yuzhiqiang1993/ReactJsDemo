import * as React from "react";
import {message, Modal} from "antd"; // or 'antd/dist/antd.less'
import 'antd/dist/antd.css';
import "./TodoList.css"
import store from "./store";
import {getAddItemAction, getDeleteItemAction, getInputChangeAction} from './store/actionCreators'
import TodoListUi from "./TodoListUi"


class TodoList extends React.Component {

    constructor(props) {
        super(props);

        TodoList.handleInputChanged = TodoList.handleInputChanged.bind(this);
        // console.log(store.getState())
        this.handleStoreChange = this.handleStoreChange.bind(this);

        this.state = store.getState();
        store.subscribe(this.handleStoreChange)
        // console.log(this.state)
    }

    render() {
        return (
            <TodoListUi
                inputVal={this.state.inputVal}
                list={this.state.list}
                inputChange={TodoList.handleInputChanged}
                add={value => TodoList.addItem(value)}
                delete={index => this.handleDelete(index)}
            />

        )
    }

    handleStoreChange() {
        this.setState(store.getState())
    }


    /*处理删除操作*/
    handleDelete = index => {

        console.log(`要删除的下标：${index}`)

        const {confirm} = Modal;
        confirm({
            title: "是否删除 " + this.state.list[index],
            onOk: () => {
                TodoList.deleteItem(index)
            }
        })


    };

    /*执行删除*/
    static deleteItem(index) {

        console.log(index)

        store.dispatch(getDeleteItemAction(index))

    }

    /*输入框数据发生变化*/
    static handleInputChanged(e) {
        store.dispatch(getInputChangeAction(e.target.value))

    }

    /*新增item*/
    static addItem(value) {
        if (value === "") {
            message.info("内容不能为空，请检查")
            return
        }

        store.dispatch(getAddItemAction(value))


    }
}


export default TodoList
