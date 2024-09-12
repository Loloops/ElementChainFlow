import { Component } from "vue";
import { ElementTypes } from "@/06_shared/types";

export type ToolbarItem = {
  id: number;
  type: ElementTypes;
  icon: Component;
};
