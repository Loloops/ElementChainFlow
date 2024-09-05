import { ElementTypes } from "@/06_shared/model";

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
