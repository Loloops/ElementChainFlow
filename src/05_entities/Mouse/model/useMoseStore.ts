import { defineStore } from "pinia";
import { ref } from "vue";

export const useMouseStore = defineStore("mouseStore", () => {
  const windowMouse = ref({
    x: 0,
    y: 0,
  });

  function updateMousePosition(x: number, y: number) {
    windowMouse.value.x = x;
    windowMouse.value.y = y;
  }

  return { windowMouse, updateMousePosition };
});
