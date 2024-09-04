<script setup lang="ts">
import { defineProps } from "vue";
import { Element } from "./types";

const props = defineProps<{
  element: Element;
}>();
</script>

<template>
  <div
    class="element-item"
    :style="{
      top: props.element.coords.y + 'px',
      left: props.element.coords.x + 'px',
    }"
  >
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.element-item {
  position: absolute;
  width: 150px;
  height: 50px;
}
</style>
