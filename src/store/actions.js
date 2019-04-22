import axios from 'axios'

export const updateVisitors = async ({ commit }) => {
  await axios.get('https://open.fredliang.cn/blog/visitor')
    .then(response => {
      commit('setVisitors', response.data.data)
    })
    .catch(error => {
      console.log(error.response)
    })
}

export const updatePhotoList = ({ commit }) => {
  axios.get('https://open.fredliang.cn/blog/photo/0')
    .then(response => {
      commit('setPhotoList', response.data.data)
    })
    .catch(error => {
      console.log(error.response)
    })
}

export const getArticleList = ({ commit }) => {
  axios.get('https://open.fredliang.cn/blog/article')
    .then(response => {
      commit('setArticleList', response.data.data)
    })
    .catch(error => {
      console.log(error.response)
    })
}
