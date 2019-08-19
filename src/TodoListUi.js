import {Input, List} from "antd"; // or 'antd/dist/antd.less'
import * as React from "react";
import 'antd/dist/antd.css';
import "./TodoList.css"

const TodoListUi = (props) => {
    const {Search} = Input;
    return <div className={"container"}>
        <Search placeholder={"请输入要新增的内容"} enterButton={"新增"}
                value={props.inputVal}
                onChange={props.inputChange}
                onSearch={value => props.add(value)}
        />


        <List className={"list"}
              size="small"
              bordered
              dataSource={props.list}
              renderItem={(item, index) =>
                  <List.Item
                      onClick={() => props.delete(index)}>{index} --- {item}</List.Item>}
        />
    </div>
};


export default TodoListUi;
