import type { Story, StoryDefault } from "@ladle/react";
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { Selector } from "../../src/components/forms/Selector";
import { CenterPadded } from "../decorators";

const items = [
  { value: "Left", icon: AlignLeft },
  { value: "Center", icon: AlignCenter },
  { value: "Right", icon: AlignRight },
  { value: "Justify", icon: AlignJustify },
];

interface Form {
  selected: string;
}

export const Basic: Story = () => {
  const { register } = useForm<Form>();

  return (
    <Selector
      register={register}
      name="selected"
      title="Your favorite paragraph alignment"
      items={items}
      gridCols="grid-cols-4"
    />
  );
};

export const Selected: Story = () => {
  const { register } = useForm<Form>({
    defaultValues: { selected: "Center" },
  });

  return (
    <Selector
      register={register}
      name="selected"
      title="Your favorite paragraph alignment"
      items={items}
      gridCols="grid-cols-4"
    />
  );
};

export const Required: Story = () => {
  const { register } = useForm<Form>();

  return (
    <Selector
      register={register}
      name="selected"
      title="Your favorite paragraph alignment"
      items={items}
      gridCols="grid-cols-4"
      options={{ required: true }}
    />
  );
};

export const Disabled: Story = () => {
  const { register } = useForm<Form>();

  return (
    <Selector
      register={register}
      name="selected"
      title="Your favorite paragraph alignment"
      items={items}
      gridCols="grid-cols-4"
      options={{ disabled: true }}
    />
  );
};

export const Error: Story = () => {
  const { register } = useForm<Form>();

  return (
    <Selector
      register={register}
      name="selected"
      title="Your favorite paragraph alignment"
      items={items}
      gridCols="grid-cols-4"
      error="Here, tell your users why their favorite paragraph alignment is wrong"
    />
  );
};

export default {
  decorators: [
    (Component) => (
      <CenterPadded>
        <form className="w-full">
          <Component />
        </form>
      </CenterPadded>
    ),
  ],
} satisfies StoryDefault;
