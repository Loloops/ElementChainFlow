<script setup lang="ts">
import { Component, computed, ref, watch } from "vue";
import { useMouseDownDragControll } from "./model/useMouseDownDragControll";
import { useEditorStore } from "@/05_entities/Editor";
import {
  EditorElement,
  useStoreEditorElements,
} from "@/05_entities/EditorElement";
import { ElementTooltip } from "@/05_entities/elementTooltip";
import { useMouseStore } from "@/05_entities/Mouse";
import { ButtonUI } from "@/06_shared/components/ButtonUI";
import { CircleItem } from "@/06_shared/components/CircleItem";
import { CrossSvg } from "@/06_shared/components/CrossSvg";
import { IconButton } from "@/06_shared/components/IconButton";
import { SquareItem } from "@/06_shared/components/SquareItem";
import { IconComponent } from "@/06_shared/icons";
import { ElementType } from "@/06_shared/types";

const editorElementStore = useStoreEditorElements();
const editorStore = useEditorStore();
const mouseStore = useMouseStore();

const elementComponents: Record<ElementType, Component> = {
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
  const targetElement = event.currentTarget as HTMLElement;
  const target = event.target as HTMLElement;

  if (!element) return;

  if (target.classList.contains("test")) {
    elementDragStart.value = useMouseDownDragControll()(
      id,
      targetElement,
      element
    );
  }
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
        { width: element.styles.width + 'px' },
        { height: element.styles.height + 'px' },
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
        <component :is="elementComponents[element.type]" class="test" />
      </template>
      <ElementTooltip
        :showTooltip="
          element.hovered &&
          !element.grabbed &&
          element.styles.position === 'absolute'
        "
      >
        <IconButton
          @click.stop="editorElementStore.deleteElement(element.id)"
          nameIcon="cross"
          buttonTitle="Delete element"
        />
      </ElementTooltip>
    </EditorElement>
  </ul>
</template>

<style scoped lang="scss">
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
/*.tooltip-button--cross::v-deep .cross-icon {
}*/
</style>
