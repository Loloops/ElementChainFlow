import { ElementTypes } from "@/06_shared/model";

export type Element = {
  id: number;
  styles: {
    [key: string]: string | number;
  };
  coords: {
    x_main: number;
    y_main: number;
    x: number;
    y: number;
  };
  type: ElementTypes;
};
