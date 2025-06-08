import React from "react";
import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    title: "Building Full Stack Applications with MERN",
    date: "June 2025",
    content:
      "Recently, I built a MERN stack project where users can perform CRUD operations with a MongoDB backend and a React frontend. I also integrated authentication and dynamic routing.",
  },
  {
    id: 2,
    title: "Learning MySQL with Node.js",
    date: "May 2025",
    content:
      "I explored how to connect MySQL with Node.js for backend APIs. It helped me understand relational databases better and how to structure schemas efficiently.",
  },
  {
    id: 3,
    title: "React Pagination and Filtering",
    date: "April 2025",
    content:
      "I learned how to implement pagination, search, and filter functionalities in a React project, making large data sets more user-friendly.",
  },
  {
    id: 4,
    title: "Salesforce Virtual Internship Experience",
    date: "March 2025",
    content:
      "I completed a Salesforce Developer virtual internship, gaining hands-on experience with Apex, LWC, and automating processes using Flows and Process Builder.",
  },
];

const Blog = () => {
  return (
    <section className="blog container" id="blog">
      <h2 className="section__title">My Learning Blog</h2>
      <div className="blog__container">
        {blogPosts.map((post) => (
          <div className="blog__card" key={post.id}>
            <h3 className="blog__title">{post.title}</h3>
            <span className="blog__date">{post.date}</span>
            <p className="blog__content">{post.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
