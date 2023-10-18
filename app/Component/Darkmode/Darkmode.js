import { useState, useEffect } from "react";
import { Switch } from "@nextui-org/react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("dark-mode");
    if (isDark === "true") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    localStorage.setItem("dark-mode", newMode.toString());
    document.documentElement.classList.toggle("dark", newMode);
    document.documentElement.classList.toggle("light", !newMode);
    setIsDarkMode(newMode);
  };

  return (
    <Switch
      aria-label="switch"
      defaultSelected
      size="lg"
      color="default"
      data-testid="Darkmode"
      onClick={toggleDarkMode}
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    ></Switch>
  );
};

export default DarkMode;
