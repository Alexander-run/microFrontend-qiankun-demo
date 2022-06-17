import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
import Counter from '@/components/Counter'
import TodoList from '@/components/TodoList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Layout,
      children: [
        {
          path: 'microCounter',
          fullPath: '/microCounter',
          name: 'HelloWorld',
          component: Counter
        },
        {
          path: 'microTodo',
          fullPath: '/microTodo',
          name: 'HelloWorld',
          component: TodoList
        }
      ]
    }
  ]
})
