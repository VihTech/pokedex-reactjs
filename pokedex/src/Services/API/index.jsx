import axios from "axios"

export const api = axios.create({
    baseURL: "https://pokedex-api-nodejs-c1iwmcksj-vihtech.vercel.app/" 
})