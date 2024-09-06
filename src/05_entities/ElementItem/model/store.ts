import { defineStore } from "pinia";
import { ref } from "vue";
import { Element } from "@/05_entities/ElementItem/types";
import { ElementType } from "@/06_shared/types";

export const useStoreElement = defineStore("element", () => {
  const elements = ref<Element[]>([]);

  function addElementItem(type: ElementType, x: number, y: number): void {
    elements.value.push({
      id: elements.value.length + 1,
      x,
      y,
      type,
    });
  }

  function removeElementItem(id: number): void {
    elements.value = elements.value.filter((element) => element.id !== id);
  }

  return { elements, addElementItem, removeElementItem };
});
