import {useContext} from "react";
import {TodoContext} from "../App";

const DoneList = () => {
    const { state , dispatch } = useContext(TodoContext);

  return (
      <div style={{display: "flex", flexDirection: "column"}}>
          {state.filter((item => item.done)).map(item => <span>{item.text}</span>)}
      </div>
  );
}

export default DoneList;
