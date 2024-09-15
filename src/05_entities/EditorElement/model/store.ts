import { defineStore } from "pinia";
import { ref } from "vue";
import { Element } from "@/05_entities/EditorElement";

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
      hovered: false,
      grabbed: false,
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
      hovered: false,
      grabbed: false,
    },
  ]);
  const scaleElements = ref(1);

  function getElement(id: number) {
    return elements.value.find((el) => el.id === id);
  }

  function updateElements(element: Element) {
    elements.value.push(element);
  }

  function updateElementsStartXY() {
    elements.value.forEach((el) => {
      el.coords.x_start = el.coords.currentX;
      el.coords.y_start = el.coords.currentY;
    });
  }

  function updateElementCurrentXY(
    id: number,
    { x, y }: { x: number; y: number }
  ) {
    elements.value.forEach((el) => {
      if (el.id === id) {
        el.coords.currentX = x;
        el.coords.currentY = y;
      }
    });
  }

  function updateElementsScale(deltaScale: number) {
    elements.value.forEach((el) => {
      el.styles.transform = `scale(${scaleElements.value})`;
      el.coords.currentX = el.coords.currentX * deltaScale;
      el.coords.currentY = el.coords.currentY * deltaScale;
    });
  }

  function updateHoveredElement(id: number) {
    elements.value.forEach((el) => {
      if (el.id === id) {
        el.hovered = true;
      } else {
        el.hovered = false;
      }
    });
  }

  function resetHoveredElement() {
    elements.value.forEach((el) => {
      el.hovered = false;
    });
  }

  function updateGrabbedElement(id: number) {
    elements.value.forEach((el) => {
      if (el.id === id) {
        el.grabbed = true;
      } else {
        el.grabbed = false;
      }
    });
  }

  function resetGrabbedElement() {
    elements.value.forEach((el) => {
      el.grabbed = false;
    });
  }

  return {
    elements,
    getElement,
    updateElements,
    updateElementsStartXY,
    updateElementCurrentXY,
    scaleElements,
    updateElementsScale,
    updateHoveredElement,
    resetHoveredElement,
    updateGrabbedElement,
    resetGrabbedElement,
  };
});
