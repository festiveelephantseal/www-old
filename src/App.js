import Info from "./components/Info";
import { useState } from "react";

function App() {
  const [lang, setLang] = useState("en");

  const langToggle = () => {
    if (lang === "en") {
      setLang("fr");
    } else {
      setLang("en");
    }
  };

  return (
    <div>
      <Info language={lang} onClick={langToggle} />
    </div>
  );
}

export default App;
