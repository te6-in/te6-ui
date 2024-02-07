import type { Story, StoryDefault } from "@ladle/react";
import { Home } from "lucide-react";
import { Button } from "../../src/components/controls/Button";
import { CenterPadded } from "../decorators";

const props = {
  text: "Go to home",
  href: "/",
};

export const Basic: Story = () => <Button {...props} />;

export const BasicWithIcon: Story = () => <Button {...props} icon={Home} />;

export const BasicLoading: Story = () => (
  <Button {...props} icon={Home} isLoading />
);

export const BasicDisabled: Story = () => (
  <Button {...props} icon={Home} disabled />
);

export const Primary: Story = () => <Button {...props} primary />;

export const PrimaryWithIcon: Story = () => (
  <Button {...props} icon={Home} primary />
);

export const PrimaryLoading: Story = () => (
  <Button {...props} icon={Home} primary isLoading />
);

export const PrimaryDisabled: Story = () => (
  <Button {...props} icon={Home} primary disabled />
);

export default {
  decorators: [
    (Component) => (
      <CenterPadded>
        <Component />
      </CenterPadded>
    ),
  ],
} satisfies StoryDefault;
