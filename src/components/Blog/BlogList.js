import React from 'react';
import './BlogList.css'; // Assuming CSS file is in the same directory
import BlogData from './BlogData.json'; // Assuming JSON file is in the same directory

const BlogList = () => {
  return (
    <div className="container grid-container">
      {BlogData.map((blog, index) => (
        <a href={`/blog/${blog.id}`} key={index} className="grid-item bloglist-tile">
          <p className='bloglist-date'>{blog.date}</p>
          <h3 className='bloglist-title'>{blog.title}</h3>
          <p className='bloglist-description'>{blog.description}</p>
          <p className='bloglist-author'>{blog.author}</p>
        </a>
      ))}
    </div>
  );
};

export default BlogList;
