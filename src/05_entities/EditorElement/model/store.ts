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

  function updateElements(element: Element) {
    elements.value.push(element);
  }

  function updateElementsStartXY() {
    elements.value.forEach((el) => {
      el.coords.x_start = el.coords.currentX;
      el.coords.y_start = el.coords.currentY;
    });
  }

  function updateScale(newScale: number) {
    scaleElements.value = newScale;
  }

  function updateElementsScale(deltaScale: number) {
    elements.value.forEach((el) => {
      el.styles.transform = `scale(${scaleElements.value})`;
      el.coords.currentX = el.coords.currentX * deltaScale;
      el.coords.currentY = el.coords.currentY * deltaScale;
    });
  }

  return {
    elements,
    updateElements,
    updateElementsStartXY,
    scaleElements,
    updateScale,
    updateElementsScale,
  };
});
