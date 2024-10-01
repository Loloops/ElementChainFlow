import { ElementType } from "@/06_shared/types";

export type Element = {
  id: number;
  styles: {
    position: "static" | "absolute";
    transform: string;
    [key: string]: string | number;
  };
  coords: {
    x_start: number;
    y_start: number;
    currentX: number;
    currentY: number;
  };
  type: ElementType;
  hovered: boolean;
  grabbed: boolean;
};
