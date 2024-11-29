import {createContext, useReducer} from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {todoReducer} from "./context/todoReducer";
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import RouteNotFound from "./components/RouteNotFound";
import DoneList from "./components/DoneList";

export const TodoContext = createContext();

function App() {
    const [state, dispatch] = useReducer(todoReducer, []);

    return (
        <div className="App">
            <TodoContext.Provider value={{state, dispatch}}>
                <BrowserRouter>
                    <nav>
                        <Link to={"/"}> Home </Link> | <Link to={"/todo-list"}> {"Todo List"} </Link> | <Link to={"/done-list"}> Done List</Link>
                    </nav>
                    <Routes>
                        <Route path={"*"} element={<RouteNotFound/>}></Route>
                        <Route path={"/"} element={<Navigate to="/todo-list"/>}/>
                        <Route path={"/todo-list"} element={<TodoList/>}></Route>
                        <Route path={"/done-list"} element={<DoneList/>}></Route>
                    </Routes>
                </BrowserRouter>
            </TodoContext.Provider>
        </div>
    );
}

export default App;
