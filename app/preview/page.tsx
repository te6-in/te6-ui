"use client";

import {
  AlarmClockPlus,
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  CheckCircle,
  CupSoda,
  Home,
  MousePointerClick,
  PackageOpen,
  PartyPopper,
  RotateCcw,
  Siren,
  Soup,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FullScreenOverlay } from "../../src/components/FullScreenOverlay";
import { Skeleton } from "../../src/components/Skeleton";
import { Button } from "../../src/components/controls/Button";
import { Toggle } from "../../src/components/controls/Toggle";
import { Checkbox } from "../../src/components/forms/Checkbox";
import { Selector } from "../../src/components/forms/Selector";
import { TextArea } from "../../src/components/forms/TextArea";
import { TextInput } from "../../src/components/forms/TextInput";
import { Layout } from "../../src/layout";
import { TABS } from "../constants";

interface TestForm {
  text: string;
  number: number;
  disabled: string;
  prefix: string;
  suffix: string;
  affix: string;
  affixDisabled: string;
  paragraph: string;
  checkbox: boolean;
  checkboxChecked: boolean;
  select: string;
}

interface BottomToolbarForm {
  bottom: string;
}

interface HeaderProps {
  text: string;
}

function Header({ text }: HeaderProps) {
  return (
    <h3 className="mb-1 ml-1 text-lg font-bold text-base-800 dark:text-base-dark-200">
      {text}
    </h3>
  );
}

