<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { EditorElementFlow } from "@/04_features/EditorElementFlow";
import { useMouseStore } from "@/04_features/MouseTracking/model/useMoseStore";
import { WorkSpaceFlow } from "@/04_features/WorkSpaceFlow";

const { windowMouse } = useMouseStore();

const handleMouseDown = (event: MouseEvent) => {
  const currentTarget = event.currentTarget as HTMLElement;

  windowMouse.setStartCoords(event.clientX, event.clientY);
  windowMouse.setCoords(event.clientX, event.clientY);
  // windowMouse.changeMove(true);

  const handleMouseMove = (event: MouseEvent) => {
    windowMouse.setCoords(event.clientX, event.clientY);
    windowMouse.changeMove(true);
  };

  const handleMouseUp = (event: MouseEvent) => {
    windowMouse.setCoords(event.clientX, event.clientY);
    windowMouse.changeMove(false);
    currentTarget.removeEventListener("mousemove", handleMouseMove);
  };

  currentTarget.addEventListener("mousemove", handleMouseMove);
  currentTarget.addEventListener("mouseup", handleMouseUp);
};

onMounted(() => {
  document.addEventListener("mousedown", handleMouseDown);
});
onUnmounted(() => {
  document.removeEventListener("mousedown", handleMouseDown);
});
</script>

<template>
  <WorkSpaceFlow :coords="windowMouse">
    <EditorElementFlow />
  </WorkSpaceFlow>
</template>

<style scoped lang="scss"></style>
