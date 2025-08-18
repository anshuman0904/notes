import axios from "axios";

const api = axios.create({
    baseURL : "https://verbose-meme-rq94776g46g255q-5001.app.github.dev/api"
});

export default api;