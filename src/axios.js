// every request to be sent has to have same beginning URL

import axios from "axios";

const instance = axios.create({

    baseURL: "https://api.themoviedb.org/3",

});

export default instance;