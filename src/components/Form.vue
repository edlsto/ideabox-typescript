<template>
  <div class="form">
    <div class="form-item">
      <label class="form-label">Task Title</label>
      <input class="form-input" type="text" v-model="title" />
    </div>
    <ul class="draft-task-list">
      <div
        class="draft-task-container"
        v-for="(task, index) in tasks"
        v-bind:key="index"
      >
        <img
          src="../assets/delete.svg"
          alt="Delete task"
          class="draft-task-delete-icon"
          v-on:click="deleteDraftItem"
          v-bind:id="task.id"
        />
        <li class="draft-task">
          {{ task.description }}
        </li>
      </div>
    </ul>
    <div class="form-item">
      <label class="form-label">Task Item</label>
      <div class="task-item-container">
        <input
          class="form-input"
          v-model="newTask"
          type="text"
          v-on:keyup.enter="onSubmit"
        />
        <button class="add-task-btn" v-on:click="onSubmit">
          <div class="plus-1"></div>
          <div class="plus-2"></div>
        </button>
      </div>
    </div>
    <button
      class="form-btn"
      v-on:click="submitList"
      :disabled="tasks.length === 0 || title.length === 0"
    >
      Make Task List
    </button>
    <button
      class="form-btn"
      v-on:click="deleteAll"
      :disabled="title.length === 0 && tasks.length === 0"
    >
      Clear All
    </button>
    <div class="line"></div>
    <button
      v-bind:class="[!filter ? '' : 'form-btn-filter', 'form-btn']"
      v-on:click="filterUrgent"
    >
      Filter By Urgency
    </button>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      title: "",
      tasks: [],
      newTask: ""
    };
  },
  props: ["filter"],
  methods: {
    onSubmit: function() {
      this.tasks.push({
        description: this.newTask,
        completed: false,
        id: Date.now()
      });
      this.newTask = "";
    },
    submitList: function() {
      this.$emit("add", {
        title: this.title,
        tasks: this.tasks,
        urgent: false,
        id: Date.now()
      });
      this.title = "";
      this.tasks = [];
    },
    deleteDraftItem: function(e) {
      this.tasks = this.tasks.filter(item => item.id !== parseInt(e.target.id));
    },
    deleteAll: function() {
      this.tasks = [];
      this.title = "";
    },
    filterUrgent: function() {
      this.$emit("filter-urgent");
    }
  }
};
</script>

<style>
.form {
  background: #587a8a;
  padding: 2em;
  grid-area: dashboard;
}
.form-item {
  margin-bottom: 1em;
  justify-content: space-between;
}
.form-btn {
  display: block;
  width: 100%;
  padding: 0.5em;
  background-color: #1f1f3d;
  color: white;
  font-weight: bold;
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
}

.form-btn:first-of-type {
  margin-bottom: 1em;
}

.form-btn:disabled {
  background-color: #a5a5b9;
  cursor: default;
}

.form-btn-filter {
  background-color: #ef4a23;
}
.form-input {
  display: block;
  width: 100%;
  outline: none;
  height: 3em;
  padding: 0.3em;
}
.form-label {
  color: #c8d3d8;
}
.line {
  height: 1px;
  background-color: #1f1f3d;
  margin: 1em 0;
}
.task-item-container {
  display: flex;
}
.add-task-btn {
  width: 3.5em;
  background: #1f1f3d;
  outline: none;
  border: none;
  margin-left: 0.2em;
  cursor: pointer;
  padding-left: 0.6em;
}
.draft-task {
  list-style: none;
  color: #fff;
}
.draft-task-delete-icon {
  height: 1em;
  margin-right: 0.3em;
  cursor: pointer;
}
.draft-task-container {
  display: flex;
  align-items: center;
}
.draft-task-list {
  margin-bottom: 1em;
}
.plus-1,
.plus-2 {
  background-color: #fff;
  height: 1px;
  width: 70%;
}

.plus-2 {
  transform: rotate(90deg);
}
</style>
