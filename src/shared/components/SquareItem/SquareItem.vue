<template>
  <div class="square">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.square {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  border: 1px solid #cecece;
  border-radius: 10px;
  box-shadow: 0px 2px 6px #cecece;
}
</style>
