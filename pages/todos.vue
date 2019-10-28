<template>
  <div>
    <h3>TODO LIST</h3><br />
    <ul>
      <li v-for="todo in todos" :key="todo.text">
        <input type="checkbox" :checked="todo.isDone" @change="toggle(todo)">
        <span :class="{ done: todo.isDone }" @click="toggleEditMode(todo)" :style="{ display: todo.show }">{{ todo.text }}</span>
        <button @click="remove(todo)">삭제</button>
      </li>
      <li><input placeholder="What needs to be done?" @keypress.enter="addTodo"></li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    todos () {
      return this.$store.state.todos.list.map(x => { x.show = 'block' });
    }
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
    ...mapMutations({
      toggle: 'todos/toggle',
      remove: 'todos/remove'
    }),
    toggleEditMode: (todo) => {
      todo.show = todo.show === 'block' ? 'none' : 'block';
    }
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
