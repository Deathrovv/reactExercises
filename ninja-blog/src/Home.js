// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {/* <button onClick={() => setName("Beowulf")}>Change Name</button> */}
      {/* <p>{name}</p> */}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "Aro")}
          title="Aro's Blogs"
        />
      )}
    </div>
  );
};

export default Home;
