export type LinkProps = {
  href: string;
  children: React.ReactNode;
  target?: "_blank";
  variant?: "default" | "button";
  color?: string;
  download?: string;
};

export function Link({
  href,
  children,
  target,
  variant = "default",
  color = "#2A3D7E",
  download,
}: LinkProps) {
  if (variant === "button") {
    return (
      <a
        href={href}
        className="py-2 px-4 rounded-md text-slate-50 hover:scale-105 active:scale-[102%] transition-all"
        style={{ backgroundColor: color }}
        download={download}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className="hover:scale-105 transition-all active:scale-[102%] text-navy"
      style={{ color }}
      download={download}
      target={target}
    >
      {children}
    </a>
  );
}
