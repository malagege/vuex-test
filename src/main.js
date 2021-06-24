import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import { SOME_MUTATION } from './mutation-types'

// [javascript - Combination of async function + await + setTimeout - Stack Overflow](https://stackoverflow.com/questions/33289726/combination-of-async-function-await-settimeout)
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getData(){
  await timeout(3000)
  return 1
}

async function getOtherData(){
  await timeout(3000)
  return 2
}

// 創建一個新的 store 實例
const store = createStore({
  state: {
    count: 0
  },
  mutations: {
    gotData (state,payload) {
      console.log('gotData')
    },
    gotOtherData(state,payload){
      console.log('gotOtherData')
    }
  },
  actions: {
    async actionA ({ commit },payload) {
      console.log('payload:', payload)
      commit('gotData', await getData())
    },
    async actionB ({ dispatch, commit }) {
      await dispatch('actionA') // 等待 actionA 完成
      commit('gotOtherData', await getOtherData())
    }
  }
  
})


  
// 將 store 實例作為插件安裝
// app.use(store)
createApp(App).use(store).mount('#app')
