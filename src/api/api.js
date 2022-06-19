import axios from "axios";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const API_URL = "http://localhost:8080"

class API {

    static async shortenURL(url) {
        const response = await axios.post(`${API_URL}/shortener`, { longURL: url });
        
        return response.data.shortURL;
    }

    static async getURL(shortURL) {
        const response = await fetch(shortURL);
        return await response.json();
    }
}

export default API;