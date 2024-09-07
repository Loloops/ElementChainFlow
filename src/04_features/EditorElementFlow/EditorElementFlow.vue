<script setup lang="ts">
import { Component } from "vue";
import { EditorElement, useEditorElements } from "@/05_entities/EditorElement";
import { CircleItem } from "@/06_shared/components/CircleItem";
import { SquareItem } from "@/06_shared/components/SquareItem";
import { ElementTypes } from "@/06_shared/model";

const store = useEditorElements();

const elementComponents: Record<ElementTypes, Component> = {
  square: SquareItem,
  circle: CircleItem,
};
</script>
<template>
  <ul class="editor-field">
    <EditorElement
      v-for="element in store.elements"
      :key="element.id"
      :style="[
        element.styles,
        {
          top: element.coords.y + 'px',
        },
        { left: element.coords.x + 'px' },
      ]"
    >
      <template v-if="elementComponents[element.type]">
        <component :is="elementComponents[element.type]" />
      </template>
    </EditorElement>
  </ul>
</template>

<style scoped>
.editor-field {
  padding: 0;
  margin: 10px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
