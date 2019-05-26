import Vue from 'vue'
import App from './App.vue'
import store from './store/'
import * as fb from 'firebase'
import TopMenu from './component/TopMenu.vue'
import TopTable from './component/TopTable.vue'
import BottomMent from './component/BottomMenu.vue'
import BottomTable from './component/BottomTable.vue'

Vue.component('top-menu', TopMenu);
Vue.component('top-table', TopTable);
Vue.component('bottom-menu', BottomMent);
Vue.component('bottom-table', BottomTable);

new Vue({
  el: '#app',
  store,
  render: h => h(App),
  created() {
    fb.initializeApp({
      apiKey: "AIzaSyAJfzUy7pQ3POK_zLl--E5rKUPBN129fiM",
      authDomain: "coi-test.firebaseapp.com",
      databaseURL: "https://coi-test.firebaseio.com",
      projectId: "coi-test",
      storageBucket: "coi-test.appspot.com",
      messagingSenderId: "348842903060",
      appId: "1:348842903060:web:e026cd956fc54a6d"
    });
  }

});
