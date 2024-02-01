import type { GlobalProvider } from "@ladle/react";
import "../app/globals.css";
import "./ladle.css";

import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { PathnameContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

export const Provider: GlobalProvider = ({ children }) => {
  return (
    <PathnameContext.Provider value="/">
      <AppRouterContext.Provider
        value={{
          back: () => {},
          forward: () => {},
          prefetch: () => {},
          push: () => {},
          refresh: () => {},
          replace: () => {},
        }}
      >
        {children}
      </AppRouterContext.Provider>
    </PathnameContext.Provider>
  );
};
