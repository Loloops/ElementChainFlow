<script setup lang="ts">
import { defineProps } from "vue";
import { EditorElement, Element } from "@/05_entities/EditorElement";

const props = defineProps<{
  element: Element;
}>();
</script>
<template>
  <EditorElement
    :style="{
      top: props.element.coords.y + 'px',
      left: props.element.coords.x + 'px',
    }"
  >
    <slot></slot>
  </EditorElement>
</template>

<style scoped></style>
