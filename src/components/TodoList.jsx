import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import {useContext, useEffect} from "react";
import {TodoContext} from "../App";
import {getTodos} from "../api/todos";

const TodoList = () => {
    const { dispatch } = useContext(TodoContext)

    useEffect(() => {
        getTodos().then((todos) => {
            dispatch({type : "INIT", payload : todos})
        });

    },[])

    return (
        <div>
            <h2>{"Todo List"}</h2>
            <TodoGroup/>
            <TodoGenerator/>
        </div>

    );
}

export default TodoList
