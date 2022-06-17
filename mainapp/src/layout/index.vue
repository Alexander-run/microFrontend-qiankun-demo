<template>
  <div class="hello">
    <h1 @click="handleSelect('/')">Vue 2 Application container</h1>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="/microCounter">Micro Counter</el-menu-item>
      <el-menu-item index="/microTodo">Todo List</el-menu-item>
    </el-menu>
    <body>
      <router-view></router-view>
    </body>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      activeIndex: ''
    }
  },
  methods: {
    handleSelect (key) {
      this.$router.push({
        path: key
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
