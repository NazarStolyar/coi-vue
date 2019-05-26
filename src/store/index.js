import Vue from 'vue'
import Vuex from 'vuex'
import addtop from './addtop'
import removetop from './removeall'
import bottomadd from './bottomadd'

Vue.use(Vuex);

export default new Vuex.Store  ({
  modules: {
    addtop,  removetop, bottomadd
  }

})
