import { defineStore } from "pinia";
import { ref } from "vue";
import { Element } from "@/05_entities/EditorElement";
import { ElementTypes } from "@/06_shared/model";

export const useStoreEditorElements = defineStore("editorElements", () => {
  const scaleElements = ref(1);

  function changeScaleElements(newScale: number) {
    scaleElements.value = newScale;
  }

  const elements = ref<Element[]>([
    {
      id: 1,
      styles: {
        position: "absolute",
        transform: `scale(1)`,
      },
      coords: {
        x_start: 250,
        y_start: 100,
        currentX: 250,
        currentY: 100,
      },
      type: "circle",
    },
  ]);

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

  function setStart(el: Element, startX: number, startY: number) {
    el.coords.x_start = startX;
    el.coords.y_start = startY;
  }

  function setCurrent(el: Element, currentX: number, currentY: number) {
    el.coords.currentX = currentX;
    el.coords.currentY = currentY;
  }

  return { elements, addElement, setStart, setCurrent, changeScaleElements };
});
