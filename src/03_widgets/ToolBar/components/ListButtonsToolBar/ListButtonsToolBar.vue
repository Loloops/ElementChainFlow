<script setup lang="ts">
<<<<<<< HEAD
import { ToolBarAddElement } from "@/04_features/ToolBarButtonAddElement";
import { ToolbarItemFactory } from "@/05_entities/ToolBarButtonAddElement";

const toolBarItems = [
  ToolbarItemFactory.create("square"),
  ToolbarItemFactory.create("circle"),
];
=======
import ButtonAddElement from "../../../../04_features/AddElement/ButtonAddElement.vue";
import { toolBarItems } from "./model/store/store";
>>>>>>> 8400b639c178fd1242c3a2eeafca7de9be5fd0aa
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
