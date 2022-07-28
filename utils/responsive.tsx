import { WindowSize } from "@components/hooks";
import { VIEWPORTS } from "@constants";

/** Return responsive value according to viewport.*/
export function responsive<Type>(
  windowSize: WindowSize,
  mobile: Type,
  tablet?: Type,
  desktop?: Type
): Type {
  let value: Type;
  if (windowSize.width >= VIEWPORTS.DESKTOP && desktop) {
    value = desktop;
  } else if (windowSize.width >= VIEWPORTS.TABLET && tablet) {
    value = tablet;
  } else {
    value = mobile;
  }
  return value;
}
