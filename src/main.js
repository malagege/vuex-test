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
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    },
    // 上面 function 等於如下
    // getTodoById: function(state){
    //   return function (id){
    //       return state.todos.find(todo => todo.id === id)
    //   }
    // },
  }
})

  
// 將 store 實例作為插件安裝
// app.use(store)
createApp(App).use(store).mount('#app')


console.log(store.getters.getTodoById(2))
