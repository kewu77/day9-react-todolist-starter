import {useContext, useEffect, useState} from "react";
import {TodoContext} from "../App";
import TodoItem from "./TodoItem";
import "./CSS/TodoGroup.css"
import {Pagination} from "antd";

const TodoGroup = () => {
    const { state } = useContext(TodoContext);
    const [ page, setPage ] = useState(1);
    const [ pageSize, setPageSize ] = useState(10);
    let currentData = state.slice((page - 1) * pageSize, page * pageSize);
    const handleChangePage = (page,pageSize) => {
        setPageSize(pageSize);
        setPage(page);
    }

    useEffect(() => {
        if(currentData.length === 0 && page > 1){
            setPage(page - 1);
        }
    },[currentData.length === 0])

    return (
        <div className={"contains"} >
            {state.length === 0 ? <span>Add the things you npm need to do today...</span> : currentData.map((item,index) => {
                return (
                    <TodoItem key={item.id + index} todo={item.text} id = {item.id}/>
                )
            })}
            <Pagination align="center" current={page} total={state.length} pageSize={pageSize} onChange={handleChangePage}/>
        </div>
    );
}

export default TodoGroup;
