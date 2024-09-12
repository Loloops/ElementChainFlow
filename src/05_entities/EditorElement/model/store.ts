import { defineStore } from "pinia";
import { ref } from "vue";
import { Element } from "@/05_entities/EditorElement";
import { ElementTypes } from "@/06_shared/model";

export const useStoreEditorElements = defineStore("editorElements", () => {
  const elements = ref<Element[]>([
    {
      id: 1,
      styles: {
        position: "absolute",
        transform: "scale(1)",
      },
      coords: {
        x_start: 250,
        y_start: 100,
        currentX: 250,
        currentY: 100,
      },
      type: "circle",
    },
    {
      id: 2,
      styles: {
        position: "absolute",
        transform: "scale(1)",
      },
      coords: {
        x_start: 550,
        y_start: 400,
        currentX: 550,
        currentY: 400,
      },
      type: "circle",
    },
  ]);
  const scaleElements = ref(1);

  function addElement(type: ElementTypes) {
    const newElement: Element = {
      id: elements.value.length + 1,
      styles: {
        position: "relative",
        transform: `scale(${scaleElements.value})`,
      },
      coords: {
        x_start: 0,
        y_start: 0,
        currentX: 0,
        currentY: 0,
      },
      type,
    };

    elements.value.push(newElement);
  }

  function updateStartXY() {
    elements.value = elements.value.map((el) => ({
      ...el,
      coords: {
        ...el.coords,
        x_start: el.coords.currentX,
        y_start: el.coords.currentY,
      },
    }));
  }

  function moveElements({
    x,
    y,
    move,
    startX,
    startY,
  }: {
    startX: number;
    startY: number;
    x: number;
    y: number;
    move: boolean;
  }) {
    if (!move) {
      updateStartXY();

      return;
    }

    elements.value = elements.value.map((el) => ({
      ...el,
      coords: {
        ...el.coords,
        currentX: el.coords.x_start + (x - startX),
        currentY: el.coords.y_start + (y - startY),
      },
    }));
  }

  function changeScaleElements(newScale: number) {
    scaleElements.value = newScale;
  }

  function updateCoordForWorkSpaceResize(deltaScale: number) {
    elements.value = elements.value.map((el) => ({
      ...el,
      styles: {
        ...el.styles,
        transform: `scale(${scaleElements.value})`, //тут надо использовать не deltaScale, а новое значение scaleElements
      },
      coords: {
        ...el.coords,
        currentX: el.coords.currentX * deltaScale,
        currentY: el.coords.currentY * deltaScale,
      },
    }));
  }

  return {
    elements,
    addElement,
    updateStartXY,
    moveElements,
    scaleElements,
    changeScaleElements,
    updateCoordForWorkSpaceResize,
  };
});
