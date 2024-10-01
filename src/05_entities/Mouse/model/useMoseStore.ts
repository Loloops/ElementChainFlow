import { defineStore } from "pinia";
import { ref } from "vue";

export const useMouseStore = defineStore("mouseStore", () => {
  const windowMouse = ref({
    x: 0,
    y: 0,
    startX: 0,
    startY: 0,
  });

  function updateCurrentXY(x: number, y: number) {
    windowMouse.value.x = x;
    windowMouse.value.y = y;
  }

  function updateStartXY(x: number, y: number) {
    windowMouse.value.startX = x;
    windowMouse.value.startY = y;
  }

  return { windowMouse, updateCurrentXY, updateStartXY };
});
