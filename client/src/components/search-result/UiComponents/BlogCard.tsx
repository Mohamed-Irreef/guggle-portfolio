import React from 'react';
const BlogCard = ({ list }) => {
  return (
    <div className="blog-card">
      <div className="blog-nav">
        <div className="blog-nav-logo">
          <img src={list.titleLogo} alt="" />
        </div>
        <p className="blog-nav-title">{list.navTitle}</p>
      </div>
      {/* <a href="" className='anchor'><div className="blog-heading">{list.heading}</div></a> */}
      <div className="blog-heading">{list.heading}</div>
      <div className="blog-card-main">
        <div className="blog-card-para">
          <p>{list.para}</p>

          <p className="blog-card-date">{list.date}</p>
        </div>
        <div className="blog-post-image">
          <img src={list.postImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
