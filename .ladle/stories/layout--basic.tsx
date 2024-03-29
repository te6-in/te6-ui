import type { Story } from "@ladle/react";
import { Layout } from "../../src/layout";
import { LayoutTestComponent, gridCols, items } from "../LayoutTest";

export const Basic: Story = () => (
  <Layout tabBar={{ items, gridCols }}>
    <LayoutTestComponent />
  </Layout>
);

// FIXME: fix ladle's dark mode toggle not working with iframed stories
Basic.meta = { iframed: true };
