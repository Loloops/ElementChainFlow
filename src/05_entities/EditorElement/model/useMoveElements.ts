import { useStoreEditorElements } from "@/05_entities/EditorElement";

const storeElements = useStoreEditorElements();

export function useMoveElements({
  x,
  y,
  move,
  startX,
  startY,
}: {
  startX: number;
  startY: number;
  x: number;
  y: number;
  move: boolean;
}) {
  storeElements.elements.forEach((el) => {
    if (!move) {
      storeElements.setStart(el, x, y);
    } else {
      const finishX = el.coords.x_start + (x - startX);
      const finishY = el.coords.y_start + (y - startY);

      storeElements.setCurrent(el, finishX, finishY);
    }
  });
}
