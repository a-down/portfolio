import chroma from "chroma-js";

export function getAdaFontColor(color: string) {
  console.log(chroma.contrast(color, "#fff"));
  return chroma.contrast(color, "#fff") > 2.5 ? "#fff" : "#000";
}
