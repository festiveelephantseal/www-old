import posts from "../posts.json";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

const Blog = ({ language }) => {
  return (
    <div className="blog">
      <Nav notHome={true} language={language} />

      <ul>
        {posts.posts.map((p) => (
          <Link to={"/blog/" + p.id}>
            <div className="blog-entry">
              <li>
                <h2>{p.title} </h2>
                <p>{p.date}</p>
              </li>
            </div>
          </Link>
        ))}
      </ul>

      <Footer />
    </div>
  );
};

export default Blog;
