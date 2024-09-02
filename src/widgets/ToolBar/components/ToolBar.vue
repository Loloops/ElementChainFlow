<template>
  <menu class="toolbar">
    <article class="toolbar-draws">
      <div class="draw-components">
        <ul>
          <li
            class="draw-component-item"
            v-for="item in toolBarItems"
            :key="item.id"
          >
            <component :is="item.icon" />
          </li>
        </ul>
      </div>
    </article>
  </menu>
</template>

<script setup lang="ts">
import { CircleElementSvg } from "@/shared/components/CircleElementSvg";
import { SquareElementSvg } from "@/shared/components/SquareElementSvg";

const toolBarItems = [
  {
    id: 1,
    type: "square",
    icon: SquareElementSvg,
  },
  {
    id: 2,
    type: "circle",
    icon: CircleElementSvg,
  },
];
</script>

<style scoped lang="scss">
.toolbar {
  padding: 1rem;
  min-height: 50px;
  background-color: #ffffff;
  border-bottom: 1px solid #cecece;
  box-shadow: 0px 3px 14px #cecece;
  display: flex;
  align-items: center;
  justify-content: center;
}
.draw-components ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}
.draw-components ul * {
  cursor: pointer;
}
.draw-components li {
  max-width: 24px;
  max-height: 24px;
}
.draw-components li img {
  display: block;
  max-width: 100%;
  max-height: 100%;
}
</style>
