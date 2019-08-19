import {Input, List} from "antd"; // or 'antd/dist/antd.less'
import * as React from "react";
import "./TodoList.css"


/*无状态ui组件 相比于class方式创建 该方式性能更好*/
const TodoListUi = (props) => {
    const {Search} = Input;
    return <div className={"container"}>
        <Search placeholder={"请输入要新增的内容"} enterButton={"新增"}
                value={props.inputVal}
                onChange={props.inputChange}
                onSearch={(value) => props.add(value)}
        />


        <List className={"list"}
              size="small"
              bordered
              dataSource={props.list}
              renderItem={(item, index) =>
                  <List.Item
                      /*
                      * 这个地方要用匿名函数调用  否则会出现死循环
                      * */
                      onClick={() => props.delete(index)}>{index} --- {item}</List.Item>}
        />
    </div>
};


export default TodoListUi;
