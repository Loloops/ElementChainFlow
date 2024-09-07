<script setup lang="ts">
import { ToolBarAddElement } from "@/04_features/ToolBarAddElement";
import { ToolbarItemFactory } from "@/05_entities/ToolBarButtonAddElement";

const toolBarItems = [
  ToolbarItemFactory.create("square"),
  ToolbarItemFactory.create("circle"),
];
</script>

<template>
  <article class="toolbar-draws">
    <div class="draw-components">
      <ul>
        <li v-for="item in toolBarItems" :key="item.id">
          <ToolBarAddElement :elementType="item.type">
            <component :is="item.icon" />
          </ToolBarAddElement>
        </li>
      </ul>
    </div>
  </article>
</template>

<style scoped lang="scss">
.draw-components {
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  & li {
    max-width: 24px;
    max-height: 24px;
  }
}
</style>
