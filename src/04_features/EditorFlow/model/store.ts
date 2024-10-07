import { defineStore } from "pinia";
import { computed, watch } from "vue";
import { useEditorStore } from "@/05_entities/Editor";
import { useStoreEditorElements } from "@/05_entities/EditorElement";
import { useMouseStore } from "@/05_entities/Mouse";

//Перелопатить весь файл

export const useEditorFlow = defineStore("editorFlow", () => {
  const mouseStore = useMouseStore();
  const storeEditorElements = useStoreEditorElements();
  const editorStore = useEditorStore();

  function mouseDown(x: number, y: number) {
    if (!editorStore.editorCoords.moveEditorElement) {
      editorStore.editorCoords.moveAllElements = true;
      mouseStore.updateStartXY(x, y);
      mouseStore.updateCurrentXY(x, y);
    }
  }

  function mouseUp() {
    editorStore.editorCoords.moveAllElements = false;
  }

  const getMouseMove = computed(() => {
    if (
      !editorStore.editorCoords.moveAllElements ||
      editorStore.editorCoords.moveEditorElement
    ) {
      storeEditorElements.updateElementsStartXY();

      return null;
    }
    console.log("WorkSpaceMove");
    //Вынести в мышь вместе со стартовыми координатами
    const deltaX = mouseStore.windowMouse.x - mouseStore.windowMouse.startX;
    const deltaY = mouseStore.windowMouse.y - mouseStore.windowMouse.startY;

    return {
      deltaX,
      deltaY,
    };
  });

  function moveWorkSpace({
    deltaX,
    deltaY,
  }: {
    deltaX: number;
    deltaY: number;
  }) {
    storeEditorElements.elements.forEach((el) => {
      el.coords.currentX = el.coords.x_start + deltaX;
      el.coords.currentY = el.coords.y_start + deltaY;
    });
  }

  watch(getMouseMove, (move) => {
    if (move) {
      moveWorkSpace({
        deltaX: move.deltaX,
        deltaY: move.deltaY,
      });
    }
  });

  function resize(deltaY: number) {
    const SCALE = 0.05;
    const newScaleValue = calculateNewScale(
      deltaY,
      storeEditorElements.scaleElements,
      SCALE
    );

    if (newScaleValue > 2 || newScaleValue < 0.5) {
      return;
    }

    /* const deltaScale = newScaleValue / storeEditorElements.scaleElements; */

    storeEditorElements.updateScale(
      newScaleValue / storeEditorElements.scaleElements
    );
    console.log("scale", newScaleValue);
    storeEditorElements.scaleElements = newScaleValue;
    storeEditorElements.updateElementsScale(/* deltaScale */);
    storeEditorElements.updateElementsStartXY();
  }

  function calculateNewScale(
    deltaY: number,
    currentScale: number,
    scale: number
  ): number {
    const scaleDirection = deltaY > 0 ? 1 : -1;

    return currentScale * (1 + scaleDirection * scale);
  }

  return { mouseDown, mouseUp, moveWorkSpace, resize };
});
