<template>
  <div class="wrapper">
    <div class="no-to-do" v-if="items.length === 0">
      <h1 class="no-to-do-text">
        Add a to-do!
      </h1>
    </div>
    <div class="no-to-do" v-if="filteredItems.length === 0 && items.length > 0">
      <h1 class="no-to-do-text">
        No matching lists
      </h1>
    </div>

    <div class="card-container" v-if="items.length > 0">
      <Card
        v-for="item in filteredItems"
        v-bind:key="item.key"
        v-bind:title="item.title"
        v-bind:tasks="item.tasks"
        v-bind:id="item.id"
        v-bind:urgent="item.urgent"
        v-on="$listeners"
      />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: {
    Card,
  },
  name: "CardContainer",
  props: ["items", "filteredItems"],
  mounted() {
    this.resizeAllGridItems();
  },
  updated() {
    this.resizeAllGridItems();
  },
  methods: {
    resizeGridItem(item) {
      const rowHeight = parseInt(
        window
          .getComputedStyle(document.querySelector(".card-container"))
          .getPropertyValue("grid-auto-rows")
      );
      const rowGap = parseInt(
        window
          .getComputedStyle(document.querySelector(".card-container"))
          .getPropertyValue("grid-row-gap")
      );

      const rowSpan = Math.ceil(
        (item.querySelector(".content").getBoundingClientRect().height +
          rowGap +
          60) /
          (rowHeight + rowGap)
      );
      item.style.gridRowEnd = `span ${rowSpan}`;
    },
    resizeAllGridItems() {
      const allItems = document.querySelectorAll(".card");
      allItems.forEach((item) => this.resizeGridItem(item));
    },
  },
};
</script>

<style lang="scss">
.card-container {
  background-color: #f3f6f7;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 10px;
  padding: 2em;
  grid-area: cards;
}
.wrapper {
  background-color: #f3f6f7;
  width: 100%;
}
.no-to-do {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
