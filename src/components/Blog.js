import posts from "../posts.json";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Blog = () => {
  return (
    <div className="blog">
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

      <Footer isBlog={true} />
    </div>
  );
};

export default Blog;
