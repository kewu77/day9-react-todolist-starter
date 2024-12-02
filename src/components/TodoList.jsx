import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import {useContext, useEffect} from "react";
import {TodoContext} from "../App";
import {getTodos} from "../api/todos";
import {LoadingOutlined} from "@ant-design/icons";
import {Spin} from "antd";

const TodoList = () => {
    const { state,dispatch } = useContext(TodoContext)

    useEffect(() => {
        getTodos().then((todos) => {
            dispatch({type : "INIT", payload : todos})
        });

    },[])

    return (
        <div>
            <h2>{"Todo List"}</h2>
            {state === undefined || state.length === 0 ? <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} /> : <div>
                <TodoGenerator/>
                <TodoGroup/>
            </div>}

        </div>

    );
}

export default TodoList
