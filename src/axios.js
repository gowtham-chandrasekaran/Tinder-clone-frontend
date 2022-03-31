import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-serverbackend.herokuapp.com'
}
)

export default instance;