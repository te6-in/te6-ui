import type { Story } from "@ladle/react";
import {
  Cookie,
  CupSoda,
  Laptop,
  Map,
  Monitor,
  RotateCcw,
  Search,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Layout } from "../../src/layout";
import { LayoutTestComponent, gridCols, items } from "../LayoutTest";

interface Form {
  input: string;
}

export const HideTabBarOnMobile: Story = () => (
  <Layout tabBar={{ items, gridCols, hideOnMobile: true }}>
    <LayoutTestComponent />
  </Layout>
);

export const FloatingButton: Story = () => (
  <Layout
    tabBar={{ items, gridCols }}
    has={{
      floatingButton: {
        href: "/",
        icon: Map,
        text: "See nearby",
      },
    }}
  >
    <LayoutTestComponent />
  </Layout>
);

export const FloatingButtonAndHideTabBarOnMobile: Story = () => (
  <Layout
    tabBar={{ items, gridCols, hideOnMobile: true }}
    has={{
      floatingButton: {
        href: "/",
        icon: Map,
        text: "See nearby",
        isTabBarHiddenOnMobile: true,
      },
    }}
  >
    <LayoutTestComponent />
  </Layout>
);

export const BottomToolbarWithButtons: Story = () => (
  <Layout
    tabBar={{ items, gridCols }}
    has={{
      bottomToolbar: {
        primaryButton: {
          isLoading: false,
          onClick: () => {},
          text: "Example Button",
          icon: Laptop,
        },
        secondaryButtons: [
          { icon: CupSoda, isLoading: false, onClick: () => {} },
          { icon: Cookie, isLoading: false, onClick: () => {} },
          { icon: Monitor, isLoading: false, onClick: () => {} },
        ],
      },
    }}
  >
    <LayoutTestComponent />
  </Layout>
);

export const BottomToolbarWithDisabledButtons: Story = () => (
  <Layout
    tabBar={{ items, gridCols }}
    has={{
      bottomToolbar: {
        primaryButton: {
          isLoading: false,
          onClick: () => {},
          text: "Example Button",
          icon: Laptop,
          disabled: true,
        },
        secondaryButtons: [
          {
            icon: CupSoda,
            isLoading: false,
            onClick: () => {},
            disabled: true,
          },
          {
            icon: Cookie,
            isLoading: false,
            onClick: () => {},
            disabled: true,
          },
          {
            icon: Monitor,
            isLoading: false,
            onClick: () => {},
            disabled: true,
          },
        ],
      },
    }}
  >
    <LayoutTestComponent />
  </Layout>
);

export const BottomToolbarWithInput: Story = () => {
  const { register } = useForm<Form>();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Layout
      tabBar={{ items, gridCols }}
      has={{
        bottomToolbar: {
          input: {
            register,
            name: "input",
            placeholder: "Search",
            onFormSubmit: () => alert("Form submitted"),
            type: "text",
          },
          secondaryButtons: [
            {
              icon: Search,
              isLoading,
              onClick: () => {
                setIsLoading(true);

                setTimeout(() => {
                  setIsLoading(false);
                }, 1000);
              },
              type: "button",
            },
            {
              icon: RotateCcw,
              isLoading: false,
              onClick: () => {},
              type: "reset",
            },
          ],
        },
      }}
    >
      <LayoutTestComponent />
    </Layout>
  );
};

export const BottomToolbarWithInputError: Story = () => {
  const { register } = useForm<Form>();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Layout
      tabBar={{ items, gridCols }}
      has={{
        bottomToolbar: {
          input: {
            register,
            name: "input",
            placeholder: "Search",
            onFormSubmit: () => alert("Form submitted"),
            type: "text",
            error: "This is an error",
          },
          secondaryButtons: [
            {
              icon: Search,
              isLoading,
              onClick: () => {
                setIsLoading(true);

                setTimeout(() => {
                  setIsLoading(false);
                }, 1000);
              },
              type: "button",
            },
            {
              icon: RotateCcw,
              isLoading: false,
              onClick: () => {},
              type: "reset",
            },
          ],
        },
      }}
    >
      <LayoutTestComponent />
    </Layout>
  );
};

HideTabBarOnMobile.meta = { iframed: true };
FloatingButton.meta = { iframed: true };
FloatingButtonAndHideTabBarOnMobile.meta = { iframed: true };
BottomToolbarWithButtons.meta = { iframed: true };
BottomToolbarWithDisabledButtons.meta = { iframed: true };
BottomToolbarWithInput.meta = { iframed: true };
BottomToolbarWithInputError.meta = { iframed: true };
