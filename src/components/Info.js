import Nav from "./Nav";
import translations from "../translations.json";
import PropTypes from "prop-types";

const Info = ({ language, onClick }) => {
  const whiteStyle = {
    color: "#e1e3e4",
    paddingLeft: 40,
  };

  const pinkStyle = {
    color: "#ff6d7e",
    paddingLeft: 40,
  };

  return (
    <div className="info">
      <Nav language={language} onClick={onClick} />
      <h1 style={whiteStyle}>
        {language === "en" ? translations.en.intro : translations.fr.intro}
      </h1>

      <h2 style={whiteStyle}>Info</h2>

      <p style={whiteStyle}>
        {language === "en" ? translations.en.about : translations.fr.about}
      </p>

      <h2 style={whiteStyle}>
        {language === "en"
          ? translations.en.projects.title
          : translations.fr.projects.title}
      </h2>

      {language === "en"
        ? translations.en.projects.proj.map((p) => (
            <div key={p.name}>
              <a href={p.link} className="project-link">
                <h3 style={pinkStyle}>{p.name}</h3>
              </a>
              <p style={whiteStyle}>{p.description}</p>
            </div>
          ))
        : translations.fr.projects.proj.map((p) => (
            <div key={p.name}>
              <a href={p.link} className="project-link">
                <h3 style={pinkStyle}>{p.name}</h3>
              </a>
              <p style={whiteStyle}>{p.description}</p>
            </div>
          ))}

      <h2 style={whiteStyle}>Contributions</h2>

      {language === "en"
        ? translations.en.contributions.map((c) => (
            <div key={c.name}>
              {" "}
              <a href={c.link} className="project-link">
                <h3 style={pinkStyle}>{c.name}</h3>
              </a>
              <p style={whiteStyle}>{c.description}</p>
            </div>
          ))
        : translations.fr.contributions.map((c) => (
            <div key={c.name}>
              {" "}
              <a href={c.link} className="project-link">
                <h3 style={pinkStyle}>{c.name}</h3>
              </a>
              <p style={whiteStyle}>{c.description}</p>
            </div>
          ))}
    </div>
  );
};

export default Info;

Info.propTypes = {
  language: PropTypes.string,
  onClick: PropTypes.func,
};
