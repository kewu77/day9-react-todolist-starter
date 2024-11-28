import {useContext} from "react";
import {TodoContext} from "../App";
import TodoItem from "./TodoItem";
import "./CSS/TodoGroup.css"

const TodoGroup = () => {
    const { state } = useContext(TodoContext);
    return (
        <div className={"contains"} >
            {state.length === 0 ? <span>Add the things need to do today...</span> : state.map((item,index) => {
                return (
                    <TodoItem key={item.id + index} todo={item.text} id={item.id}/>
                );
            })}
        </div>
    );
}

export default TodoGroup;
