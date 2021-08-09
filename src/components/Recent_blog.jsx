import React from "react";
import Blog from "./Blog";

const Recent_blog = () => {
  return (
    <section id="recent_blog">
      <div className="containers pb-0">
        <h1>Recent Blogs</h1>
        <div className="d-grid">
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
        <a href="#" className="tap">
          See all blogs
        </a>
      </div>
    </section>
  );
};

export default Recent_blog;
