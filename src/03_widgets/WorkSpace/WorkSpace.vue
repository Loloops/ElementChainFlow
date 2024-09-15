<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { EditorElementFlow } from "@/04_features/EditorElementFlow";
import { EditorFlow } from "@/04_features/EditorFlow";
import { useMouseStore } from "@/05_entities/Mouse";

const mouseStore = useMouseStore();
const { updateMousePosition } = mouseStore;

const handleMouseMove = (event: MouseEvent) => {
  updateMousePosition(event.clientX, event.clientY);
};

onMounted(() => {
  document.addEventListener("mousemove", handleMouseMove);
});
onUnmounted(() => {
  document.removeEventListener("mousemove", handleMouseMove);
});
</script>

<template>
  <EditorFlow>
    <EditorElementFlow />
  </EditorFlow>
</template>

<style scoped lang="scss"></style>
