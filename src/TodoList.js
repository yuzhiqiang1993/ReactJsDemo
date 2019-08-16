import * as React from "react";
import {Input, List, message, Modal} from "antd"; // or 'antd/dist/antd.less'
import 'antd/dist/antd.css';

import "./TodoList.css"


class TodoList extends React.Component {


    constructor(props) {
        super(props)

        this.handleInputChanged = this.handleInputChanged.bind(this)

        this.state = {
            inputVal: "",
            itemList: []

        }
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
                      dataSource={this.state.itemList}
                      renderItem={(item, index) =>
                          <List.Item
                              onClick={this.handleDelete.bind(this, index)}>{index} --- {item}</List.Item>}
                />
            </div>
        )
    }


    /*处理删除操作*/
    handleDelete = index => {

        const {confirm} = Modal
        confirm({
            title: "是否删除" + this.state.itemList[index],
            onOk: () => {
                this.delete(index)

            }
        })


    };

    /*执行删除*/
    delete(index) {
        this.setState((preState) => {

            const list = [...preState.itemList]
            list.splice(index, 1)
            return {
                itemList: list
            }
        })
    }

    /*输入框数据发生变化*/
    handleInputChanged(e) {
        const inputContent = e.target.value

        this.setState(() => ({
            inputVal: inputContent
        }))

    }

    /*新增item*/
    addItem(value) {

        if (value === "") {
            message.info("内容不能为空，请检查")
            return
        }

        this.setState((preState) => ({

            inputVal: "",
            itemList: [...preState.itemList, value]
        }))
    }
}


export default TodoList
