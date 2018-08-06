import axios from 'axios'

const GithuAPI = axios.create({
  baseURL: 'https://api.github.com',
})

export default GithuAPI
