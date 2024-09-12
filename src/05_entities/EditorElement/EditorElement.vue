<script setup lang="ts"></script>

<template>
  <li class="element-item">
    <slot></slot>
  </li>
</template>

<style scoped lang="scss">
.element-item {
  position: relative;
  width: 50px;
  height: 50px;
  list-style: none;
  top: 0;
  left: 0;
  cursor: grab;
  transform: scale(1);
  transform-origin: left top 0px;
}
</style>
