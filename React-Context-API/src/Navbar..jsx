import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
    <>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>My App</h1>
        <ThemeButton />
      </nav>
    </>
  );
};

export default Navbar;
