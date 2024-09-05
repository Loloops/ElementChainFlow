import { Element } from "@/05_entities/EditorElement";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useEditorElements = defineStore("editorElements", () => {
  const elements = ref<Element[]>([]);

  function addElement(element: Element) {
    elements.value.push(element);
  }

  return { elements, addElement };
});
