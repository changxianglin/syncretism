<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <div class = "add" @click = 'getinfo'>new add info  first page</div>
    <div class = "add" @click = 'getuser'>change to user info</div>
    <div class = "add" @click = 'gettopic'>change to topic</div>
    <h1>{{title}}</h1>
    <p>{{content}}</p>
  </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
  import jsonp from 'jsonp'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title:　'',
      content: ''
    }
  },
  methods: {
    getinfo() {
    console.log('getinfo')
      axios.get('http://localhost:3000/')
        .then(response => {
        let res = response.data
        console.log(res)
          this.title = res.title
          this.content = res.content
      }).catch(error => {
        console.log('getinfo request error', error)
      })
    },
    getuser() {
      axios.post('http://localhost:3000/userinfo',
        qs.stringify({

        })
      )
        .then(response => {
          let res = response.data
          console.log(res)
          this.title = res.title
          this.content = res.content

        }).catch(error => {
          console.log('get user info error', error)
      })
      // let url = 'http://localhot:3000/userinfo'
      // let options = {}
      //
      // jsonp(url, options, function (res) {
      //   console.log(res)
      // })
    },
    gettopic() {
      axios.get('http://localhost:3000/topic')
        .then(response => {
          let res = response.data
          console.log(res)
          this.title = res.title
          this.content = res.content
        }).catch(error => {
          console.log('get topic infor error ', error)
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
.add {
  cursor: pointer;
  border: 1px solid #f00;
  border-radius: 5px;
}
</style>
