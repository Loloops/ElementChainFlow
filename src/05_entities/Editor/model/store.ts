import { defineStore } from "pinia";
import { ref, toRefs } from "vue";

export const useEditorStore = defineStore("editorStore", () => {
  const editorCoords = ref({
    startX: 0,
    startY: 0,
    moveEditor: false,
    moveEditorElement: false,
  });

  const { startX, startY } = toRefs(editorCoords.value);

  function updateStartXY(x: number, y: number) {
    startX.value = x;
    startY.value = y;
  }

  return { editorCoords, updateStartXY };
});
