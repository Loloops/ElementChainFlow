export enum ElementTypes {
  Square = "square",
  Circle = "circle",
}

export type Element = {
  id: number;
  coords: {
    x_main: number;
    y_main: number;
    x: number;
    y: number;
  };
  type: ElementTypes;
};
