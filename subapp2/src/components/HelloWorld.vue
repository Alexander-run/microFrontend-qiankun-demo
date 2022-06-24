<template>
  <div class="hello">
    <h1>Vue3 Sub App</h1>
    <div class="container">
      <h4>Counter</h4>
      <span>{{count}}</span>
      <br/><br/>
      <el-button type="warning" @click="decrease">-</el-button>
      <el-button type="info" @click="reset">reset</el-button>
      <el-button type="success" @click="increase">+</el-button>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'stateFetch',
  setup() {
    const count = ref(0)
    const increase = () => {
      count.value ++
    }
    const decrease = () => {
      count.value --
    }
    const reset = () => {
      count.value = 0
    }
    return {
      count,
      increase,
      decrease,
      reset
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin: 100px 0;
  padding: 12px;
}
.container span {
  font-size: 30px;
}
h3 {
  margin: 40px 0 0;
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
