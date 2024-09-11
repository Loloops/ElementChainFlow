<script setup lang="ts">
import { defineProps, watch } from "vue";
import { Props } from "./types";
import { useMoveElements } from "@/05_entities/EditorElement/model/useMoveElements";

const props = defineProps<Props>();

watch(
  () => props.coords,
  (newValue) => {
    console.log(1);
    useMoveElements(newValue);
  },
  { deep: true }
);
</script>

<template>
  <div class="work-space">
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
