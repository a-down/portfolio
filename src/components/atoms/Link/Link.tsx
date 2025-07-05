export type LinkProps = {
  href: string;
  children: React.ReactNode;
  target?: "_blank";
  variant?: "default" | "button";
  color?: string;
  download?: string;
  rel?: string;
};

export function Link({
  href,
  children,
  target,
  variant = "default",
  color = "#2A3D7E",
  download,
}: LinkProps) {
  const sharedProps = {
    href,
    download,
    target,
  };

  if (variant === "button") {
    // TODO: Auto set the button text
    return (
      <a
        className="py-2 px-4 rounded-md text-slate-50 hover:scale-105 active:scale-[102%] transition-all"
        style={{ backgroundColor: color }}
        {...sharedProps}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      className="hover:scale-105 transition-all active:scale-[102%] text-navy"
      style={{ color }}
      {...sharedProps}
    >
      {children}
    </a>
  );
}
