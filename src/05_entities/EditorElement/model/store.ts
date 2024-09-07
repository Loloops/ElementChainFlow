import { defineStore } from "pinia";
import { ref } from "vue";
import { Element } from "@/05_entities/EditorElement";
import { ElementTypes } from "@/06_shared/model";

export const useEditorElements = defineStore("editorElements", () => {
  const elements = ref<Element[]>([
    {
      id: 1,
      styles: {
        position: "absolute",
        transform: "scale(1)",
      },
      coords: {
        x_main: 250,
        y_main: 100,
        x: 250,
        y: 100,
      },
      type: "circle",
    },
  ]);

  function addElement(type: ElementTypes) {
    const newElement: Element = {
      id: Math.max(...elements.value.map((el) => el.id), 0) + 1,
      styles: {
        position: "relative",
        transform:
          "scale(1)" /* надо будет получать отдельно, чтобы если scale === 0.5 при добавлении нового элемента было 0.5 а не 1 */,
      },
      coords: {
        x_main: 0,
        y_main: 0,
        x: 0,
        y: 0,
      },
      type,
    };

    elements.value.push(newElement);
  }

  return { elements, addElement };
});
