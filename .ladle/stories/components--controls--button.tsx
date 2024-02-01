import type { Story, StoryDefault } from "@ladle/react";
import { Archive } from "lucide-react";
import { Button } from "../../src/components/controls/Button";
import { CenterPadded } from "../decorators";

const props = {
  text: "Example Button",
  href: "",
};

export const Basic: Story = () => <Button {...props} />;

export const BasicWithIcon: Story = () => <Button {...props} icon={Archive} />;

export const BasicLoading: Story = () => (
  <Button {...props} icon={Archive} isLoading />
);

export const BasicDisabled: Story = () => (
  <Button {...props} icon={Archive} disabled />
);

export const Primary: Story = () => <Button {...props} primary />;

export const PrimaryWithIcon: Story = () => (
  <Button {...props} icon={Archive} primary />
);

export const PrimaryLoading: Story = () => (
  <Button {...props} icon={Archive} primary isLoading />
);

export const PrimaryDisabled: Story = () => (
  <Button {...props} icon={Archive} primary disabled />
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
