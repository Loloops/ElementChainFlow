<script setup lang="ts">
import { useEditorFlow } from "./model/store";
import { Editor } from "@/05_entities/Editor";

const editorStore = useEditorFlow();
const { moveWorkSpace, mouseDown, mouseUp, resize } = editorStore;

function handleMouseMove() {
  /* попробовать все таки отказаться вот от этого */
  console.log("editor move");

  moveWorkSpace();
}

function handleMouseDown(event: MouseEvent) {
  console.log("editor move start");

  mouseDown(event.clientX, event.clientY);
}

function handleMouseUp() {
  console.log("editor move end");

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
  <Editor
    class="work-space"
    @mousemove="handleMouseMove"
    @wheel="handleScroll"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
  >
    <slot></slot>
  </Editor>
</template>

<style scoped lang="scss">
.work-space {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
