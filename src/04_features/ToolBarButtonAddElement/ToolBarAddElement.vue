<script setup lang="ts">
import { defineProps } from "vue";
import { useToolBarAddElement } from "./model";
import { Props } from "./type";
import { ToolBarButtonAddElement } from "@/05_entities/ToolBarButtonAddElement";
import { ElementTypes } from "@/06_shared/types";

const props = defineProps<Props>();
const { addElement } = useToolBarAddElement();

function addElementToEditor(type: ElementTypes): void {
  addElement(type);
}
</script>

<template>
  <ToolBarButtonAddElement @click="addElementToEditor(props.elementType)">
    <slot></slot>
  </ToolBarButtonAddElement>
</template>

<style scoped lang="scss"></style>
