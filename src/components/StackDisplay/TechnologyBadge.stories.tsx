import { TechnologyBadge } from "./TechnologyBadge";
import { TechnologyName } from "./StackDisplayTypes";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/TechnologyBadge",
  component: TechnologyBadge,
  tags: ["autodocs"],
  argTypes: {
    technology: {
      control: "select",
    },
    isDark: {
      control: "boolean",
    },
  },
};

export const Default = {
  args: {
    technology: "HTML",
    isDark: false,
  },
};

export const Examples = {
  render: () => (
    <div className="flex gap-8 justify-center items-center">
      <div className="flex flex-col gap-4 items-center bg-brand-950 p-4 rounded-lg">
        <p className="text-slate-300">(regular)</p>
        <TechnologyBadge technology="TypeScript" />
        <TechnologyBadge technology="React" />
        <TechnologyBadge technology="Next.js" />
        <TechnologyBadge technology="Figma" />
        <TechnologyBadge technology="React Native" />
        <TechnologyBadge technology="App Store" />
        <TechnologyBadge technology="Expo" />
      </div>

      <div className="flex flex-col gap-4 items-center p-4">
        <p className="text-slate-600">(dark)</p>
        <TechnologyBadge technology="TypeScript" isDark />
        <TechnologyBadge technology="React" isDark />
        <TechnologyBadge technology="Next.js" isDark />
        <TechnologyBadge technology="Figma" isDark />
        <TechnologyBadge technology="React Native" isDark />
        <TechnologyBadge technology="App Store" isDark />
        <TechnologyBadge technology="Expo" isDark />
      </div>
    </div>
  ),
};
