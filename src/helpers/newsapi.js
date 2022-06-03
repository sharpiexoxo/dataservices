import axios from 'axios';

const api = {
    baseUrl: "https://newsapi.org/v2/",
    apiKey: "659434e41b29453a8094272fdfe88d8b"
}

export const NewsAPI = (search, country) => {

    // https://newsapi.org/v2/top-headlines?country=us&apiKey=659434e41b29453a8094272fdfe88d8b
    // https://newsapi.org/v2/top-headlines?q=&country=us&apiKey=659434e41b29453a8094272fdfe88d8b
    let response = axios.get( api.baseUrl + "top-headlines" + "?q=" + search + "&country=us" + "&apiKey=" + api.apiKey )
    .then( res => {
        return res.data
    })
    .catch( error => {
        console.log("Der er sket en fejl", error)
        return null
    })

    return response;

}

export default NewsAPI