<template>
  <div class="nav-bar">
    <h1 class="nav-bar-text">
      Check <span class="nav-bar-highlight">Yo'</span> Self
    </h1>
    <div class="search-container">
      <div class="img-search-container">
        <img src="../assets/search.svg" alt="search" class="img-search" />
      </div>
      <input
        class="search-bar"
        type="text"
        v-model="search"
        v-on:keyup="setSearch"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      search: ""
    };
  },
  methods: {
    setSearch: function() {
      this.$emit("search-input", this.search);
    }
  }
};
</script>

<style>
.nav-bar {
  background: #1f1e3d;
  color: white;
  font-family: "Open Sans", sans-serif;
  grid-area: nav;
  display: flex;
  justify-content: space-between;
}

.nav-bar-text {
  text-transform: uppercase;
  font-weight: 800;
  font-size: 2.5em;
  padding: 0.3em;
}

.nav-bar-highlight {
  color: #ffc211;
}

.search-bar {
  outline: none;
  border: none;
  padding: 0.3em;
  font-size: 1.3em;
}

.search-container {
  height: 2em;
  align-self: center;
  margin-right: 1em;
  display: flex;
}
.img-search-container {
  height: 2em;
  background: lightgray;
}
.img-search {
  height: 100%;
  padding: 0.2em;
}
</style>
