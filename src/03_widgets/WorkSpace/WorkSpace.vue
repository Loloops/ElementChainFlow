<script setup lang="ts">
<<<<<<< HEAD
import {onMounted, onUnmounted} from "vue";
import {WorkSpaceFlow} from "@/04_features/WorkSpaceFlow";
import {useMouseStore} from "@/05_entities/Mouse";

const { windowMouse } = useMouseStore();

const handleMouseDown = (event: MouseEvent) => {
  const currentTarget = event.currentTarget as HTMLElement;
  // event.preventDefault();
  windowMouse.setStartCoords(event.clientX, event.clientY);
  windowMouse.setCoords(event.clientX, event.clientY);
  // windowMouse.changeMove(true);

  const handleMouseMove = (event: MouseEvent) => {
    // event.preventDefault();
    windowMouse.setCoords(event.clientX, event.clientY);
    windowMouse.changeMove(true);
  };

  const handleMouseUp = (event: MouseEvent) => {
    windowMouse.setStartCoords(event.clientX, event.clientY);
    windowMouse.setCoords(event.clientX, event.clientY);
    windowMouse.changeMove(false);
    currentTarget.removeEventListener("mousemove", handleMouseMove);
    currentTarget.removeEventListener("mouseup", handleMouseUp);
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
  <WorkSpaceFlow :coords="windowMouse"></WorkSpaceFlow>
</template>

<style scoped lang="scss"></style>
