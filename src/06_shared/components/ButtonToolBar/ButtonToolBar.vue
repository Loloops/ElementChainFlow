<script setup lang="ts"></script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.button {
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
