import type { nameIcons } from "@/06_shared/icons";
import { ElementType } from "@/06_shared/types";

type Props = {
  elementType: ElementType;
  nameIcon: nameIcons;
  buttonTitle: string;
  iconClass?: string;
};

export { Props };
