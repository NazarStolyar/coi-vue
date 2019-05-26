export default  {
  state: {
    add: [

    ]
  },
  mutations: {
    addNewTable (state, payload) {
      state.add.push(payload);
    }

  },
  actions: {
    addNewTable ({commit}, payload) {
      payload.id = Math.floor(Math.random() * 1000) ;
      commit('addNewTable', payload);
    }

  },
  getters: {
    add (state) {
      return state.add
    },
    myAds (state ) {
      return state.add
    }
  }
}
