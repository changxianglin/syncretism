<template>
  <div>
    <h3>{{title}}</h3>
    <input type="text" v-model="todos">
    <button @click = "submit">send</button>
    <ul v-for="(item, index) of allTodos">
      <li>
        <strong>{{index}}.</strong>
        {{item}}</li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
    export default {
        name: "Todo",
      data() {
          return {
            title: 'todo 例子',
            todos: '',
            allTodos: []
          }
      },
      mounted() {
        this.allTodo()
      },
      methods: {
          submit() {
            console.log(this.todos)
            axios.post('http://localhost:3000/todo', qs.stringify({
              todo: this.todos
            })).then(response => {
              let res = response.data
              console.log(res.data)
              this.allTodo()
            }).catch(error => {
              console.log(error)
            })
          },
        filterArr(arr) {
            console.log('change', typeof arr)
            if(typeof(arr) == 'string') {
              let getArr = arr.split('/n')
              getArr.pop()
              console.log('todo change', getArr)
              return getArr
            }
        },
        allTodo() {
            axios.get('http://localhost:3000/todo').then(response => {
              let res = response.data
              console.log(res)
              var data = this.filterArr(res.todo)
              console.log(data)
              this.allTodos = data.reverse()
            }).catch(error => {
              console.log(error)
            })
        }
      }
    }
</script>

<style scoped>
  li {
    list-style: none;
  }
</style>
