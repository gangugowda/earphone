import { useEffect, useState } from "react";
import {
  Calendar,
  Train,
  Volume2,
} from "lucide-react";

import BottomNav from "../components/BottomNav";
import MobileLayout from "../components/MobileLayout";

interface DetectionItem {
  id: number;
  sound: string;
  time: string;
  date: string;
  status: string;
  color: string;
}

function DetectionHistory() {

  const [detections, setDetections] =
    useState<DetectionItem[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/detection/history")
      .then((res) => res.json())
      .then((data) => setDetections(data))
      .catch((err) => console.error(err));
  }, []);

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
            background: "#1E293B",
            borderRadius: "20px",
            padding: "28px",
            marginTop: "10px",
            marginBottom: "22px",
            textAlign: "center",
            boxShadow: "0 8px 18px rgba(0,0,0,.30)",
          }}
        >

          <Volume2
            size={65}
            color="#A855F7"
          />

          <h1
            style={{
              color: "#93C5FD",
              marginTop: "15px",
              marginBottom: "8px",
              fontSize: "30px",
            }}
          >
            Detection History
          </h1>

          <p
            style={{
              color: "#CBD5E1",
              margin: 0,
              lineHeight: "26px",
            }}
          >
            Review all detected sounds,
            emergency alerts and AI actions.
          </p>

        </div>

        {/* Summary Card */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "18px",
            padding: "18px",
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
            📊 Detection Summary
          </h2>

          <p
            style={{
              color: "#CBD5E1",
              lineHeight: "28px",
              marginBottom: 0,
            }}
          >
            Total Records :
            <strong
              style={{
                color: "#22C55E",
              }}
            >
              {" "}
              {detections.length}
            </strong>
          </p>

        </div>

        {/* Detection Cards */}

        {detections.map((item) => (
                    <div
            key={item.id}
            style={{
              background: "#1E293B",
              borderRadius: "18px",
              padding: "18px",
              marginBottom: "18px",
              boxShadow: "0 8px 18px rgba(0,0,0,.25)",
              borderLeft: `6px solid ${item.color}`,
            }}
          >
            <h2
              style={{
                color: "#93C5FD",
                marginTop: 0,
                marginBottom: "14px",
                fontSize: "22px",
              }}
            >
              {item.sound}
            </h2>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#CBD5E1",
                marginBottom: "12px",
              }}
            >
              <Calendar
                size={18}
                color="#22C55E"
              />

              <span>
                {item.date} • {item.time}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "15px",
              }}
            >
              <Train
                size={18}
                color={item.color}
              />

              <strong
                style={{
                  color: item.color,
                }}
              >
                {item.status}
              </strong>
            </div>

            <div
              style={{
                background: "#334155",
                borderRadius: "12px",
                padding: "14px",
                color: "#CBD5E1",
                lineHeight: "26px",
              }}
            >
              AI analyzed this environmental sound,
              classified it successfully,
              and performed the appropriate
              hearing safety action to protect
              the user from potential risks.
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "16px",
                gap: "12px",
              }}
            >
              <div
                style={{
                  flex: 1,
                  background: "#334155",
                  borderRadius: "12px",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "#94A3B8",
                    fontSize: "13px",
                  }}
                >
                  Detection
                </p>

                <strong
                  style={{
                    color: "#22C55E",
                  }}
                >
                  Success
                </strong>
              </div>

              <div
                style={{
                  flex: 1,
                  background: "#334155",
                  borderRadius: "12px",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "#94A3B8",
                    fontSize: "13px",
                  }}
                >
                  Confidence
                </p>

                <strong
                  style={{
                    color: "#60A5FA",
                  }}
                >
                  98%
                </strong>
              </div>
            </div>

          </div>
        ))}
                {/* No Records Message */}

        {detections.length === 0 && (
          <div
            style={{
              background: "#1E293B",
              borderRadius: "18px",
              padding: "35px",
              textAlign: "center",
              color: "#CBD5E1",
              boxShadow: "0 8px 18px rgba(0,0,0,.25)",
            }}
          >
            <Volume2
              size={60}
              color="#64748B"
            />

            <h2
              style={{
                color: "#93C5FD",
                marginTop: "15px",
              }}
            >
              No Detection Records
            </h2>

            <p
              style={{
                lineHeight: "28px",
              }}
            >
              No sound detections are available yet.
              Once HearSafeAI detects sounds,
              they will appear here automatically.
            </p>
          </div>
        )}

        {/* Footer */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "18px",
            padding: "18px",
            marginTop: "10px",
            textAlign: "center",
            boxShadow: "0 8px 18px rgba(0,0,0,.25)",
          }}
        >
          <h3
            style={{
              color: "#93C5FD",
              marginTop: 0,
            }}
          >
            🤖 AI Monitoring
          </h3>

          <p
            style={{
              color: "#CBD5E1",
              lineHeight: "28px",
              marginBottom: 0,
            }}
          >
            HearSafeAI continuously monitors
            surrounding sounds and stores every
            important detection in this history
            to help improve hearing safety and
            provide detailed insights.
          </p>
        </div>

      </div>

      <BottomNav />

    </MobileLayout>
  );
}

export default DetectionHistory;