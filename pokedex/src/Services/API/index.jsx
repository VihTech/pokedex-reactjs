import axios from "axios"

export const api = axios.create({
    baseURL: "https://pokedex-api-nodejs-7ccijo88u-vihtech.vercel.app/" 
})