import type { Story, StoryDefault } from "@ladle/react";
import { useForm } from "react-hook-form";
import { CenterPadded } from "../.ladle/decorators";
import { TextArea } from "../src/components/forms/TextArea";

interface Form {
  text: string;
}

export const Basic: Story = () => {
  const { register } = useForm<Form>();

  return (
    <TextArea
      register={register}
      name="text"
      title="Example"
      placeholder="Example"
      rows={5}
    />
  );
};

export const HasValue: Story = () => {
  const { register } = useForm<Form>({
    defaultValues: {
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur incidunt exercitationem beatae? Tenetur maxime eligendi quia ut officia ducimus asperiores tempora unde repellendus sit. Veniam porro distinctio non recusandae rem?",
    },
  });

  return (
    <TextArea
      register={register}
      name="text"
      title="Example"
      placeholder="Example"
      rows={5}
    />
  );
};

export const Required: Story = () => {
  const { register } = useForm<Form>();

  return (
    <TextArea
      register={register}
      name="text"
      options={{ required: true }}
      title="Example"
      placeholder="Example"
      rows={5}
    />
  );
};

export const Disabled: Story = () => {
  const { register } = useForm<Form>();

  return (
    <TextArea
      register={register}
      name="text"
      options={{ disabled: true }}
      title="Example"
      placeholder="Example"
      rows={5}
    />
  );
};

export const Error: Story = () => {
  const { register } = useForm<Form>();

  return (
    <TextArea
      register={register}
      name="text"
      title="Example"
      placeholder="Example"
      rows={5}
      error="Example error"
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
