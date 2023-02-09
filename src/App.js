import Info from "./components/Info";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import posts from "./posts.json";
import BlogPost from "./components/BlogPost";

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
      <Routes>
        <Route
          path="/"
          element={<Info language={lang} onClick={langToggle} />}
        />
        <Route path="/blog" element={<Blog language={lang} />} />
        {posts.posts.map((p) => (
          <Route
            key={p.id}
            path={"/blog/" + p.id}
            element={<BlogPost language={lang} post={p.id} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
