import {useContext} from "react";
import {TodoContext} from "../App";

const DoneList = () => {
    const { state , dispatch } = useContext(TodoContext);

  return (
      <div>
          {state.filter((item => item.done)).map(item => <span>{item.text}</span>)}
      </div>
  );
}

export default DoneList;
