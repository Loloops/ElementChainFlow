import { Element } from "@/05_entities/EditorElement";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useEditorElements = defineStore("editorElements", () => {
  const elements = ref<Element[]>([
    /* {
      id: 1,
      coords: {
        x_main: 40,
        y_main: 40,
        x: 40,
        y: 40,
      },
      type: "square",
    },
    {
      id: 2,
      coords: {
        x_main: 150,
        y_main: 150,
        x: 150,
        y: 150,
      },
      type: "circle",
    }, */
  ]);

  function addElement(element: Element) {
    elements.value.push(element);
  }

  return { elements, addElement };
});
