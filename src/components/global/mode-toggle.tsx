import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/theme-provider";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
      <Button size="icon" onClick={() => setTheme("dark")}>
        <Sun className=" h-5 w-5 transition-all " />
      </Button>
      <Button size="icon" onClick={() => setTheme("light")}>
        <Moon className="absolute h-5 w-5 transition-all" />
      </Button>
    </>
  );
}
