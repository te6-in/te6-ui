import type { Story, StoryDefault } from "@ladle/react";
import { useForm } from "react-hook-form";
import { CenterPadded } from "../.ladle/decorators";
import { Checkbox } from "../src/components/forms/Checkbox";

interface Form {
  checked: boolean;
}

const props = {
  title: "I agree to the terms and conditions",
};

export const Basic: Story = () => {
  const { register } = useForm<Form>();

  return <Checkbox {...props} register={register} name="checked" />;
};

export const Checked: Story = () => {
  const { register } = useForm<Form>({
    defaultValues: { checked: true },
  });

  return (
    <Checkbox
      {...props}
      register={register}
      name="checked"
      description="This is a description"
    />
  );
};

export const Required: Story = () => {
  const { register } = useForm<Form>();

  return (
    <Checkbox
      {...props}
      register={register}
      name="checked"
      options={{ required: true }}
      description="This is a description"
    />
  );
};

export const Disabled: Story = () => {
  const { register } = useForm<Form>();

  return (
    <Checkbox
      {...props}
      register={register}
      name="checked"
      options={{ disabled: true }}
      description="This is a description"
    />
  );
};

export const WithDescription: Story = () => {
  const { register } = useForm<Form>();

  return (
    <Checkbox
      {...props}
      register={register}
      name="checked"
      description="This is a description"
    />
  );
};

export const WithLongDescription: Story = () => {
  const { register } = useForm<Form>();

  return (
    <Checkbox
      {...props}
      register={register}
      name="checked"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id perferendis necessitatibus veniam dolore quas nam quasi dolorem, dolorum rerum quod repudiandae impedit voluptas vitae autem qui deserunt! Consectetur, deserunt accusamus?"
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
