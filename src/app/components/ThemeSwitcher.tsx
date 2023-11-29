"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <ButtonGroup className="w-full" size="sm">
        <Button
          onClick={() => setTheme("light")}
          className={
            theme === "light" ? "text-base bg-gray-200" : "bg-gray-600"
          }
        >
          <BsFillSunFill />
        </Button>
        <Button
          onClick={() => setTheme("dark")}
          className={
            theme === "dark"
              ? "text-base bg-gray-200 text-black"
              : "bg-gray-600 text-white"
          }
        >
          <BsFillMoonStarsFill />
        </Button>
      </ButtonGroup>
    </>
  );
}
