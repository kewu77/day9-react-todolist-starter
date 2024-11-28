import "./CSS/TodoItem.css"
import {useContext, useState} from "react";
import {TodoContext} from "../App";

const TodoItem = (props) => {
    const { state, dispatch } = useContext(TodoContext);
    const todoItem = state.filter((item) => item.id === props.id)
    const handleTextClicked = () => {
        dispatch({type:"UPDATE", payload: props.id});
    }

    const remove = () => {
        dispatch({type:"DELETE",payload: props.id});
    }

    return <div className={"TodoItemRow"}>
        <input className={!todoItem[0].done ? "input-active" : "input-inactive"} value={props.todo} onClick={handleTextClicked}/>
        <button style={{marginLeft: "10px"}} onClick={remove}>X</button>
    </div>
}

export default TodoItem;