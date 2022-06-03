import axios from 'axios';

const api = {
    baseUrl: 'http://localhost:5023/',
    apiKey: ''
}

export const ViborgAboutAPI = () => {

    let endpoint = "reviews"

    let response = axios.get( api.baseUrl + endpoint )
    .then( res => {
        return res.data
    })
    .catch( error => {
        console.log("FEJL", error)
        throw new Error( "Desværre - der er sket en fejl" )
    })

    return response;

}