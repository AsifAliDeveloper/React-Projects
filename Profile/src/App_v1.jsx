import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
      }}
    >
      <ProfileCard
        name="Asif Ali"
        role="Frontend Developer"
        skills={["React", "JavaScript", "CSS"]}
        image="https://i.pravatar.cc/150?img=3"
      />

      <ProfileCard
        name="John Doe"
        role="UI Designer"
        skills={["Figma", "UI/UX", "Prototyping"]}
        image="https://i.pravatar.cc/150?img=5"
      />
    </div>
  );
}

export default App;
