<script setup lang="ts">
<<<<<<< HEAD
import { ListButtonsToolBar } from "./components/ListButtonsToolBar";
=======
import ListButtonsToolBar from "./components/ListButtonsToolBar/ListButtonsToolBar.vue";
>>>>>>> 8400b639c178fd1242c3a2eeafca7de9be5fd0aa
</script>

<template>
  <menu class="toolbar">
    <ListButtonsToolBar />
  </menu>
</template>

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
</style>
