import { Link, LinkProps } from "./Link";

export default {
  title: "Atoms/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    href: {
      control: "text",
    },
    target: {
      control: "text",
      options: ["_blank"],
    },
    variant: {
      control: "select",
      options: ["default", "button"],
    },
  },
};

const FlexCenterWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-center items-center">{children}</div>
);

export const DefaultVariant = {
  args: {
    href: "https://alecdowning.com",
    target: "_blank",
    variant: "default",
  },
  render: (args: LinkProps) => (
    <FlexCenterWrapper>
      <Link {...args}>alecdowning.com</Link>
    </FlexCenterWrapper>
  ),
};

export const ButtonVariant = {
  args: {
    href: "https://alecdowning.com",
    variant: "button",
    target: "_blank",
  },
  render: () => (
    <FlexCenterWrapper>
      <Link href="https://alecdowning.com" variant="button" target="_blank">
        View Portfolio
      </Link>
    </FlexCenterWrapper>
  ),
};
