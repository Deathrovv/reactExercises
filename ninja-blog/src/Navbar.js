const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>El Blog de Ninjas!</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          //   style={{
          //     color: "white",
          //     backgroundColor: "#f1356d",
          //     borderRadius: "8px",
          //   }}
        >
          New Blog
        </a>
        <a href="/about">About Me</a>
      </div>
    </nav>
  );
};

export default Navbar;
