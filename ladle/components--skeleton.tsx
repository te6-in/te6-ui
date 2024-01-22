import type { Story, StoryDefault } from "@ladle/react";
import { CenterPadded } from "../.ladle/decorators";
import { Skeleton } from "../src/components/Skeleton";

export const Lines: Story = () => (
  <Skeleton textClass="text-base" lines={5.8} />
);

export const LinesWithDifferentSizes: Story = () => (
  <div className="grid grid-cols-2 gap-4">
    <div className="flex flex-col gap-2">
      <Skeleton textClass="text-3xl" lines={0.7} />
      <Skeleton textClass="text-base" lines={5.8} />
    </div>
    <div className="flex flex-col gap-2 text-base-700 dark:text-base-dark-300">
      <h2 className="text-3xl">Example</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat vel
        cumque reiciendis officia doloremque eligendi ipsum cum quo ducimus, id
        blanditiis, iure deserunt in commodi laborum, eos excepturi pariatur
        dolorem!
      </p>
    </div>
  </div>
);

export const Circle: Story = () => <Skeleton circle size={6} />;

export const Characters: Story = () => (
  <div className="flex flex-col gap-0.5 text-base-700 dark:text-base-dark-300">
    <span>EXAMPLE</span>
    <Skeleton textClass="text-base" characters={7} />
  </div>
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
