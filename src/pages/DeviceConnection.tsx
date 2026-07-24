import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MobileLayout from "../components/MobileLayout";

import {
  BluetoothConnected,
  Headphones,
  CheckCircle,
} from "lucide-react";

function DeviceConnection() {
  const navigate = useNavigate();

  const [connected, setConnected] = useState(false);

  const connectDevice = () => {
    setConnected(true);

    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <MobileLayout>
      <div
        style={{
          minHeight: "calc(100vh - 160px)",
          background: "#0F172A",
          borderRadius: "24px",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Header */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "20px",
            padding: "25px",
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "25px",
            boxShadow: "0 8px 18px rgba(0,0,0,.30)",
          }}
        >
          <BluetoothConnected
            size={70}
            color="#3B82F6"
          />

          <h1
            style={{
              color: "#93C5FD",
              marginTop: "15px",
              marginBottom: "10px",
            }}
          >
            Connect Device
          </h1>

          <p
            style={{
              color: "#CBD5E1",
              lineHeight: "26px",
            }}
          >
            Connect your Bluetooth earphones or headphones
            to start real-time hearing protection.
          </p>
        </div>

        {/* Device Card */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "20px",
            padding: "25px",
            textAlign: "center",
            marginBottom: "25px",
            boxShadow: "0 8px 18px rgba(0,0,0,.25)",
          }}
        >
          <Headphones
            size={70}
            color="#A855F7"
          />

          <h2
            style={{
              color: "#FFFFFF",
              marginTop: "18px",
            }}
          >
            Sony WH-1000XM5
          </h2>

          <p
            style={{
              color: "#22C55E",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Ready to Connect
          </p>

          <div
            style={{
              marginTop: "18px",
              background: "#334155",
              padding: "15px",
              borderRadius: "14px",
              color: "#CBD5E1",
            }}
          >
            ✔ Bluetooth Version : 5.3

            <br />
            <br />

            ✔ Battery Available

            <br />
            <br />

            ✔ Compatible with HearSafeAI
          </div>
        </div>

        {/* Button */}

        {!connected ? (
          <button
            onClick={connectDevice}
            style={{
              width: "100%",
              padding: "16px",
              border: "none",
              borderRadius: "16px",
              background: "#2563EB",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            🔵 Connect Device
          </button>
        ) : (
          <button
            style={{
              width: "100%",
              padding: "16px",
              border: "none",
              borderRadius: "16px",
              background: "#22C55E",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <CheckCircle size={22} />

            Connected Successfully
          </button>
        )}
      </div>
    </MobileLayout>
  );
}

export default DeviceConnection;