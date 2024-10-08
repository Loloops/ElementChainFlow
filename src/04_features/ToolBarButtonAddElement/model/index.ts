import { Element, useStoreEditorElements } from "@/05_entities/EditorElement";
import { ElementType } from "@/06_shared/types";

export function useToolBarAddElement() {
  const store = useStoreEditorElements();
  function addElement(type: ElementType) {
    const newElement: Element = {
      id: store.elements.length + 1,
      styles: {
        position: "static",
        transform: `scale(1)`,
        width: 50,
        height: 50,
      },
      coords: {
        x_start: 0,
        y_start: 0,
        currentX: 0,
        currentY: 0,
      },
      type,
      hovered: false,
      grabbed: false,
    };

    store.updateElements(newElement);
  }

  return { addElement };
}
