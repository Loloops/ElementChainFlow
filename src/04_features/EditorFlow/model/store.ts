import { defineStore, storeToRefs } from "pinia";
import { computed, watch } from "vue";
import { useEditorStore } from "@/05_entities/Editor";
import { useStoreEditorElements } from "@/05_entities/EditorElement";
import { useMouseStore } from "@/05_entities/Mouse";

export const useEditorFlow = defineStore("editorFlow", () => {
  const mouseStore = useMouseStore();
  const storeEditorElements = useStoreEditorElements();
  const editorStore = useEditorStore();

  /* destruct editorStore */
  const { editorCoords } = storeToRefs(editorStore);
  const { updateStartXY } = editorStore;

  /* destruct mouseStore */
  const { windowMouse } = storeToRefs(mouseStore);
  const { updateMousePosition } = mouseStore;

  /* destruct storeEditorElements */
  const { elements, scaleElements } = storeToRefs(storeEditorElements);
  const { updateElementsScale, updateElementsStartXY } = storeEditorElements;

  function mouseDown(x: number, y: number) {
    if (!editorCoords.value.moveEditorElement) {
      editorCoords.value.moveEditor = true;
      updateStartXY(x, y);
      updateMousePosition(x, y);
    }
  }

  function mouseUp() {
    editorCoords.value.moveEditor = false;
  }

  const currentWorkSpaceMove = computed(() => {
    if (
      !editorCoords.value.moveEditor ||
      editorCoords.value.moveEditorElement
    ) {
      updateElementsStartXY();

      return null;
    }
    console.log("WorkSpaceMove");
    const deltaX = windowMouse.value.x - editorCoords.value.startX;
    const deltaY = windowMouse.value.y - editorCoords.value.startY;

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
    elements.value.forEach((el) => {
      el.coords.currentX = el.coords.x_start + deltaX;
      el.coords.currentY = el.coords.y_start + deltaY;
    });
  }

  watch(currentWorkSpaceMove, (move) => {
    if (move) {
      moveWorkSpace({
        deltaX: move.deltaX,
        deltaY: move.deltaY,
      });
    }
  });

  function resize(deltaY: number) {
    const SCALE = 0.05;
    const newScaleValue = calculateNewScale(deltaY, scaleElements.value, SCALE);

    if (newScaleValue > 2 || newScaleValue < 0.5) {
      return;
    }

    const deltaScale = newScaleValue / scaleElements.value;

    scaleElements.value = newScaleValue;
    updateElementsScale(deltaScale);
    updateElementsStartXY();
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
