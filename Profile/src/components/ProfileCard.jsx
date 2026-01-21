const ProfileCard = ({ name, role, skills, image }) => {
  return (
    <div
      style={{
        width: "220px",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        textAlign: "center",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.boxShadow = "0 10px 15px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "10px",
        }}
      />
      <h3>{name}</h3>
      <p style={{ fontStyle: "italic", color: "#555" }}>{role}</p>

      {/* Conditional Badge */}
      {skills.length > 3 && (
        <span
          style={{
            display: "inline-block",
            margin: "5px 0",
            padding: "2px 6px",
            backgroundColor: "#ffd700",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          ⭐
        </span>
      )}

      <div style={{ marginTop: "10px" }}>
        <button
          style={{
            padding: "8px 12px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={() => alert(`Viewing profile of ${name}`)}
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
