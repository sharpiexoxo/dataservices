import axios from 'axios';

const api = {
    baseUrl: "https://api.openweathermap.org/data/2.5/forecast?",
    apiKey: "2a2cf2c79da5fd9a6fc9616874ca7403"
    // https://api.openweathermap.org/data/2.5/forecast?lat=56.162939&lon=10.203921&cnt=5&units=metric&appid=2a2cf2c79da5fd9a6fc9616874ca7403
}

export const WeatherApi = () => {

    let response = axios.get( api.baseUrl + "lat=56.162939" + "&lon=10.203921" + "&cnt=5" + "&units=metric" + "&appid=" + api.apiKey)
    .then( res => {
        return res.data
    })
    .catch( error => {
        throw new Error("Der er sket en fejl")
    })

    return response

}