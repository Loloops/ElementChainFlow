import { defineStore, storeToRefs } from "pinia";
import { ref, toRefs } from "vue";
import { useStoreEditorElements } from "@/05_entities/EditorElement";
import { useMouseStore } from "@/05_entities/Mouse";

export const useWorkSpaceFlow = defineStore("workSpaceFlow", () => {
  const mouseStore = useMouseStore();
  const storeEditorElements = useStoreEditorElements();
  const workSpaceCoords = ref({
    startX: 0,
    startY: 0,
    move: false,
  });
  /* destruct workSpaceCoords */
  const { startX, startY, move } = toRefs(workSpaceCoords.value);

  /* destruct mouseStore */
  const { windowMouse } = storeToRefs(mouseStore);
  const { updateMousePosition } = mouseStore;

  /* destruct storeEditorElements */
  const { elements, scaleElements } = storeToRefs(storeEditorElements);
  const { updateScale, updateElementsScale, updateElementsStartXY } =
    storeEditorElements;

  function toggleMove() {
    move.value = !move.value;
  }

  function updateStartXY(x: number, y: number) {
    startX.value = x;
    startY.value = y;
  }

  function mouseDown(x: number, y: number) {
    toggleMove();
    updateStartXY(x, y);
    updateMousePosition(x, y);
  }

  function mouseUp() {
    toggleMove();
  }

  function moveWorkSpace() {
    if (!move.value) {
      updateElementsStartXY();

      return;
    }

    elements.value.forEach((el) => {
      el.coords.currentX =
        el.coords.x_start + (windowMouse.value.x - startX.value);
      el.coords.currentY =
        el.coords.y_start + (windowMouse.value.y - startY.value);
    });
  }

  function resize(deltaY: number) {
    const SCALE = 0.05;
    const scaleDirection = deltaY > 0 ? SCALE : -SCALE;
    const newScaleValue = scaleElements.value * Math.pow(SCALE, scaleDirection);
    const deltaScale = newScaleValue / scaleElements.value;

    if (newScaleValue > 2 || newScaleValue < 0.5) {
      return;
    }

    updateScale(newScaleValue);
    updateElementsScale(deltaScale);
    updateElementsStartXY();
  }

  return { workSpaceCoords, mouseDown, mouseUp, moveWorkSpace, resize };
});
