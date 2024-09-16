<script setup lang="ts">
import { defineProps, watch } from "vue";
import { Props } from "./types";
import { EditorElementsFlow } from "@/04_features/WorkSpaceFlow/components/EditorElementsFlow";
import { useStoreEditorElements } from "@/04_features/WorkSpaceFlow/components/EditorElementsFlow/store";

const props = defineProps<Props>();
const storeEditorElements = useStoreEditorElements();

watch(
  () => props.coords,
  (newValue) => {
    storeEditorElements.moveElements(newValue);
  },
  { deep: true }
);
</script>

<template>
  <div class="work-space" @wheel="storeEditorElements.resizeElement">
    <EditorElementsFlow />
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
