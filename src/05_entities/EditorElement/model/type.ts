import { ElementTypes } from "@/05_entities/ToolBarButtonAddElement";

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
  type: ElementTypes;
};
