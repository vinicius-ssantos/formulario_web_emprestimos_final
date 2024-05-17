import axios from 'axios'

const baseURL = process.env.REACT_APP_API_URL

export const httpClient = axios.create({
    baseURL: baseURL,
    withCredentials: true
})

class ApiService {

    post(url, objeto){
        const requestUrl = `${url}`
        return httpClient.post(requestUrl, objeto);
    }
}


export default ApiService;