import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const videoCardWidth = 195;
const rowMaxCount = 12;
const store = new Vuex.Store({
  state: {
    appRightWidth: 0
  },
  getters: {
    videoColumns: state => {
      return Math.min(rowMaxCount, Math.floor(state.appRightWidth / videoCardWidth));
    },
    contentWidth: (state, getters) => {
      return videoCardWidth * getters.videoColumns;
    }
  },
  mutations: {
    updateAppRightWidth: (state, width) => {
      state.appRightWidth = width;
    }
  }
})

export default store
