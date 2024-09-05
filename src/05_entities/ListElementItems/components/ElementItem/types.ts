type ElementTypes = "square" | "circle";

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
