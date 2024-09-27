<script setup lang="ts">
import { Component, computed, ref, watch } from "vue";
import { useEditorStore } from "@/05_entities/Editor";
import {
  EditorElement,
  useStoreEditorElements,
} from "@/05_entities/EditorElement";
import { useMouseStore } from "@/05_entities/Mouse";
import { CircleItem } from "@/06_shared/components/CircleItem";
import { SquareItem } from "@/06_shared/components/SquareItem";
import { ElementTypes } from "@/06_shared/types";

const editorElementStore = useStoreEditorElements();
const editorStore = useEditorStore();
const mouseStore = useMouseStore();

const elementComponents: Record<ElementTypes, Component> = {
  square: SquareItem,
  circle: CircleItem,
};
const elementDragStart = ref({
  x: 0,
  y: 0,
  id: 0,
});

function handleMouseOver(id: number) {
  editorElementStore.updateHoveredElement(id);
}

function handleMouseLeave() {
  editorElementStore.resetHoveredElement();
}

function handleMouseDown(id: number, event: Event) {
  const element = editorElementStore.getElement(id);

  if (!element) {
    return;
  }

  if (element.styles.position === "static") {
    const targetElement = event.currentTarget as HTMLElement;

    editorElementStore.updateElementCurrentXY(id, {
      x: targetElement.offsetLeft,
      y: targetElement.offsetTop,
    });

    editorElementStore.updateStylePositionElement(id);
  }

  elementDragStart.value = {
    id,
    x: mouseStore.windowMouse.x - element.coords.currentX,
    y: mouseStore.windowMouse.y - element.coords.currentY,
  };

  editorStore.editorCoords.moveEditorElement = true;
  editorElementStore.updateGrabbedElement(id);
}

function handleMouseUp() {
  elementDragStart.value.id = 0;
  editorStore.editorCoords.moveEditorElement = false;
  editorElementStore.resetGrabbedElement();
  editorElementStore.updateElementsStartXY();
}

const currentElementMove = computed(() => {
  if (!editorStore.editorCoords.moveEditorElement) {
    return null;
  }

  const { x, y } = calculateMove();
  console.log("ElementMove");

  return {
    x,
    y,
  };
});

function calculateMove() {
  let x = mouseStore.windowMouse.x - elementDragStart.value.x;
  let y = mouseStore.windowMouse.y - elementDragStart.value.y;

  return {
    x,
    y,
  };
}

watch(currentElementMove, (move) => {
  if (move && elementDragStart.value.id) {
    editorElementStore.updateElementCurrentXY(elementDragStart.value.id, move);
  }
});
</script>
<template>
  <ul class="editor-field">
    <EditorElement
      v-for="element in editorElementStore.elements"
      :key="element.id"
      :style="[
        element.styles,
        { top: element.coords.currentY + 'px' },
        { left: element.coords.currentX + 'px' },
      ]"
      :class="{
        grab: element.grabbed,
        hover: element.hovered && !element.grabbed,
      }"
      @mouseover="handleMouseOver(element.id)"
      @mouseleave="handleMouseLeave"
      @mousedown.left="handleMouseDown(element.id, $event)"
      @mouseup="handleMouseUp"
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
  float: left;
  width: 100%;
}
</style>
