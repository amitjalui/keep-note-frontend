'use client'

import { useEffect, useState } from "react";
import { ThemeProvider } from 'styled-components';
import GlobalStyles from "@/components/GlobalStyles";
import useColorTheme from "@/hooks/useColorTheme";

export default function ThemeProviderComponent({
  children
}: {
  children: React.ReactNode
}) {
  const { initColorTheme, getCurrentColorThemeStyle } = useColorTheme();
  const [themeReady, setThemeReady] = useState(false);

  useEffect(() => {
    const initializeTheme = async () => {
      await initColorTheme();
    };
    setThemeReady(true);

    initializeTheme();
  }, [initColorTheme]);

  if (!themeReady) {
    // You can return a loading indicator or null here if you prefer
    return "Loading";
  }

  const theme = getCurrentColorThemeStyle();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

