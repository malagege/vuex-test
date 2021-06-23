import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

// 創建一個新的 store 實例
const store = createStore({
  state: {
    count: 1
  },
  mutations: {
    increment (state, payload) {
      // 变更状态
      state.count += payload.amount
    }
  }
})

  
// 將 store 實例作為插件安裝
// app.use(store)
createApp(App).use(store).mount('#app')


store.commit('increment', { amount:10 } )

console.log('store.state.count:' + store.state.count)