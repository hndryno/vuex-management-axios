import axios from 'axios'

const apiAdapter = (baseURL) => {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export default apiAdapter
