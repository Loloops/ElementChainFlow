import { defineStore } from "pinia";
import { ref } from "vue";
import { Element } from "@/05_entities/EditorElement";
import { MouseState } from "@/05_entities/Mouse";
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
        x_start: 300,
        y_start: 100,
        currentX: 300,
        currentY: 100,
      },
      type: "circle",
    },
  ]);
  const scaleElements = ref(1);

  function addElement(type: ElementTypes) {
    const newElement: Element = {
      id: elements.value.length + 1,
      styles: {
        position: "static",
        transform: `scale(1)`,
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
    elements.value.forEach((el) => {
      el.coords.x_start = el.coords.currentX;
      el.coords.y_start = el.coords.currentY;
    });
  }

  function moveElements({ startX, startY, x, y, move }: MouseState) {
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

  function updateCoordsForWorkSpaceResize(deltaScale: number) {
    elements.value.forEach((el) => {
      if (el.styles.position !== "static") {
        el.styles.transform = `scale(${scaleElements.value})`;
        el.coords.currentX = el.coords.currentX * deltaScale;
        el.coords.currentY = el.coords.currentY * deltaScale;
      }
    });
  }

  function resizeElement(event: WheelEvent) {
    if (event.target !== event.currentTarget) {
      return;
    }

    const SCALE = 0.05;
    const scaleDirection = event.deltaY > 0 ? SCALE : -SCALE;
    const newScaleValue = scaleElements.value * Math.pow(SCALE, scaleDirection);
    const deltaScale = newScaleValue / scaleElements.value;

    if (newScaleValue > 2 || newScaleValue < 0.5) {
      return;
    }

    changeScaleElements(newScaleValue);
    updateCoordsForWorkSpaceResize(deltaScale);
    updateStartXY();
  }

  return {
    elements,
    addElement,
    updateStartXY,
    moveElements,
    scaleElements,
    changeScaleElements,
    updateCoordsForWorkSpaceResize,
    resizeElement,
  };
});
