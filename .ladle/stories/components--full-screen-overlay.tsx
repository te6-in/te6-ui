import type { Story, StoryDefault } from "@ladle/react";
import { ArrowUpRightFromCircle } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { FullScreenOverlay } from "../../src/components/FullScreenOverlay";
import { Button } from "../../src/components/controls/Button";
import { CenterPadded } from "../decorators";

interface ShowButtonProps {
  text: string;
  setShow: Dispatch<SetStateAction<boolean>>;
}

function ShowButton({ text, setShow }: ShowButtonProps) {
  return (
    <Button
      primary
      icon={ArrowUpRightFromCircle}
      text={text}
      onClick={() => setShow(true)}
    />
  );
}

function Component() {
  return <div className="text-base-700 dark:text-base-700">Hi there!</div>;
}

export const CloseButton: Story = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && (
        <FullScreenOverlay type="close" show={show} setShow={setShow}>
          <Component />
        </FullScreenOverlay>
      )}
      <ShowButton
        text="Show the overlay with a close button"
        setShow={setShow}
      />
    </>
  );
};

export const CloseButtonWithCustomButtonText: Story = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && (
        <FullScreenOverlay
          type="close"
          show={show}
          setShow={setShow}
          buttonLabel="Go away"
        >
          <Component />
        </FullScreenOverlay>
      )}
      <ShowButton
        text="Show the overlay with a customized close button"
        setShow={setShow}
      />
    </>
  );
};

export const BackButton: Story = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && (
        <FullScreenOverlay type="back">
          <Component />
        </FullScreenOverlay>
      )}
      {!show && (
        <ShowButton
          text="Show the overlay with a back button"
          setShow={setShow}
        />
      )}
    </>
  );
};

export const BackButtonWithCustomButtonText: Story = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && (
        <FullScreenOverlay
          type="back"
          buttonLabel="Go back to the previous page"
        >
          <Component />
        </FullScreenOverlay>
      )}
      {!show && (
        <ShowButton
          text="Show the overlay with a customized back button"
          setShow={setShow}
        />
      )}
    </>
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
