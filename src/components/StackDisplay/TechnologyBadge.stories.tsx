import { TechnologyBadge } from "./TechnologyBadge";
import { TechnologyName } from "./StackDisplayTypes";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/TechnologyBadge",
  component: TechnologyBadge,
  // tags: ["autodocs"],
};

export const Example = {
  args: {
    stack: "HTML",
    isDark: true,
  },
  render: () => (
    <div className="flex gap-8 justify-center items-center">
      <div className="flex flex-col gap-4 items-center">
        <p>(regular)</p>
        <TechnologyBadge technology="HTML" />
        <TechnologyBadge technology="TypeScript" />
        <TechnologyBadge technology="Mantine UI" />
        <TechnologyBadge technology="App Store" />
      </div>

      <div className="flex flex-col gap-4 items-center">
        <p>(dark)</p>
        <TechnologyBadge technology="HTML" isDark />
        <TechnologyBadge technology="TypeScript" isDark />
        <TechnologyBadge technology="Mantine UI" isDark />
        <TechnologyBadge technology="App Store" isDark />
      </div>
    </div>
  ),
};
