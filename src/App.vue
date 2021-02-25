<template>
  <div id="app">
    <Nav />
    <Form />
    <CardContainer />
  </div>
</template>

<script lang="ts">
import Form from "./components/Form.vue";
import CardContainer from "./components/CardContainer.vue";
import Nav from "./components/Nav.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    Form,
    CardContainer,
    Nav,
  },
  name: "app",

  methods: {},
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}

#app,
body,
html {
  height: 100%;
  width: 100%;
}

#app {
  display: grid;
  font-family: "Open Sans", sans-serif;
  grid-template-areas:
    "nav nav"
    "dashboard cards";
  grid-template-columns: 23em 1fr;
  grid-template-rows: 75px 1fr;
}
</style>
