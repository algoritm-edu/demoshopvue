import axios from "axios";

const defaultDB = axios.create({
    baseURL:"https://fakestoreapi.com",
    timeout:10000,
    headers:{
        "Content-Type":"application/json",
    },
    responseType: 'json',
})

export default defaultDB    