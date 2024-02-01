import type { Story, StoryDefault } from "@ladle/react";
import { useForm } from "react-hook-form";
import { TextInput } from "../../src/components/forms/TextInput";
import { CenterPadded } from "../decorators";

interface Form {
  text: string;
}

export const Basic: Story = () => {
  const { register } = useForm<Form>();

  return (
    <TextInput
      register={register}
      name="text"
      title="Example"
      placeholder="Example"
      type="text"
    />
  );
};

export const HasValue: Story = () => {
  const { register } = useForm<Form>({
    defaultValues: {
      text: "Lorem ipsum dolor,",
    },
  });

  return (
    <TextInput
      register={register}
      name="text"
      title="Example"
      placeholder="Example"
      type="text"
    />
  );
};

export const Required: Story = () => {
  const { register } = useForm<Form>();

  return (
    <TextInput
      register={register}
      name="text"
      options={{ required: true }}
      title="Example"
      placeholder="Example"
      type="text"
    />
  );
};

export const Disabled: Story = () => {
  const { register } = useForm<Form>();

  return (
    <TextInput
      register={register}
      name="text"
      options={{ disabled: true }}
      title="Example"
      placeholder="Example"
      type="text"
    />
  );
};

export const Error: Story = () => {
  const { register } = useForm<Form>();

  return (
    <TextInput
      register={register}
      name="text"
      title="Example"
      placeholder="Example"
      type="text"
      error="Example error"
    />
  );
};

export const WithPrefix: Story = () => {
  const { register } = useForm<Form>();

  return (
    <TextInput
      register={register}
      name="text"
      title="Example"
      placeholder="Example"
      type="url"
      prefix="https://"
    />
  );
};

export const WithSuffix: Story = () => {
  const { register } = useForm<Form>();

  return (
    <TextInput
      register={register}
      name="text"
      title="Example"
      placeholder="Example"
      type="number"
      suffix="kg"
    />
  );
};

export const WithPrefixAndSuffix: Story = () => {
  const { register } = useForm<Form>();

  return (
    <TextInput
      register={register}
      name="text"
      title="Example"
      placeholder="Example"
      type="number"
      prefix="So far"
      suffix="times"
    />
  );
};

export const WithAffixesDisabled: Story = () => {
  const { register } = useForm<Form>();

  return (
    <TextInput
      register={register}
      name="text"
      options={{ disabled: true }}
      title="Example"
      placeholder="Example"
      type="number"
      prefix="So far"
      suffix="times"
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
