import axios from 'axios'
const instance = axios.create(
    {
        baseURL:"https://my-burger-2b020.firebaseio.com/",
        
    }
)
export default instance;