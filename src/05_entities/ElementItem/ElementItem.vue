<script setup lang="ts"></script>

<template>
  <div class="element-item">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.element-item {
  position: absolute;
  width: 150px;
  height: 50px;
  top: 0;
  left: 0;
}
</style>
