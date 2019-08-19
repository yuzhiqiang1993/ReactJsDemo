import * as React from "react";
import {Input, List, message, Modal} from "antd"; // or 'antd/dist/antd.less'
import 'antd/dist/antd.css';
import {INPUT_CHANGED, ADD_ITEM, DELETE_ITEM} from "./store/actionTypes"
import "./TodoList.css"
import store from "./store";


class TodoList extends React.Component {

    constructor(props) {
        super(props)

        this.handleInputChanged = this.handleInputChanged.bind(this)
        // console.log(store.getState())
        this.handleStoreChange = this.handleStoreChange.bind(this)

        this.state = store.getState()
        store.subscribe(this.handleStoreChange)
        // console.log(this.state)
    }

    render() {
        const {Search} = Input;
        return (

            <div className={"container"}>
                <Search placeholder={"请输入要新增的内容"} enterButton={"新增"}
                        value={this.state.inputVal}
                        onChange={this.handleInputChanged}
                        onSearch={value => this.addItem(value)}
                />


                <List className={"list"}
                      size="small"
                      bordered
                      dataSource={this.state.list}
                      renderItem={(item, index) =>
                          <List.Item
                              onClick={this.handleDelete.bind(this, index)}>{index} --- {item}</List.Item>}
                />
            </div>
        )
    }

    handleStoreChange() {
        this.setState(store.getState())
    }


    /*处理删除操作*/
    handleDelete = index => {

        const {confirm} = Modal
        confirm({
            title: "是否删除 " + this.state.list[index],
            onOk: () => {
                this.delete(index)

            }
        })


    };

    /*执行删除*/
    delete(index) {


        const action = {
            type: DELETE_ITEM,
            value: index
        }
        store.dispatch(action)

    }

    /*输入框数据发生变化*/
    handleInputChanged(e) {
        const inputContent = e.target.value

        const action = {
            type: INPUT_CHANGED,
            value: inputContent
        }

        store.dispatch(action)
        // this.setState(() => ({
        //     inputVal: inputContent
        // }))

    }

    /*新增item*/
    addItem(value) {
        if (value === "") {
            message.info("内容不能为空，请检查")
            return
        }

        const action = {
            type: ADD_ITEM,
            value: value
        }


        store.dispatch(action)


        // this.setState((preState) => ({
        //     inputVal: "",
        //     list: [...preState.list, value]
        // }))
    }
}


export default TodoList
