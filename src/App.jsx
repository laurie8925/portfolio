import { useState } from "react";
import AppRouter from "./routers/AppRouter";
import ThemeContext from "./global/ThemeContext";

function App() {
  const [theme, setTheme] = useState("");

  return (
    <ThemeContext.Provider value={theme}>
      <AppRouter />
    </ThemeContext.Provider>
  );
}

export default App;
