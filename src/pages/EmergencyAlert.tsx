import BottomNav from "../components/BottomNav";
import MobileLayout from "../components/MobileLayout";

import {
  Ambulance,
  Volume2,
  Bell,
  Smartphone,
  AlertTriangle,
} from "lucide-react";

function EmergencyAlert() {
  return (
    <MobileLayout>
      <div
        style={{
          minHeight: "calc(100vh - 160px)",
          background: "#0F172A",
          borderRadius: "24px",
          padding: "22px",
          paddingBottom: "100px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Header */}

        <div
          style={{
            background: "#DC2626",
            borderRadius: "20px",
            padding: "25px",
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "22px",
            boxShadow: "0 8px 18px rgba(0,0,0,.35)",
          }}
        >
          <Ambulance
            size={70}
            color="white"
          />

          <h1
            style={{
              color: "white",
              marginTop: "15px",
              marginBottom: "8px",
            }}
          >
            Emergency Alert
          </h1>

          <p
            style={{
              color: "#FEE2E2",
              margin: 0,
            }}
          >
            HearSafeAI has detected an emergency sound.
          </p>
        </div>

        {/* Emergency Card */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "20px",
            padding: "25px",
            textAlign: "center",
            marginBottom: "20px",
            boxShadow: "0 8px 18px rgba(0,0,0,.30)",
          }}
        >
          <div
            style={{
              fontSize: "70px",
            }}
          >
            🚑
          </div>

          <h2
            style={{
              color: "#EF4444",
              marginTop: "15px",
            }}
          >
            Ambulance Detected
          </h2>

          <p
            style={{
              color: "#CBD5E1",
              lineHeight: "28px",
              marginTop: "15px",
            }}
          >
            An ambulance siren has been detected nearby.
            Reduce your headphone volume immediately
            and safely give way to the emergency vehicle.
          </p>
        </div>

        {/* Alert Information */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "18px",
            padding: "20px",
            marginBottom: "20px",
            boxShadow: "0 8px 18px rgba(0,0,0,.25)",
          }}
        >
          <h2
            style={{
              color: "#93C5FD",
              marginTop: 0,
            }}
          >
            Alert Information
          </h2>

          <div
            style={{
              background: "#334155",
              padding: "15px",
              borderRadius: "14px",
              color: "white",
              lineHeight: "32px",
            }}
          >
            <p>
              <strong>Detected Sound:</strong> Ambulance Siren
            </p>

            <p>
              <strong>Confidence:</strong>
              <span style={{ color: "#22C55E" }}>
                {" "}
                98%
              </span>
            </p>

            <p>
              <strong>Status:</strong>
              <span style={{ color: "#EF4444" }}>
                {" "}
                Emergency Nearby
              </span>
            </p>

            <p>
              <strong>AI Response:</strong>
              <span style={{ color: "#A855F7" }}>
                {" "}
                Active
              </span>
            </p>
          </div>
        </div>

        {/* Safety Tips */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "18px",
            padding: "18px",
            marginBottom: "20px",
            color: "#CBD5E1",
            boxShadow: "0 8px 18px rgba(0,0,0,.25)",
          }}
        >
          <h3
            style={{
              color: "#93C5FD",
              marginTop: 0,
            }}
          >
            <AlertTriangle
              size={20}
            />{" "}
            Safety Tips
          </h3>

          <p>• Reduce your headphone volume.</p>

          <p>• Stay aware of your surroundings.</p>

          <p>• Move safely to the side if required.</p>

          <p>• Allow emergency vehicles to pass.</p>
        </div>

        {/* Action Buttons */}

        <div
          style={{
            display: "grid",
            gap: "14px",
          }}
        >
          <button
            style={{
              padding: "15px",
              border: "none",
              borderRadius: "14px",
              background: "#2563EB",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            <Volume2 size={18} /> Reduce Volume
          </button>

          <button
            style={{
              padding: "15px",
              border: "none",
              borderRadius: "14px",
              background: "#22C55E",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            🔊 Play Voice Alert
          </button>

          <button
            style={{
              padding: "15px",
              border: "none",
              borderRadius: "14px",
              background: "#FACC15",
              color: "#111827",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            📳 Vibrate Device
          </button>

          <button
            style={{
              padding: "15px",
              border: "none",
              borderRadius: "14px",
              background: "#A855F7",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            <Bell size={18} /> Send Notification
          </button>

          <button
            style={{
              padding: "15px",
              border: "none",
              borderRadius: "14px",
              background: "#EF4444",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            <Smartphone size={18} /> Emergency Mode
          </button>
        </div>
      </div>

      <BottomNav />
    </MobileLayout>
  );
}

export default EmergencyAlert;