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

export { MouseState, MouseStore };
