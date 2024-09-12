import { ToolbarItem } from "./types";
import { CircleElementSvg } from "@/06_shared/components/CircleElementSvg";
import { SquareElementSvg } from "@/06_shared/components/SquareElementSvg";
import { ElementTypes } from "@/06_shared/types";

export class ToolbarItemFactory {
  static create(type: ElementTypes): ToolbarItem {
    switch (type) {
      case "square":
        return {
          id: 1,
          type: "square",
          icon: SquareElementSvg,
        };
      case "circle":
        return {
          id: 2,
          type: "circle",
          icon: CircleElementSvg,
        };
      default:
        throw new Error(`Unsupported type: ${type}`);
    }
  }
}
