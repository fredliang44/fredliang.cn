import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
  visitors: 0,
  photoList: [
    /*
    id: {
      id,
      name,
      messages: [...ids],
      lastMessage
    }
    */
  ]
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [createPersistedState()]
})
