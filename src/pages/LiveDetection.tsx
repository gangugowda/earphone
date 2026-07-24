import { useEffect, useState } from "react";

import BottomNav from "../components/BottomNav";
import MobileLayout from "../components/MobileLayout";

import {
  Mic,
  Volume2,
  ShieldAlert,
  Activity,
  AlertTriangle,
} from "lucide-react";

interface DetectionData {
  sound: string;
  confidence: number;
  emergency: boolean;
  risk_level: string;
  recommendation: string;

  microphone?: string;
  noise_level?: number;
  sounds_processed?: number;
  accuracy?: number;
  protection_action?: string;
}

function LiveDetection() {
  const [detection, setDetection] = useState<DetectionData>({
    sound: "Listening...",
    confidence: 0,
    emergency: false,
    risk_level: "SAFE",
    recommendation: "Monitoring environment...",

    microphone: "Active",
    noise_level: 0,
    sounds_processed: 0,
    accuracy: 0,
    protection_action: "No action required",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDetection = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/live-detection"
        );

        if (!response.ok) {
          throw new Error("Unable to fetch live detection");
        }

        const data = await response.json();

        setDetection({
          sound: data.sound ?? "Listening...",
          confidence: data.confidence ?? 0,
          emergency: data.emergency ?? false,
          risk_level: data.risk_level ?? "SAFE",
          recommendation:
            data.recommendation ?? "Monitoring environment...",

          microphone: data.microphone ?? "Active",
          noise_level: data.noise_level ?? 0,
          sounds_processed: data.sounds_processed ?? 0,
          accuracy: data.accuracy ?? 0,
          protection_action:
            data.protection_action ?? "No action required",
        });

        setLoading(false);
      } catch (error) {
        console.error("Live Detection Error:", error);

        setLoading(false);
      }
    };

    getDetection();

    const timer = setInterval(getDetection, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <MobileLayout>
      <div
        style={{
          minHeight: "calc(100vh - 160px)",
          background: "#0F172A",
          color: "white",
          borderRadius: "24px",
          padding: "20px",
        }}
      >
              {/* HEADER */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              width: "85px",
              height: "85px",
              borderRadius: "50%",
              background: "#2563EB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
              boxShadow: "0 0 30px rgba(37,99,235,.5)",
            }}
          >
            <Mic size={45} />
          </div>

          <h1
            style={{
              color: "#93C5FD",
              fontSize: "28px",
              marginTop: "18px",
            }}
          >
            Live Sound Detection
          </h1>

          <p style={{ color: "#CBD5E1" }}>
            AI continuously monitors surrounding sounds
          </p>
        </div>

        {/* LISTENING CARD */}

        <div
          style={{
            background: "#1E293B",
            padding: "25px",
            borderRadius: "22px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              height: "95px",
              width: "95px",
              borderRadius: "50%",
              background: "#2563EB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <Activity size={50} />
          </div>

          <h2>
            {loading ? "Connecting..." : "Listening..."}
          </h2>

          <p
            style={{
              color: "#22C55E",
              fontWeight: "bold",
            }}
          >
            🟢 {detection.microphone}
          </p>
        </div>

        {/* DETECTED SOUND */}

        <div
          style={{
            background: "#1E293B",
            padding: "22px",
            borderRadius: "22px",
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              color: "#93C5FD",
              marginTop: 0,
            }}
          >
            Detected Sound
          </h2>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <div
              style={{
                height: "70px",
                width: "70px",
                borderRadius: "50%",
                background: detection.emergency
                  ? "#DC2626"
                  : "#16A34A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "34px",
              }}
            >
              {detection.emergency ? "🚨" : "🎵"}
            </div>

            <div style={{ flex: 1 }}>
              <h2
                style={{
                  margin: 0,
                  fontSize: "22px",
                }}
              >
                {detection.sound}
              </h2>

              <p style={{ color: "#CBD5E1" }}>
                AI Confidence:
                <strong> {detection.confidence.toFixed(1)}%</strong>
              </p>

              <progress
                value={detection.confidence}
                max={100}
                style={{
                  width: "100%",
                  height: "12px",
                }}
              />
            </div>
          </div>
        </div>

        {/* LIVE STATUS */}

        <div
          style={{
            background: "#1E293B",
            padding: "22px",
            borderRadius: "22px",
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              color: "#93C5FD",
              marginTop: 0,
            }}
          >
            Live Detection Status
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
            }}
          >
            <div
              style={{
                background: "#0F172A",
                padding: "18px",
                borderRadius: "16px",
                textAlign: "center",
              }}
            >
              <Mic size={35} color="#22C55E" />

              <h3 style={{ color: "#22C55E" }}>
                {detection.microphone}
              </h3>

              <p style={{ color: "#CBD5E1", margin: 0 }}>
                Microphone
              </p>
            </div>

            <div
              style={{
                background: "#0F172A",
                padding: "18px",
                borderRadius: "16px",
                textAlign: "center",
              }}
            >
              <Volume2 size={35} color="#60A5FA" />

              <h3 style={{ color: "#60A5FA" }}>
                {detection.noise_level} dB
              </h3>

              <p style={{ color: "#CBD5E1", margin: 0 }}>
                Noise Level
              </p>
            </div>

            <div
              style={{
                background: "#0F172A",
                padding: "18px",
                borderRadius: "16px",
                textAlign: "center",
              }}
            >
              <ShieldAlert
                size={35}
                color={
                  detection.risk_level === "DANGER"
                    ? "#EF4444"
                    : "#22C55E"
                }
              />

              <h3
                style={{
                  color:
                    detection.risk_level === "DANGER"
                      ? "#EF4444"
                      : "#22C55E",
                }}
              >
                {detection.risk_level}
              </h3>

              <p style={{ color: "#CBD5E1", margin: 0 }}>
                Risk Level
              </p>
            </div>

            <div
              style={{
                background: "#0F172A",
                padding: "18px",
                borderRadius: "16px",
                textAlign: "center",
              }}
            >
              <Activity size={35} color="#FACC15" />

              <h3 style={{ color: "#FACC15" }}>
                {detection.accuracy}%
              </h3>

              <p style={{ color: "#CBD5E1", margin: 0 }}>
                AI Accuracy
              </p>
            </div>
          </div>
        </div>

        {/* EMERGENCY CARD */}

        <div
          style={{
            background: detection.emergency ? "#3F1D1D" : "#123524",
            border: detection.emergency
              ? "2px solid #DC2626"
              : "2px solid #22C55E",
            borderRadius: "22px",
            padding: "22px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {detection.emergency ? (
              <AlertTriangle size={35} color="#EF4444" />
            ) : (
              <ShieldAlert size={35} color="#22C55E" />
            )}

            <h2
              style={{
                color: detection.emergency
                  ? "#FCA5A5"
                  : "#BBF7D0",
              }}
            >
              {detection.emergency
                ? "Emergency Detected"
                : "Environment Safe"}
            </h2>
          </div>

          <p style={{ lineHeight: "28px" }}>
            {detection.recommendation}
          </p>
        </div>
                {/* QUICK ACTIONS */}

        <div
          style={{
            display: "grid",
            gap: "15px",
            marginBottom: "20px",
          }}
        >
          <button
            style={{
              background: "#2563EB",
              color: "white",
              border: "none",
              padding: "16px",
              borderRadius: "14px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            🔉 Reduce Earbud Volume
          </button>

          <button
            style={{
              background: "#22C55E",
              color: "white",
              border: "none",
              padding: "16px",
              borderRadius: "14px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            🔊 Play Voice Alert
          </button>

          <button
            style={{
              background: "#FACC15",
              color: "#111827",
              border: "none",
              padding: "16px",
              borderRadius: "14px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            📳 Vibrate Device
          </button>

          <button
            style={{
              background: "#DC2626",
              color: "white",
              border: "none",
              padding: "16px",
              borderRadius: "14px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            📱 Send Notification
          </button>
        </div>

        {/* AI RECOMMENDATION */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "22px",
            padding: "22px",
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              color: "#A78BFA",
              marginTop: 0,
            }}
          >
            🤖 AI Recommendation
          </h2>

          <div
            style={{
              background: "#0F172A",
              padding: "16px",
              borderRadius: "14px",
              borderLeft: "5px solid #A855F7",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#E2E8F0",
                lineHeight: "28px",
              }}
            >
              {detection.recommendation}
            </p>
          </div>
        </div>

        {/* TODAY STATISTICS */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "22px",
            padding: "22px",
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              color: "#93C5FD",
              marginTop: 0,
            }}
          >
            📊 Today's Statistics
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
            }}
          >
            <div
              style={{
                background: "#0F172A",
                padding: "18px",
                borderRadius: "16px",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  color: "#22C55E",
                  fontSize: "32px",
                  margin: 0,
                }}
              >
                {detection.sounds_processed}
              </h2>

              <p style={{ color: "#CBD5E1" }}>
                Sounds Processed
              </p>
            </div>

            <div
              style={{
                background: "#0F172A",
                padding: "18px",
                borderRadius: "16px",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  color: "#60A5FA",
                  fontSize: "32px",
                  margin: 0,
                }}
              >
                {detection.accuracy}%
              </h2>

              <p style={{ color: "#CBD5E1" }}>
                Detection Accuracy
              </p>
            </div>
          </div>

          {/* DETAILS */}

          <div
            style={{
              marginTop: "20px",
              background: "#334155",
              borderRadius: "14px",
              padding: "16px",
            }}
          >
            <p
              style={{
                color: "#CBD5E1",
                lineHeight: "28px",
              }}
            >
              <strong style={{ color: "#93C5FD" }}>
                Current Sound:
              </strong>{" "}
              {detection.sound}
            </p>

            <p
              style={{
                color: "#CBD5E1",
                lineHeight: "28px",
              }}
            >
              <strong style={{ color: "#22C55E" }}>
                Microphone:
              </strong>{" "}
              {detection.microphone}
            </p>

            <p
              style={{
                color: "#CBD5E1",
                lineHeight: "28px",
              }}
            >
              <strong style={{ color: "#FACC15" }}>
                Confidence:
              </strong>{" "}
              {detection.confidence.toFixed(1)}%
            </p>

            <p
              style={{
                color: "#CBD5E1",
                lineHeight: "28px",
              }}
            >
              <strong style={{ color: "#EF4444" }}>
                Risk Level:
              </strong>{" "}
              {detection.risk_level}
            </p>
          </div>
        </div>
      </div>

      <BottomNav />
    </MobileLayout>
  );
}

export default LiveDetection;