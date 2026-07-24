import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Account created successfully!");

    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #2563EB, #60A5FA)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "420px",
          background: "#ffffff",
          borderRadius: "20px",
          padding: "35px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "60px" }}>🎧</div>

          <h1
            style={{
              color: "#2563EB",
              marginBottom: "10px",
            }}
          >
            Create Account
          </h1>

          <p style={{ color: "#666" }}>
            Join Smart Hearing Protection System
          </p>
        </div>

        <div style={{ marginTop: "25px" }}>
          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <label>Confirm Password</label>

          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={handleSignup}
            style={{
              width: "100%",
              padding: "14px",
              marginTop: "20px",
              background: "#2563EB",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              fontSize: "17px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Create Account
          </button>

          <button
            onClick={() => navigate("/login")}
            style={{
              width: "100%",
              padding: "14px",
              marginTop: "12px",
              background: "#16A34A",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Back to Login
          </button>
        </div>
      </div>
      
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "8px",
  marginBottom: "16px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "15px",
  boxSizing: "border-box" as const,
};

export default Signup;