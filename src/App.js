import CoinPage from "./components/pages/CoinPage/coinPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from "./components/pages/LandingPage/landingPage";
import { useEffect, useState } from "react";
import "./darkmode.css";
import Download from "./components/layout/download";


function App() {
  const [downloadIsShown, setDownloadIsShown] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const showDownloadHandler = () => {
    setDownloadIsShown(true);
  };

  const hideDownloadHandler = () => {
    setDownloadIsShown(false);
  };

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`App ${theme}`} style={{ width: "100vw" }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                theme={theme}
                onChange={toggleTheme}
                checked={theme === "dark"}
                onShowDownload={showDownloadHandler}
              />
            }
          />
          <Route path="/coinpage" element={<CoinPage />} />
        </Routes>
      </BrowserRouter>
      {downloadIsShown && <Download onClose={hideDownloadHandler} />}
    </div>
  );
}

export default App;
