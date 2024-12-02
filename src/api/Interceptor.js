import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080/todos",
});

let start;
let end;

instance.interceptors.request.use(
    (config) => {
        config.metadata = {start: new Date()}
        console.log("Request: ", config);
        return config;
    },
    (error) => {
        console.error("Error: ", error);
        return error;
    }
)

instance.interceptors.response.use(
    (response) => {
        console.log("Response: ", response);
        const duration = new Date() - response.config.metadata.start
        console.log("timeSheep:", Date.now() - start);
        console.log("url:%s\n", response.config.baseUrl + response.config.url);
        console.log("method:%s\n", response.config.method);
        console.log("duration time:", duration);
        console.log(`url:${response.config.url} method:${response.config.method} duration time:${duration}`)
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 404) {
            window.location.href = "/not-found";
        }
        if (error.response && error.response.status === 500) {
            window.location.href = "/hard-stop";
        }
        console.log("Error: " + error)
        return error;
    }
)

export default instance;
