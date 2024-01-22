import type { Story, StoryDefault } from "@ladle/react";
import { useState } from "react";
import { CenterPadded } from "../.ladle/decorators";
import { Toggle } from "../src/components/controls/Toggle";

const props = {
  title: "Example Toggle",
};

export const Basic: Story = () => {
  const [isOn, setIsOn] = useState(false);

  return <Toggle isOn={isOn} setIsOn={setIsOn} {...props} />;
};

export const On: Story = () => {
  const [isOn, setIsOn] = useState(true);

  return <Toggle isOn={isOn} setIsOn={setIsOn} {...props} />;
};

export const WithDescription: Story = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <Toggle
      isOn={isOn}
      setIsOn={setIsOn}
      description="This is a description"
      {...props}
    />
  );
};

export const Disabled: Story = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <Toggle
      isOn={isOn}
      setIsOn={setIsOn}
      description="This is a description"
      disabled
      {...props}
    />
  );
};

export const WithLongDescription: Story = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <Toggle
      isOn={isOn}
      setIsOn={setIsOn}
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet necessitatibus quae mollitia, nulla iure ex similique fugiat distinctio eos aliquid perspiciatis velit laudantium sapiente exercitationem? Molestiae nam porro asperiores nobis."
      {...props}
    />
  );
};

export default {
  decorators: [
    (Component) => (
      <CenterPadded>
        <Component />
      </CenterPadded>
    ),
  ],
} satisfies StoryDefault;
