import { useEditorStore } from "@/05_entities/Editor";
import { Element, useStoreEditorElements } from "@/05_entities/EditorElement";
import { useMouseStore } from "@/05_entities/Mouse";

type optionDragStar = { id: number; x: number; y: number };

export function useMouseDownDragControll() {
  const editorElementStore = useStoreEditorElements();
  const mouseStore = useMouseStore();
  const editorStore = useEditorStore();

  return function mouseDownDragControll(
    id: number,
    event: Event,
    element: Element
  ): optionDragStar {
    if (element.styles.position === "static") {
      const targetElement = event.currentTarget as HTMLElement;
      const menuHeight =
        targetElement.getBoundingClientRect().top - targetElement.offsetTop;

      editorElementStore.updateNewElementScale(id);

      const widthElem = element.styles.width * editorElementStore.scaleElements;
      const heightElem =
        element.styles.height * editorElementStore.scaleElements;

      const getCoordsMouseOverNewElement = function (
        element: Element,
        position: "y" | "x"
      ) {
        const pos: "left" | "top" = position === "x" ? "left" : "top";
        const whResize = position === "x" ? widthElem : heightElem;
        const wh: "width" | "height" = position === "x" ? "width" : "height";

        const innerResizeElementClick =
          mouseStore.windowMouse[position] -
          targetElement.getBoundingClientRect()[pos] -
          whResize;

        const innerBaseElementClickPercent =
          ((element.styles[wh] -
            (mouseStore.windowMouse[position] -
              targetElement.getBoundingClientRect()[pos])) /
            element.styles[wh]) *
          100;

        const percentFromElementResize =
          (whResize / 100) * innerBaseElementClickPercent;

        return (
          targetElement.getBoundingClientRect()[pos] +
          innerResizeElementClick +
          percentFromElementResize
        );
      };

      editorElementStore.updateElementCurrentXY(id, {
        x: getCoordsMouseOverNewElement(element, "x"),
        y: getCoordsMouseOverNewElement(element, "y") - menuHeight,
      });

      editorElementStore.updateStylePositionElement(id);
    }

    editorStore.editorCoords.moveEditorElement = true;
    editorElementStore.updateGrabbedElement(id);

    return {
      id,
      x: mouseStore.windowMouse.x - element.coords.currentX,
      y: mouseStore.windowMouse.y - element.coords.currentY,
    };
  };
}
