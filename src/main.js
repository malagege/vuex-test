import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import { SOME_MUTATION } from './mutation-types'

// 創建一個新的 store 實例
const store = createStore({
  state: { count:0 },
  mutations: {
    // 我們可以使用 ES2015 風格的計算屬性命名功能來使用一個常量作為函數名
    [SOME_MUTATION] (state) {
      state.count += 1
    }
  }
})

  
// 將 store 實例作為插件安裝
// app.use(store)
createApp(App).use(store).mount('#app')


store.commit({
  type: SOME_MUTATION
})

console.log('store.state.count:' + store.state.count)