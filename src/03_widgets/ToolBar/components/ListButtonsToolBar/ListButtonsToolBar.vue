<script setup lang="ts">
import type { nameIcons } from "@/06_shared/icons";
import type { ElementType } from "@/06_shared/types";
import { ToolBarAddElement } from "@/04_features/ToolBarButtonAddElement";

type ToolbarItem = {
  id: number;
  type: ElementType;
  title: string;
  icon: nameIcons;
};

const toolBarItems: ToolbarItem[] = [
  {
    id: 1,
    type: "circle",
    title: "add circle",
    icon: "circle",
  },
  {
    id: 2,
    type: "square",
    title: "add square",
    icon: "square",
  },
];
</script>

<template>
  <article class="toolbar-draws">
    <div class="draw-components">
      <ul>
        <li v-for="item in toolBarItems" :key="item.id">
          <ToolBarAddElement
            class="toolbar-item"
            :elementType="item.type"
            :buttonTitle="item.title"
            :nameIcon="item.icon"
            iconClass="circle-icon"
          />
        </li>
      </ul>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.draw-components {
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & li {
    max-width: 50px;
    max-height: 50px;
  }
}

.toolbar-item::v-deep .circle-icon {
  width: 24px;
  height: 24px;
}
.toolbar-item {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid transparent;

  &:hover {
    background-color: #eaeaea;
    border: 1px solid #bfbfbf;
    color: black;
  }
}
</style>
