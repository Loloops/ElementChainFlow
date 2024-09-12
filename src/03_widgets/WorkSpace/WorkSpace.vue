<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { EditorElementFlow } from "@/04_features/EditorElementFlow";
import { useWorkSpaceFlow, WorkSpaceFlow } from "@/04_features/WorkSpaceFlow";
import { useMouseStore } from "@/05_entities/Mouse";

const mouseStore = useMouseStore();
const workSpaceFlowStore = useWorkSpaceFlow();

const { updateMousePosition } = mouseStore;
const { moveWorkSpace } = workSpaceFlowStore;

const handleMouseMove = (event: MouseEvent) => {
  updateMousePosition(event.clientX, event.clientY);
  moveWorkSpace();
};

onMounted(() => {
  document.addEventListener("mousemove", handleMouseMove);
});
onUnmounted(() => {
  document.removeEventListener("mousemove", handleMouseMove);
});
</script>

<template>
  <WorkSpaceFlow>
    <EditorElementFlow />
  </WorkSpaceFlow>
</template>

<style scoped lang="scss"></style>
