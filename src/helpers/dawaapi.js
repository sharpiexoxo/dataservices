import axios from 'axios';

const api = {
    baseUrl: 'https://api.dataforsygningen.dk/'
}

export const getZipcode = (searchZip) => {

    let response = axios.get( api.baseUrl + "postnumre/autocomplete" + searchZip)
    .then( res => {
        console.log("Der er hul igennem", res.data)
    }) 
    .catch( error => {
        console.log("Der er sket en fejl", error)
        throw new Error("Ikke gyldigt postnummer")
    })

    return response;

}