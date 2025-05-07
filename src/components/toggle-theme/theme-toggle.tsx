"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, SunMoon } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {mounted ? (
        theme === "light" ? (
          <Moon className="h-5 w-5 text-black" />
        ) : (
          <SunMoon className="h-5 w-5 text-white" />
        )
      ) : (
        <SunMoon className="h-5 w-5" /> // fallback icon (without color to avoid mismatch)
      )}
    </div>
  );
}
