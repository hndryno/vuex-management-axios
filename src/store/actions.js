import apiAdapter from '../ex-api-gateway/apiAdapter'
const url = 'https://jsonplaceholder.typicode.com/posts'
const api = apiAdapter(url)

export default {
  loadPost: async ({ commit }) => {
    try {
      const data = await api.get()
      const posts = data.data
      await commit('setPost', posts)
    } catch (err) {
      console.log(err)
    }
  }
}
