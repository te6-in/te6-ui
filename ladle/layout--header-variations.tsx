import type { Story } from "@ladle/react";
import { LayoutTestComponent, gridCols, items } from "../.ladle/LayoutTest";
import { Layout } from "../src/layout";

export const Background: Story = () => (
  <Layout
    header={{
      background: true,
      title: "Header",
    }}
    tabBar={{ items, gridCols }}
  >
    <LayoutTestComponent />
  </Layout>
);

export const BackgroundAndBackButton: Story = () => (
  <Layout
    header={{
      background: true,
      title: "Header",
      backButton: true,
    }}
    tabBar={{ items, gridCols }}
  >
    <LayoutTestComponent />
  </Layout>
);

export const WithoutBackgroundAndBackButton: Story = () => (
  <Layout
    header={{
      background: false,
      backButton: true,
    }}
    tabBar={{ items, gridCols }}
  >
    <LayoutTestComponent />
  </Layout>
);

Background.meta = { iframed: true };
BackgroundAndBackButton.meta = { iframed: true };
WithoutBackgroundAndBackButton.meta = { iframed: true };
