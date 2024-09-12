<script setup lang="ts">
import { defineProps, watch } from "vue";
import { Props } from "./types";
import { useStoreEditorElements } from "@/05_entities/EditorElement";

const props = defineProps<Props>();
const storeEditorElements = useStoreEditorElements();

function handleScroll(event: WheelEvent) {
  if (event.target !== event.currentTarget) {
    return;
  }

  const SCALE = 0.05;
  const scaleDirection = event.deltaY > 0 ? SCALE : -SCALE;
  const newScaleValue =
    storeEditorElements.scaleElements * Math.pow(SCALE, scaleDirection);
  const deltaScale = newScaleValue / storeEditorElements.scaleElements;

  if (newScaleValue > 2 || newScaleValue < 0.5) {
    return;
  }

  storeEditorElements.changeScaleElements(newScaleValue);
  storeEditorElements.updateCoordForWorkSpaceResize(deltaScale);
  storeEditorElements.updateStartXY();
}

watch(
  () => props.coords,
  (newValue) => {
    storeEditorElements.moveElements(newValue);
  },
  { deep: true }
);
</script>

<template>
  <div class="work-space" @wheel="handleScroll">
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
