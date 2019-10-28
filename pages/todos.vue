<template>
  <div style="margin: auto;">
    <h3>TODO LIST</h3><br />
    <ul>
      <li v-for="todo in todos" :key="todo.text" style="display: flex">
        <input type="checkbox" :checked="todo.isDone" @change="toggle(todo)">
        <span   :style="{ display: todo.show }" :class="{ done: todo.isDone }" @click="toggleEditMode(todo)">{{ todo.text }}</span>
        <input  :style="{ display: todo.show === 'block' ? 'none' : 'block' }" :value="todo.text">
        <button :style="{ display: todo.show }" @click="remove(todo)">삭제</button>
        <button :style="{ display: todo.show === 'block' ? 'none' : 'block' }" @click="updateTodo($event, todo)">수정</button>
      </li>
      <li><input placeholder="What needs to be done?" @keypress.enter="addTodo"></li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      todos: 'todos/addDpAttr'
    })
  },
  methods: {
    addTodo (e) {
      if (!e.target.value) {
        return;
      }
      // TODO: event에 대한 작업 처리를 하고 싶어서 이렇게 한 것이 맞는지?
      this.$store.commit('todos/add', e.target.value);
      e.target.value = '';
    },
    updateTodo(value, todo) {
      this.$store.commit('todos/update', {value, todo});
    },
    ...mapMutations({
      toggle: 'todos/toggle',
      remove: 'todos/remove',
      toggleEditMode: 'todos/toggleEditMode'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
