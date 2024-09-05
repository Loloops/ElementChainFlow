<script setup lang="ts">
import { defineProps } from "vue";
import { Props } from "./type";
import { ToolBarButtonAddElement } from "@/05_entities/ToolBarButtonAddElement";
import { Element, useEditorElements } from "@/05_entities/EditorElement";
import { ElementTypes } from "@/06_shared/model";

const props = defineProps<Props>();
const store = useEditorElements();

function addElementToEditor(type: ElementTypes): void {
  const newElement: Element = {
    id: Math.max(...store.elements.map((el) => el.id), 0) + 1,
    coords: {
      x_main: 0,
      y_main: 0,
      x: 0,
      y: 0,
    },
    type,
  };

  store.addElement(newElement);
}
</script>

<template>
  <ToolBarButtonAddElement @click="addElementToEditor(props.elementType)">
    <slot></slot>
  </ToolBarButtonAddElement>
</template>

<style scoped lang="scss"></style>
