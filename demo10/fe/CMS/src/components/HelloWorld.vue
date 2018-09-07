<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <input type = "text" placeholder = "用户名" v-model = "user">
      <br>
      <input type = "password" placeholder = "密码" v-model = "password">
    </div>
    <button @click = "login">登陆</button>
    <button @click = "test">登陆</button>
    <button @click = "testpost">test</button>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'CMS系统',
      user: '',
      password: ''
    }
  },
  methods: {
    login() {
      console.log('登陆')
      console.log(this.user, this.password)
      axios.post('http://localhost:3000/login', qs.stringify({
      user: this.user,
      password: this.password
      })
      ).then(response => {
        let res = response.data
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    test() {
      axios.get('http://localhost:3000/testapi').then(response => {
      console.log(response.data)
      }).catch(err => {
      console.log(err)
      })
    },
    testpost() {
    axios.post('http://localhost:3000/testpost').then(response => {
    console.log(response.data)
    }).catch(err => {
    console.log(err)
    })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
