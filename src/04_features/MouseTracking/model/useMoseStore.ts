import { defineStore } from "pinia";
import { reactive } from "vue";

export const useMouseStore = defineStore("mouseStore", () => {
  const windowMouse = reactive({
    startX: 0,
    startY: 0,
    x: 0,
    y: 0,
    move: false,
    setStartCoords(startX: number, startY: number) {
      this.startX = startX;
      this.startY = startY;
    },
    setCoords(x: number, y: number) {
      this.x = x;
      this.y = y;
    },
    changeMove(isMove: boolean) {
      this.move = isMove;
    },
  });

  return { windowMouse };
});
