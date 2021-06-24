import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import { SOME_MUTATION } from './mutation-types'

// 創建一個新的 store 實例
const store = createStore({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})


  
// 將 store 實例作為插件安裝
// app.use(store)
createApp(App).use(store).mount('#app')


console.log(`舊值：${store.state.count}`);

store.dispatch('increment')

// await store.dispatch('setNum');
console.log(`新值：${store.state.count}`);
