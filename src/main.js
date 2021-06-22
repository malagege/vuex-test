import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

// 創建一個新的 store 實例
const store = createStore({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos(state){
      return state.todos.filter(todo => todo.done)
    }
  }
})

  
// 將 store 實例作為插件安裝
// app.use(store)
createApp(App).use(store).mount('#app')
console.log( store.getters.doneTodos[0].id)
console.log(store.getters.doneTodos);
