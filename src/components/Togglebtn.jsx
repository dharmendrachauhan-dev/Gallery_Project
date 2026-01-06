import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function Togglebtn() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") === "dark";
    document.documentElement.classList.toggle("dark", savedTheme);
    setIsDark(savedTheme);
  }, []);

  const enableDarkMode = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <div>
      <button 
        onClick={enableDarkMode}>
        {isDark ? <Moon /> : <Sun />}
      </button>
    </div>
  );
}

export default Togglebtn;
