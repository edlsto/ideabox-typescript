<template>
  <div :class="[!urgent ? '' : 'card-urgent', 'card']" :id="id">
    <div class="content">
      <div class="title">{{ title }}</div>
      <div class="items-container">
        <div
          class="item-container"
          v-for="(task, index) in tasks"
          v-bind:key="index"
          v-bind:id="task.id"
        >
          <img
            :src="task.completed ? completedImg : notCompletedImg"
            class="checkbox"
            v-on:click="toggleDone"
          />
          <div
            :class="[!task.completed ? 'description' : 'description-completed']"
          >
            {{ task.description }}
          </div>
        </div>
      </div>
    </div>
    <div class="buttons-row">
      <div v-on:click="toggleUrgent" class="urgent-container">
        <img
          class="icon"
          :src="urgent ? urgentImg : notUrgentImg"
          alt="Urgent"
        />
        <p :class="[urgent ? 'icon-text-urgent' : '', 'icon-text']">
          Urgent
        </p>
      </div>
      <div v-on:click="deleteCard" class="delete-container">
        <img class="icon" src="../assets/delete.svg" alt="Delete" />
        <p class="icon-text">Delete</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import completed from "../assets/checkbox-active.svg";
import notCompleted from "../assets/checkbox.svg";
import urgent from "../assets/urgent-active.svg";
import notUrgent from "../assets/urgent.svg";
import Vue from "vue";

export default Vue.extend({
  name: "Card",
  props: ["title", "tasks", "id", "urgent"],
  data() {
    return {
      completedImg: completed,
      notCompletedImg: notCompleted,
      urgentImg: urgent,
      notUrgentImg: notUrgent,
    };
  },
  methods: {
    toggleDone: function(event: Event) {
      const target = event.target as HTMLElement;
      const closest = target.closest(".item-container");
      if (closest) {
        this.$store.commit("toggleDone", parseInt(closest.id));
      }
    },
    toggleUrgent: function(event: Event) {
      const target = event.target as HTMLElement;
      const closest = target.closest(".card");
      if (closest) {
        this.$store.commit("toggleUrgent", parseInt(closest.id));
      }
    },
    deleteCard: function(event: Event) {
      const target = event.target as HTMLElement;
      const closest = target.closest(".card");
      if (closest) {
        this.$store.commit("deleteCard", parseInt(closest.id));
      }
    },
  },
});
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.card {
  border: 1px solid #c7d3d8;
  background-color: #fafdff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-urgent {
  background-color: #ffe89d;
  border: 1px solid #ffc30c;
}

.title {
  font-weight: bold;
  padding: 0.3em 1em;
  border-bottom: 1px solid #c7d3d8;
}

.checkbox {
  height: 1em;
  margin-right: 0.5em;
  margin-top: 0.25em;
  cursor: pointer;
}

.item-container {
  display: flex;
  padding: 0.7em;
}

.icon {
  height: 1.7em;
}

.buttons-row {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #c7d3d8;
  padding: 0.5em;
}

.delete-container,
.urgent-container {
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
}

.icon-text {
  font-size: 0.7em;
  color: #356c77;
}

.icon-text-urgent {
  color: #b23a25;
}

.description-completed {
  font-style: italic;
  color: #356c77;
}
.items-container {
  padding: 0.5em 0;
}
</style>
