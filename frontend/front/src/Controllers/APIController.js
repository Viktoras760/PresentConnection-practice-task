import axios from 'axios';

export default function APIController() {

    const http = axios.create({
        baseURL: "http://localhost:7279/api",
        headers: {
            "Content-type": "application/json"
        }
    });

    return {
        http
    }
}