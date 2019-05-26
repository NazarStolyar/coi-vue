export default  {
  state: {
    addBot: [

    ]
  },
  mutations: {
    addNewTableBot (state, payload) {
      let newRandom;
      setInterval(function(){
        function randomInteger(min, max) {
          let rand = 5 + Math.random() * (max + 1 - min);
          rand = Math.floor(rand);
          return rand;
        }
        newRandom = randomInteger(5,10);

      }, 5000);
      setInterval (function() {
        for (let i=0; i < newRandom; i++) {
          state.addBot.push(payload);
        }
        let couner = state.addBot.length;
      }, 10000);

    }


  },
  actions: {
    addNewTableBot ({commit}, payload) {
      // payload.id = Math.floor(Math.random() * 1000);
      commit('addNewTableBot', payload);
    }

  },
  getters: {
    addBot (state) {
      return state.addBot
    }
  }
}
