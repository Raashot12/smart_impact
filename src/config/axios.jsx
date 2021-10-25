import axios from "axios"
require( 'dotenv' ).config();
export const request = axios.create( {
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 2000,
} )