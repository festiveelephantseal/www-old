import { Link } from "react-router-dom";

const Footer = ({ isBlog }) => {
  let BlogButton;
  if (isBlog) {
    BlogButton = null;
  } else {
    BlogButton = (
      <Link to="/blog">
        <li>Blog</li>
      </Link>
    );
  }

  return (
    <nav className="foot">
      <ul>
        <Link to="/">
          <li>Return Home</li>
        </Link>
        {BlogButton}
      </ul>
    </nav>
  );
};

export default Footer;
