import Nav from "./Nav";
import translations from "../translations.json";

const Info = ({ language, onClick }) => {
  return (
    <div className="info">
      <Nav language={language} onClick={onClick} />
      <h1 style={{ color: "#e1e3e4", paddingLeft: 40 }}>
        {language === "en" ? translations.en.intro : translations.fr.intro}
      </h1>

      <h2 style={{ color: "#e1e3e4", paddingLeft: 40 }}>Info</h2>

      <p style={{ color: "#e1e3e4", paddingLeft: 40 }}>
        {language === "en" ? translations.en.about : translations.fr.about}
      </p>

      <h2 style={{ color: "#e1e3e4", paddingLeft: 40 }}>
        {language === "en"
          ? translations.en.projects.title
          : translations.fr.projects.title}
      </h2>

      {language === "en"
        ? translations.en.projects.proj.map((p) => (
            <>
              <a href={p.link} className="project-link">
                <h3 style={{ color: "#ff6d7e", paddingLeft: 40 }}>{p.name}</h3>
              </a>
              <p style={{ color: "#e1e3e4", paddingLeft: 40 }}>
                {p.description}
              </p>
            </>
          ))
        : translations.fr.projects.proj.map((p) => (
            <>
              <a href={p.link} className="project-link">
                <h3 style={{ color: "#ff6d7e", paddingLeft: 40 }}>{p.name}</h3>
              </a>
              <p style={{ color: "#e1e3e4", paddingLeft: 40 }}>
                {p.description}
              </p>
            </>
          ))}

      <h2 style={{ color: "#e1e3e4", paddingLeft: 40 }}>Contributions</h2>

      {language === "en"
        ? translations.en.contributions.map((c) => (
            <>
              {" "}
              <a href={c.link} className="project-link">
                <h3 style={{ color: "#ff6d7e", paddingLeft: 40 }}>{c.name}</h3>
              </a>
              <p style={{ color: "#e1e3e4", paddingLeft: 40 }}>
                {c.description}
              </p>
            </>
          ))
        : translations.fr.contributions.map((c) => (
            <>
              {" "}
              <a href={c.link} className="project-link">
                <h3 style={{ color: "#ff6d7e", paddingLeft: 40 }}>{c.name}</h3>
              </a>
              <p style={{ color: "#e1e3e4", paddingLeft: 40 }}>
                {c.description}
              </p>
            </>
          ))}
    </div>
  );
};

export default Info;
