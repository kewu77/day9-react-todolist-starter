import axios from "axios";


const instance = axios.create({
    baseURL : "https://67495c89868020296630ab7e.mockapi.io/api/v1",
    timeout : 5000
});

export const getTodos = async () => {
    const response = await instance.get("/todos");
    return response.data;
}


export const addTodo = async (Todo) => {
    const response = await instance.post("/todos",Todo);
    return response.status;
}

export const deleteTodo = async (id) => {
    const response = await instance.delete("/todos/" + id);
    return response.status;
}
