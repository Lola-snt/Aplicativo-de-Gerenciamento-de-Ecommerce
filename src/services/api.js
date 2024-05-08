import axios from 'axios'

const api = axios.create({
    baseURL: "https://livraria-g3-default-rtdb.firebaseio.com/"
})

export default api
