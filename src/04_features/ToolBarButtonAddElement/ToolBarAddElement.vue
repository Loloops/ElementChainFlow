<script setup lang="ts">
import { defineProps } from "vue";
import { Props } from "./type";
import { useStoreEditorElements } from "@/04_features/WorkSpaceFlow/components/EditorElementsFlow/store";
import { ToolBarButtonAddElement } from "@/05_entities/ToolBarButtonAddElement";
import { ElementTypes } from "@/06_shared/model";

const props = defineProps<Props>();
const store = useStoreEditorElements();

function addElementToEditor(type: ElementTypes): void {
  store.addElement(type);
}
</script>

<template>
  <ToolBarButtonAddElement @click="addElementToEditor(props.elementType)">
    <slot></slot>
  </ToolBarButtonAddElement>
</template>

<style scoped lang="scss"></style>
