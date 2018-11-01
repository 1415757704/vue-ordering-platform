import vue from 'vue'
import vuex from 'vuex'
import getters from './getters'
import global from './modules/global'

vue.use(vuex)

const store = new vuex.Store({
  getters,
  modules: {
    global
  }
})

export default store
