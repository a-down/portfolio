import chroma from "chroma-js";

export function getAdaFontColor(color: string) {
  return chroma.contrast(color, "#fff") > 4.5 ? "#fff" : "#000";
}
