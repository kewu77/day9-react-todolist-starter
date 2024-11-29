import {useContext, useState} from "react";
import {TodoContext} from "../App";
import TodoItem from "./TodoItem";
import "./CSS/TodoGroup.css"
import {Pagination} from "antd";

const TodoGroup = () => {
    const { state } = useContext(TodoContext);
    const [ page, setPage ] = useState(1);
    const [ pageSize, setPageSize ] = useState(10);
    let maxSize = 10;
    const handleChangePage = (page,pageSize) => {
        setPageSize(pageSize);
        setPage(page);
    }

    let currentData = state.slice((page - 1) * pageSize, page * pageSize);
    return (
        <div className={"contains"} >
            {state.length === 0 ? <span>Add the things you npm need to do today...</span> : currentData.map((item,index) => {
                return (
                    <TodoItem key={item.id + index} todo={item.text} id={item.id}/>
                )
            })}
            <Pagination align="center" current={page} total={state.length} pageSize={pageSize} onChange={handleChangePage}/>
        </div>
    );
}

export default TodoGroup;
