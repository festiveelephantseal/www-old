import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav className="foot">
      <ul>
        <Link to="/">
          <li>Return Home</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Footer;
