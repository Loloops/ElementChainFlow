<script setup lang="ts">
import { ElementTypes } from "@/06_shared/model";
import { Component } from "vue";

import { EditorElementFlow } from "@/04_features/EditorElementFlow";
import { useEditorElements } from "@/05_entities/EditorElement";
import { CircleItem } from "@/06_shared/components/CircleItem";
import { SquareItem } from "@/06_shared/components/SquareItem";

const store = useEditorElements();

const elementComponents: Record<ElementTypes, Component> = {
  square: SquareItem,
  circle: CircleItem,
};
</script>

<template>
  <div class="work-space">
    <EditorElementFlow
      v-for="element in store.elements"
      :key="element.id"
      :element="element"
    >
      <template v-if="elementComponents[element.type]">
        <component :is="elementComponents[element.type]" />
      </template>
    </EditorElementFlow>
  </div>
</template>

<style scoped lang="scss">
.work-space {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
