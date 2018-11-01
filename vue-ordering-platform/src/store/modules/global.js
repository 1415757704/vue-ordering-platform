const global = {
  state: {
    isShowLoading: false
  },
  mutations: {
    SHOW_LOADING: state => {
      state.isShowLoading = true
    },
    HIDE_LOADING: state => {
      state.isShowLoading = false
    }
  },
  actions: {
    showLoading: ({commit}) => {
      commit('SHOW_LOADING')
    },
    hideLoading: ({ commit }) => {
      commit('HIDE_LOADING')
    }
  }
}

export default global
