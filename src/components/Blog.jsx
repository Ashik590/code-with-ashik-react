import React, { useState } from "react";
import like_no from "../img/like_no.svg";
import like_yes from "../img/like_yes.svg";

const Blog = () => {
  const [like, setLike] = useState(false);

  const doLike = (e) => {
    setLike(!like);
  };
  return (
    <>
      <div className="blog">
        <h3>This is the title of the blog and its the first blog</h3>
        <div className="blog_middle">
          <div className="blog_photo"></div>
          <p className="blog_des">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            asperiores alias tempora laborum a explicabo error. Eum, quis fugit
            eos aut
          </p>
        </div>
        <div className="blog_bottom">
          <span className="d-flex align-items-center">
            <span className="me-2 d-inline-block like_count">0</span>
            <img
              onClick={doLike}
              src={like ? like_yes : like_no}
              alt="like"
              title="Like"
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Blog;
