<script setup lang="ts">
import { useWorkSpaceFlow } from "./model";

const workSpaceStore = useWorkSpaceFlow();
const { mouseDown, mouseUp, resize } = workSpaceStore;

function handleMouseDown(event: MouseEvent) {
  mouseDown(event.clientX, event.clientY);
}

function handleMouseUp() {
  mouseUp();
}

function handleScroll(event: WheelEvent) {
  if (event.target !== event.currentTarget) {
    return;
  }

  resize(event.deltaY);
}
</script>

<template>
  <div
    class="work-space"
    @wheel="handleScroll"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
  >
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.work-space {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
