import { Badge } from "./Badge";
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
      {stackArr.map((stack) => (
        <Badge stack={stack} isDark={isDark} key={stack} />
      ))}
    </div>
  );
}
