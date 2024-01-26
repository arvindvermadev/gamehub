import axios, {CanceledError} from 'axios';

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key : '0e2321b0ba6749e1bdd3fad8cffbf471'
    }
})
