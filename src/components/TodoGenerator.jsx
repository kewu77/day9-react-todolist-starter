import {useContext, useState} from "react";
import {TodoContext} from "../App";
import {addTodo} from "../api/todos";

const TodoGenerator = () => {
    const [text,setText] = useState("");
    const { dispatch } = useContext(TodoContext);

    const handleTestChange = (event) => {
        setText(event.target.value);
    }

    const handleAdd = () => {
        if(text.trim()){
            addTodo({text: text, done: false}).then((response) => {
                if(response.status === 201)
                    dispatch({type: "ADD",payload: response.data});
                else
                    alert("FAIL");
            })

        }

    }

    return (
        <div style={{marginBottom:"10px"}}>
            <input maxLength={100} value={text} onChange={handleTestChange}/>
            <button style={{marginLeft : "5px"}} onClick={handleAdd}>add</button>
        </div>
    );
}

export default TodoGenerator;
