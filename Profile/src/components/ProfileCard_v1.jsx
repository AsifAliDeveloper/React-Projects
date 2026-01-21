function ProfileCard({ name, role, skills, image }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        width: "250px",
        textAlign: "center",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100px", borderRadius: "50%" }}
      />

      <h2>{name}</h2>
      <p>{role}</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileCard;
