import { TechnologyBadge } from "./TechnologyBadge";
import { TechnologyName } from "./StackDisplayTypes";

type StackDisplayProps = {
  stackArr: TechnologyName[];
  centered?: boolean;
  isDark?: boolean;
};

export function StackDisplay({
  stackArr,
  isDark,
  centered,
}: StackDisplayProps) {
  return (
    <div
      className={`${centered ? "justify-center" : "justify-start"} w-full flex max-w-[1400] flex-wrap gap-4`}
    >
      {stackArr.map((technology, idx) => (
        <TechnologyBadge
          technology={technology}
          isDark={isDark}
          key={`${technology}-badge-${idx}`}
        />
      ))}
    </div>
  );
}