export default function PreviewPage() {
  const { register } = useForm<TestForm>({
    defaultValues: {
      checkboxChecked: true,
    },
  });
  const { register: registerBottomToolbarForm } = useForm<BottomToolbarForm>();

  const [showOverlay, setShowOverlay] = useState(false);

  const [isShowingInput, setIsShowingInput] = useState(false);
  const [isShowingErrors, setIsShowingErrors] = useState(false);

  const [isDeclaringEmergency, setIsDeclaringEmergency] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [isEatingSoup, setIsEatingSoup] = useState(false);

  const [isSkeletonShowing, setIsSkeletonShowing] = useState(true);

  useEffect(() => {
    if (isDeclaringEmergency) {
      setTimeout(() => {
        setIsDeclaringEmergency(false);
      }, 1000);
    }
  }, [isDeclaringEmergency]);

  useEffect(() => {
    if (isClicking) {
      setTimeout(() => {
        setIsClicking(false);
      }, 1000);
    }
  }, [isClicking]);

  useEffect(() => {
    if (isCelebrating) {
      setTimeout(() => {
        setIsCelebrating(false);
      }, 1000);
    }
  }, [isCelebrating]);

  useEffect(() => {
    if (isEatingSoup) {
      setTimeout(() => {
        setIsEatingSoup(false);
      }, 1000);
    }
  }, [isEatingSoup]);

  return (
    <Layout
      header={{ background: true, title: "Preview" }}
      tabBar={{ items: TABS, gridCols: "grid-cols-3", hideOnMobile: true }}
      has={{
        bottomToolbar: {
          ...(isShowingInput
            ? {
                input: {
                  register: registerBottomToolbarForm,
                  name: "bottom",
                  type: "text",
                  placeholder: "Eat soup!",
                  error: isShowingErrors ? "Please eat soup." : undefined,
                  onFormSubmit: () => {},
                },
              }
            : {
                primaryButton: {
                  isLoading: isCelebrating,
                  icon: PartyPopper,
                  text: "Celebrate",
                  onClick: () => setIsCelebrating(true),
                },
              }),
          secondaryButtons: [
            {
              isLoading: isEatingSoup,
              icon: Soup,
              onClick: () => setIsEatingSoup(true),
            },
            {
              isLoading: false,
              icon: Home,
              href: "/",
            },
          ],
        },
      }}
    >
      <FullScreenOverlay
        type="close"
        show={showOverlay}
        setShow={setShowOverlay}
      >
        <div className="text-center text-base-800 dark:text-base-dark-200">
          Hi there!
        </div>
      </FullScreenOverlay>
      <div className="flex flex-col gap-8 p-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-balance text-4xl font-bold leading-tight text-base-900 dark:text-base-dark-100">
            This is a preview page to test{" "}
            <span className="text-primary-500">@te6/ui</span> components
          </h2>
          <p className="text-balance text-base-600 dark:text-base-dark-400">
            You can use this page to test your components before you add them to
            your own app.
          </p>
        </div>
        <hr className="border-base-200 dark:border-base-dark-800" />
        <div className="flex flex-col gap-3">
          <Header text="Buttons & Controls" />
          <div className="mb-2 grid grid-cols-2 gap-2">
            <div className="col-span-2">
              <Button
                primary
                text="Open the overlay component"
                icon={PackageOpen}
                onClick={() => setShowOverlay(true)}
              />
            </div>
            <Button
              primary
              isLoading={isDeclaringEmergency}
              text={
                isDeclaringEmergency ? "Declaring…" : "Declare an emergency"
              }
              icon={Siren}
              onClick={() => setIsDeclaringEmergency(true)}
            />
            <Button
              text={isClicking ? "Loading..." : "Click here"}
              isLoading={isClicking}
              icon={MousePointerClick}
              onClick={() => setIsClicking(true)}
            />
            <Button
              primary
              disabled
              text="Add a new alarm"
              icon={AlarmClockPlus}
              onClick={() => {}}
            />
            <Button
              disabled
              text="Drink water"
              icon={CupSoda}
              onClick={() => {}}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Toggle
              title="This does absolutely nothing"
              isOn={false}
              setIsOn={() => {}}
            />
            <Toggle
              title="Show error states"
              description="Turning this on shows the error state of the inputs below."
              isOn={isShowingErrors}
              setIsOn={setIsShowingErrors}
            />
            <Toggle
              title="Show a text input on the bottom toolbar"
              description="Turning this on shows a text input instead of the primary button on the bottom toolbar."
              isOn={isShowingInput}
              setIsOn={setIsShowingInput}
            />
          </div>
        </div>
        <hr className="border-base-200 dark:border-base-dark-800" />
        <form
          className="flex flex-col gap-3"
          onSubmit={(event) => event.preventDefault()}
        >
          <Header text="Inputs & Forms" />
          <div className="grid grid-cols-2 gap-3">
            <TextInput
              register={register}
              name="text"
              options={{ required: true }}
              type="text"
              title="First name"
              placeholder="Plain text"
              error={
                isShowingErrors
                  ? "The value of this field seems wrong."
                  : undefined
              }
            />
            <TextInput
              register={register}
              name="number"
              type="number"
              title="Your Favorite number"
              placeholder="Plain number"
              error={
                isShowingErrors
                  ? "The value of this field seems wrong."
                  : undefined
              }
            />
          </div>
          <TextInput
            register={register}
            name="disabled"
            options={{ disabled: true }}
            type="text"
            title="Try entering some text"
            placeholder="Disabled Input"
            error={
              isShowingErrors
                ? "The value of this field seems wrong."
                : undefined
            }
          />
          <TextInput
            prefix="https://"
            register={register}
            options={{ required: true }}
            name="prefix"
            type="url"
            title="Your website"
            placeholder="With a prefix"
            error={
              isShowingErrors
                ? "The value of this field seems wrong."
                : undefined
            }
          />
          <TextInput
            suffix="kilometers"
            register={register}
            name="suffix"
            type="text"
            title="How tall are you?"
            placeholder="With a suffix"
            error={
              isShowingErrors
                ? "The value of this field seems wrong."
                : undefined
            }
          />
          <TextInput
            prefix="So far"
            suffix="times"
            register={register}
            name="affix"
            type="number"
            title="How many times have you been to the moon?"
            placeholder="With both affixes"
            error={
              isShowingErrors
                ? "The value of this field seems wrong."
                : undefined
            }
          />
          <TextInput
            prefix="I can give you"
            suffix="wons"
            register={register}
            name="affixDisabled"
            options={{ disabled: true }}
            type="number"
            title="Give me your money"
            placeholder="With both affixes and disabled"
            error={
              isShowingErrors
                ? "The value of this field seems wrong."
                : undefined
            }
          />
          <TextArea
            register={register}
            name="paragraph"
            title="Please write a paragraph"
            rows={5}
            placeholder="Today I ate soup."
            error={
              isShowingErrors
                ? "The value of this field seems wrong."
                : undefined
            }
          />
          <Selector
            items={[
              { value: "Left", icon: AlignLeft },
              { value: "Center", icon: AlignCenter },
              { value: "Right", icon: AlignRight },
              { value: "Justify", icon: AlignJustify },
            ]}
            title="What is your favorite paragraph alignment?"
            gridCols="grid-cols-4"
            register={register}
            name="select"
            error={
              isShowingErrors
                ? "The value of this field seems wrong."
                : undefined
            }
          />
          <div className="mt-3 flex flex-col gap-5 rounded-xl bg-base-200 p-4 dark:bg-base-dark-800">
            <div className="flex flex-col gap-2.5">
              <Checkbox
                register={register}
                name="checkboxChecked"
                options={{ required: true }}
                title="I confirm that all of the information above is correct."
                description="This checkbox is checked by default for you."
              />
              <Checkbox
                register={register}
                name="checkbox"
                title="I am really sure."
                description="Please check this box if you are really sure."
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button
                primary
                text="Submit"
                icon={CheckCircle}
                onClick={() => {}}
              />
              <Button text="Think again" icon={RotateCcw} onClick={() => {}} />
            </div>
          </div>
        </form>
        <hr className="border-base-200 dark:border-base-dark-800" />
        <div className="flex flex-col gap-3">
          <Header text="Skeletons" />
          <div className="flex flex-col gap-4 rounded-xl bg-base-200 p-4 dark:bg-base-dark-800">
            <div className="flex w-full gap-3">
              <div className="mt-1 size-14 flex-none overflow-hidden rounded-full">
                {isSkeletonShowing ? (
                  <Skeleton circle size={3.5} />
                ) : (
                  <div className="size-full bg-base-300 dark:bg-base-dark-800">
                    <img
                      src="https://source.unsplash.com/random/200x200"
                      alt="Random Image"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
              <div className="flex w-full flex-col gap-0.5">
                <span className="text-xl font-semibold text-base-800 dark:text-base-dark-200">
                  {isSkeletonShowing ? (
                    <Skeleton lines={0.2} textClass="text-xl" />
                  ) : (
                    "John Doe"
                  )}
                </span>
                <p className="text-sm text-base-600 dark:text-base-dark-400">
                  {isSkeletonShowing ? (
                    <Skeleton lines={2.3} textClass="text-sm" />
                  ) : (
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, incidunt magnam qui deserunt id delectus illo laborum repellendus cupiditate asperiores aspernatur"
                  )}
                </p>
              </div>
            </div>
            <Button
              text={isSkeletonShowing ? "Load now" : "Show skeleton"}
              onClick={() => setIsSkeletonShowing((prev) => !prev)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 rounded-xl bg-base-200 p-4 text-base-500 dark:bg-base-dark-800 dark:text-base-dark-400">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
              incidunt magnam qui deserunt id delectus illo laborum repellendus
              cupiditate asperiores aspernatur eaque dolor ratione repudiandae?
              Id at consequuntur nostrum distinctio.
            </p>
            <p>
              <Skeleton textClass="text-base" lines={6.3} />
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
