import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isOpenModal:false,
    inputImageUrl:''
  },
  getters: {
  },
  mutations: {
    setIsOpenModal(state,isIt){
      state.isOpenModal=isIt
    },
    setInputImageUrl(state,urlImage){
      state.inputImageUrl=urlImage
    },

  },
  actions: {
  },
  modules: {
  }
})
