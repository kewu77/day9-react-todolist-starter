import "./CSS/TodoItem.css"
import {useContext, useState} from "react";
import {TodoContext} from "../App";
import {deleteTodo, updateTodoDone} from "../api/todos";

const TodoItem = (props) => {
    const { state, dispatch } = useContext(TodoContext);
    const todoItem = state.filter((item) => item.id === props.id)
    const handleTextClicked = () => {
        updateTodoDone(todoItem[0]).then((status) => {
            console.log(status);
            dispatch({type:"UPDATE", payload: props.id});
        })
    }

    const remove = () => {
        deleteTodo(props.id).then((status) => {
            if(status === 200)
                dispatch({type:"DELETE",payload: props.id});
            else
                alert("FAIL")
        })

    }

    return <div className={"TodoItemRow"}>
        <input className={!todoItem[0].done ? "input-active" : "input-inactive"} value={props.todo} onClick={handleTextClicked}/>
        <button style={{marginLeft: "10px"}} onClick={remove}>X</button>
    </div>
}

export default TodoItem;
