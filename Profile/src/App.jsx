import ProfileCard from "./components/ProfileCard";

const users = [
  {
    name: "Noah Anderson",
    role: "Cloud Architect",
    skills: ["AWS", "Azure", "Terraform"],
    image: "https://i.pravatar.cc/150?img=21",
  },
  {
    name: "John Doe",
    role: "UI Designer",
    skills: ["Figma", "UI/UX", "Prototyping"],
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Sara Khan",
    role: "Backend Developer",
    skills: ["Node.js", "Express", "MongoDB"],
    image: "https://i.pravatar.cc/150?img=8",
  },
  {
    name: "Aliya Ahmed",
    role: "Full Stack Developer",
    skills: ["React", "Node.js", "GraphQL"],
    image: "https://i.pravatar.cc/150?img=10",
  },
  {
    name: "Michael Smith",
    role: "DevOps Engineer",
    skills: ["AWS", "Docker", "Kubernetes"],
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Emma Johnson",
    role: "Product Manager",
    skills: ["Roadmap", "Scrum", "Agile"],
    image: "https://i.pravatar.cc/150?img=14",
  },
  {
    name: "David Lee",
    role: "Data Scientist",
    skills: ["Python", "Machine Learning", "Pandas"],
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Sophia Brown",
    role: "QA Engineer",
    skills: ["Selenium", "Jest", "Automation Testing"],
    image: "https://i.pravatar.cc/150?img=16",
  },
  {
    name: "James Wilson",
    role: "Mobile Developer",
    skills: ["Flutter", "Dart", "iOS/Android"],
    image: "https://i.pravatar.cc/150?img=17",
  },
  {
    name: "Olivia Martinez",
    role: "Graphic Designer",
    skills: ["Photoshop", "Illustrator", "Branding"],
    image: "https://i.pravatar.cc/150?img=18",
  },
  {
    name: "Liam Taylor",
    role: "Security Engineer",
    skills: ["Penetration Testing", "Networking", "Cybersecurity"],
    image: "https://i.pravatar.cc/150?img=19",
  },
  {
    name: "Ava Davis",
    role: "Content Strategist",
    skills: ["SEO", "Copywriting", "Social Media"],
    image: "https://i.pravatar.cc/150?img=20",
  },
];

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // centers horizontally
        justifyContent: "center", // centers vertically
        minHeight: "100vh", // full screen height
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Profile Card</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center", // centers the cards inside
          marginTop: "20px",
        }}
      >
        {users.map((user, index) => (
          <ProfileCard key={index} {...user} />
        ))}
      </div>
    </div>
  );
}

export default App;
