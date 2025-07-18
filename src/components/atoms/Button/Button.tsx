import { getAdaFontColor } from "@/lib";

export type ButtonProps = {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  color?: string;
  onClick?: () => void;
};

export function Button({ children, color = "#2A3D7E", onClick }: ButtonProps) {
  const textColor = getAdaFontColor(color);

  return (
    <button
      className="py-2 px-4 rounded-md text-slate-50 hover:scale-105 active:scale-[102%] transition-all"
      style={{ backgroundColor: color, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
