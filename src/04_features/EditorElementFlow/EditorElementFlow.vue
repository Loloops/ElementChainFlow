<script setup lang="ts">
import { Component, computed, ref, watch } from "vue";
import { EventTypeElementFlow } from "./model/types";
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

function handleMouseEvent(
  eventType: EventTypeElementFlow,
  event: MouseEvent,
  id: number
) {
  switch (eventType) {
    case "over":
      editorElementStore.updateHoveredElement(id);
      break;
    case "leave":
      editorElementStore.resetHoveredElement();
      break;
    case "down":
      startDrag(id);
      break;
    case "up":
      stopDrag();
      break;
  }
}

function startDrag(id: number) {
  const element = editorElementStore.getElement(id);

  if (!element) {
    return;
  }

  elementDragStart.value = {
    id,
    x: mouseStore.windowMouse.x - element.coords.currentX,
    y: mouseStore.windowMouse.y - element.coords.currentY,
  };

  editorStore.editorCoords.moveEditorElement = true;
  editorElementStore.updateGrabbedElement(id);
}

function stopDrag() {
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
      @mouseover="handleMouseEvent('over', $event, element.id)"
      @mouseleave="handleMouseEvent('leave', $event, element.id)"
      @mousedown="handleMouseEvent('down', $event, element.id)"
      @mouseup="handleMouseEvent('up', $event, element.id)"
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
