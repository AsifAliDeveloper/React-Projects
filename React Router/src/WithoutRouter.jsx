import { useState } from "react";

function WithoutRouter() {
  const [page, setPage] = useState("home"); // manage current page manually

  return (
    <div>
      <nav>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
        <button onClick={() => setPage("product")}>Product</button>
        <button onClick={() => setPage("contact")}>Contact</button>
      </nav>

      <hr />

      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "product" && <Product />}
      {page === "contact" && <Contact />}
    </div>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Product() {
  return <h1>Product Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

export default WithoutRouter;
