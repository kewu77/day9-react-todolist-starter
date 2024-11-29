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
            addTodo({id: new Date(), text: text, done: true}).then((status) => {
                if(status === 201)
                    dispatch({type: "ADD",payload: text});
                else
                    alert("FAIL");
            })

        }

    }

    return (
        <div>
            <input maxLength={100} value={text} onChange={handleTestChange}/>
            <button style={{marginLeft : "5px"}} onClick={handleAdd}>add</button>
        </div>
    );
}

export default TodoGenerator;
