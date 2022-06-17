<template>
  <div>
    <el-input v-model="count" />
    <div>
      <el-button @click="decrease">-</el-button>
      <el-button @click="increase">+</el-button>
      <el-button @click="reset">reset</el-button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'HelloWorld',
  setup () {
    const count = ref(0)
    const increase = () => {
      count.value++
    }
    const decrease = () => {
      count.value--
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
