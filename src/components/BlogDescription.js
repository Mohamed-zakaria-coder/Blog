import React from "react";
import '../blog.css/blog-description.css'
const BlogDescription = (props) => {
  return (
    <div className="blog-container">
      {props.blogData.map((blog) => {
        return (
          <div className="blog" key={blog.id}>
            <div className="img-parent">
              <img src={blog.img} alt={blog.description} />
            </div>
            <p>{blog.description}</p>
            <h2>{blog.id}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default BlogDescription;
