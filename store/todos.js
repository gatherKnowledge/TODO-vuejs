import todoList from '../data';

export const state = () => ({
  list: todoList
})

export const getters = {
  addDpAttr: (state) => {
    state.list.forEach(x => x.show = 'block');
    return state.list;
  }
}

export const mutations = {
  add (state, text) {
    state.list.push({
      text,
      isDone: false
    })
  },

  remove (state, payload) {
    state.list = state.list.filter(x => x !== payload);
  },

  toggle (state, todo) {
    todo.isDone = !todo.isDone
  },

  toggleEditMode(state, payload) {
    payload.show = (payload.show !== 'none') ? 'none' : 'block';
  },
  
  update(state, todo) {
    console.log(todo);
  }
}
