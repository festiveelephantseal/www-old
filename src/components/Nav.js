const Nav = ({ language, onClick }) => {
  return (
    <nav className="nav">
      <ul>
        <a href="https://github.com/festiveelephantseal">
          <li>Github</li>
        </a>

        <a href="https://www.duolingo.com/profile/festiveseal">
          <li>Duolingo</li>
        </a>

        <a href="https://www.geoguessr.com/user/5e9663646ea51049ec628b9d">
          <li>Geoguessr</li>
        </a>

        <button className="lang" onClick={onClick}>
          <li>{language}</li>{" "}
        </button>
      </ul>
    </nav>
  );
};

export default Nav;
