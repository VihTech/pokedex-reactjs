import axios from "axios"

export const api = axios.create({
    baseURL: "https://pokedex-api-nodejs-nnqu0dga2-vihtech.vercel.app/" 
})