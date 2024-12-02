import "./CSS/TodoItem.css"
import {useContext, useState} from "react";
import {TodoContext} from "../App";
import {deleteTodo, updateTodo} from "../api/todos";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {Modal, Popconfirm} from "antd";

const TodoItem = (props) => {
    const { state, dispatch } = useContext(TodoContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const todoItem = state.filter((item) => item.id === props.id)
    const [editText, setEditText] = useState(todoItem[0].text);
    const handleTextClicked = () => {
        updateTodo({...todoItem[0], done: !todoItem[0].done}).then((status) => {
            dispatch({type:"UPDATE", payload: props.id});
        })
    }

    const remove = () => {
        deleteTodo(props.id).then((status) => {
            dispatch({type:"DELETE",payload: props.id});
        })

    }

    const confirm = () => {
        if(editText !== "" && editText !== todoItem[0].text){
            updateTodo({...todoItem[0], text: editText}).then((status) => {
                dispatch({type: "EDITTEXT", payload: {id : props.id, text : editText}});
                setIsModalOpen(false);
            })
        }

    }

    const cancel = () => {
        setIsModalOpen(false);
    }

    const showModal = () => {
        setIsModalOpen(true);
    }

    const handleChangeEditText = (event) => {
        setEditText(event.target.value);
    }

    return <div className={"TodoItemRow"}>
        <input className={!todoItem[0].done ? "input-active" : "input-inactive"} value={todoItem[0].text}
               onClick={handleTextClicked} readOnly={true}/>
        <button style={{marginLeft: "10px"}} onClick={remove}><DeleteOutlined/></button>
        <button style={{marginLeft: "10px"}} onClick={showModal}><EditOutlined/></button>
        <Modal title="Edit Todo" open={isModalOpen} onOk={confirm} onCancel={cancel}>
            <input value={ editText } onChange={handleChangeEditText}/>
        </Modal>

    </div>
}

export default TodoItem;
