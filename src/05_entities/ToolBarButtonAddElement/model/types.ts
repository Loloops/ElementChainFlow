import { Component } from "vue";
import { ElementType } from "@/06_shared/types";

export type ToolbarItem = {
  id: number;
  type: ElementType;
  icon: Component;
};
