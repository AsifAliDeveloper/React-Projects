import { useState } from "react";
import ThemeContext from "./ThemeContext";
import Navbar from "./Navbar.";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          backgroundColor: theme === "light" ? "#f5f5f5" : "#333",
          color: theme === "light" ? "#000" : "#fff",
          height: "100vh",
          padding: "20px",
        }}
      >
        <Navbar />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
