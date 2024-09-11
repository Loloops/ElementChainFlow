import { ElementTypes } from "@/06_shared/model";

export type Element = {
  id: number;
  styles: {
    [key: string]: string | number;
  };
  coords: {
    x_start: number;
    y_start: number;
    currentX: number;
    currentY: number;
  };
  type: ElementTypes;
};
