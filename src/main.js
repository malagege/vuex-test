import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import { SOME_MUTATION } from './mutation-types'

// 創建一個新的 store 實例
const store = createStore({
  state: {
      name: '張三',
      number: 0,
  },
  mutations: {
      setNumberIsWhat(state, payload) {
          setTimeout(() => {
            state.number = payload.number;
          }, 1000);
      },
  }
});

  
// 將 store 實例作為插件安裝
// app.use(store)
createApp(App).use(store).mount('#app')


console.log(`舊值：${store.state.number}`);

store.commit('setNumberIsWhat',{
  number: 20
})

// await store.dispatch('setNum');
console.log(`新值：${store.state.number}`);
