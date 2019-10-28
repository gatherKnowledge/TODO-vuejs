import todoList from '../data';

export const state = () => ({
  list: todoList
})

export const mutations = {
  add (state, text) {
    state.list.push({
      text,
      done: false
    })
  },

  remove (state, payload) {
    state.list = state.list.filter(x => x !== payload);
  },

  toggle (state, todo) {
    todo.done = !todo.done
  }
}
