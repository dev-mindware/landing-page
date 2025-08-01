"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export function FaviconSwitcher() {
  const { theme } = useTheme();

  useEffect(() => {
    const favicon = document.querySelector("link[rel='icon']") || document.createElement("link");
    favicon.setAttribute("rel", "icon");

    const href =
      theme === "dark"
        ? "/icon_black.ico"
        : "/icon_white.ico";

    favicon.setAttribute("href", href);
    document.head.appendChild(favicon);
  }, [theme]);

  return null;
}
