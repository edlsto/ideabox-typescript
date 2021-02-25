import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      {
        title: "go to store",
        tasks: [
          { description: "get some stuff", completed: false, id: 1 },
          { description: "hello", completed: false, id: 2 },
          { description: "hi", completed: false, id: 3 },
        ],
        id: 1,
        urgent: false,
      },
      {
        title: "go somewhere else",
        tasks: [
          { description: "get some stuff", completed: false, id: 4 },
          { description: "hello", completed: false, id: 5 },
          { description: "hi", completed: false, id: 6 },
        ],
        id: 2,
        urgent: true,
      },
    ],
    filter: false,
    searchInput: "",
  },
  mutations: {
    addItem(state, item) {
      state.items.push(item);
    },
    toggleDone(state, id: number) {
      const targetItem = state.items.find((item) =>
        item.tasks.some((task) => task.id === id)
      );
      let targetTask;
      if (targetItem) {
        targetTask = targetItem.tasks.find((task) => task.id === id);
      }
      if (targetTask) {
        targetTask.completed = !targetTask.completed;
      }
    },
    toggleUrgent(state, id: number) {
      const targetItem = state.items.find((item) => item.id === id);
      if (targetItem) {
        targetItem.urgent = !targetItem.urgent;
      }
    },
    deleteCard(state, id: number) {
      state.items = state.items.filter((task) => task.id !== id);
    },
    filterUrgent(state) {
      state.filter = !state.filter;
    },
    searchInputHandler(state, input: string) {
      state.searchInput = input;
    },
  },

  actions: {},
  modules: {},
});
