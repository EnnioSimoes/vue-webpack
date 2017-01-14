import Vue from 'vue'
// import App from './App.vue'
import StarCount from './StarCount.vue'
import ViewCount from './ViewCount.vue'
import InputSearch from './InputSearch.vue'

new Vue({
  el: '#app',
  // render: h => h(Exemplo)
  components: {
      StarCount,
      ViewCount,
      InputSearch
  }
})
