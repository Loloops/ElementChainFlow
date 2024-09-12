import { defineStore } from "pinia";
import { reactive } from "vue";

type MouseState = {
  startX: number;
  startY: number;
  x: number;
  y: number;
  move: boolean;
};

type MouseStore = {
  setCoords(x: number, y: number): void;
  setStartCoords(x: number, y: number): void;
  changeMove(flag: boolean): void;
} & MouseState;

/* type aaa = WindowMouse & SetCoordsFunction; */

export const useMouseStore = defineStore("mouseStore", () => {
  const windowMouse = reactive<MouseStore>({
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
