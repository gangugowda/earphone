import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Headphones } from "lucide-react";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#2563EB,#1E40AF)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Headphones size={90} />

        <h1
          style={{
            marginTop: "25px",
            marginBottom: "10px",
            fontSize: "38px",
          }}
        >
          HearSafeAI
        </h1>

        <p
          style={{
            fontSize: "18px",
            opacity: 0.9,
          }}
        >
          Smart Hearing Protection System
        </p>
      </div>
    </div>
  );
}

export default Splash;