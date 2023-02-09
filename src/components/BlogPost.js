import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import Footer from "./Footer";
import Nav from "./Nav";

const BlogPost = ({ post, language }) => {
  const [p, setP] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const data = await axios(`http://localhost:5000/posts/${post}`);

      return data.data;
    };

    const getPost = async () => {
      const postData = await fetchPost();
      setP(postData);
    };

    getPost();
  }, [post]);

  return (
    <div className="blog-post">
      <Nav notHome={true} language={language} />
      <div>
        <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
          {p.content}
        </ReactMarkdown>
      </div>

      <Footer isBlog={false} />
    </div>
  );
};

export default BlogPost;
