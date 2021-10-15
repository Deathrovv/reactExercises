import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState("Fafnir");

  //   const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(newBlogs);
  //   };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
    console.log("useEffect ran");
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      <button onClick={() => setName("Beowulf")}>Change Name</button>
      <p>{name}</p>
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
