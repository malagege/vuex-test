import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

// 創建一個新的 store 實例
const store = createStore({
    state () {
      return {
        count: 0
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })
  
// 將 store 實例作為插件安裝
// app.use(store)
createApp(App).use(store).mount('#app')

//測試
store.commit('increment')

console.log(store.state.count) // -> 1


// 證明也是能直接改 state
store.state.count=100
console.log(store.state.count)