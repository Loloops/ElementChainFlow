<script setup lang="ts">
import { useEditorFlow } from "./model/store";
import { Editor } from "@/05_entities/Editor";
import { useMouseStore } from "@/05_entities/Mouse";

const editorStore = useEditorFlow();
const mouseStore = useMouseStore();
const { mouseDown, mouseUp, resize } = editorStore;
const { updateCurrentXY } = mouseStore;

const handleMouseMove = (event: MouseEvent) => {
  updateCurrentXY(event.clientX, event.clientY);
};

// onMounted(() => {
//   document.addEventListener("mousemove", handleMouseMove);
// });
// onUnmounted(() => {
//   document.removeEventListener("mousemove", handleMouseMove);
// });

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
    @wheel="handleScroll"
    @mousedown.left="handleMouseDown"
    @mouseup="handleMouseUp"
    @mousemove="handleMouseMove"
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
