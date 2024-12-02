import instance from "./Interceptor";

export const getTodos = async () => {
    const response = await instance.get("");
    return response.data;
}

export const addTodo = async (Todo) => {
    const response = await instance.post("",{text : Todo.text, done : Todo.done});
    return response;
}

export const deleteTodo = async (id) => {
    const response = await instance.delete("/" + id);
    return response.status;
}

export const updateTodo = async (Todo) => {
    const response = await instance.put("/"+ Todo.id, {text : Todo.text, done : Todo.done});
    return response.status;
}
