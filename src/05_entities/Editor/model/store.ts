import { defineStore } from "pinia";
import { ref } from "vue";

export const useEditorStore = defineStore("editorStore", () => {
  const editorCoords = ref({
    moveAllElements: false,
    moveEditorElement: false,
  });

  return { editorCoords };
});
