import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isOpenModal:false,
    inputImageUrl:'',
    selectionForImage:null,
    currentIdImage:0,
    isHtmlViewer:false
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

    setSelectionForImage(state,selectionImage){
      state.selectionForImage=selectionImage
    },

    setCurrentIdImage(state,currentId){
      if(currentId==='add'){
        state.currentIdImage=state.currentIdImage+1
      }
      else if(state.currentIdImage>0 && currentId==="remove"){
        state.currentIdImage=state.currentIdImage-1
      }

    },

    setIsHtmlViewer(state,isIt){
      state.isHtmlViewer=isIt
    },


  },
  actions: {
  },
  modules: {
  }
})
