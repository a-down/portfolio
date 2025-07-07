import { Button, ButtonProps } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["submit", "reset", "button"],
    },
    color: {
      control: "color",
    },
  },
};

const FlexCenterWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-center items-center">{children}</div>
);

export const Default = {
  args: {},
  render: (args: ButtonProps) => (
    <FlexCenterWrapper>
      <Button {...args}>Click Here</Button>
    </FlexCenterWrapper>
  ),
};
