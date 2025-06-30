"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "../theme/ThemeProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider defaultTheme="light" storageKey="nepbuzz-theme">
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}
