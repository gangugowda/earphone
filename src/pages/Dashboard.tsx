import { useEffect, useState } from "react";
import BottomNav from "../components/BottomNav";
import MobileLayout from "../components/MobileLayout";

import {
  ShieldCheck,
  BluetoothConnected,
  Mic,
  Bot,
  Bell,
  X,
} from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface DashboardData {
  hearing_score: number;
  hearing_status: string;
  listening_time: string;
  average_volume: string;
  alerts_today: number;
  bluetooth: string;
  ai_status: string;
}

interface Notification {
  id: number;
  icon: string;
  title: string;
  message: string;
}

function Dashboard() {
  const [showNotifications, setShowNotifications] = useState(false);

  const [dashboardData, setDashboardData] =
    useState<DashboardData>({
      hearing_score: 0,
      hearing_status: "",
      listening_time: "",
      average_volume: "",
      alerts_today: 0,
      bluetooth: "",
      ai_status: "",
    });

  const notifications: Notification[] = [
    {
      id: 1,
      icon: "⚠️",
      title: "High Volume",
      message:
        "Volume exceeds the recommended safe level.",
    },
    {
      id: 2,
      icon: "⏱",
      title: "Take a Break",
      message:
        "You have been listening for over one hour.",
    },
    {
      id: 3,
      icon: "🚑",
      title: "Emergency Sound",
      message:
        "Ambulance siren detected nearby.",
    },
  ];

  const usageData = [
    { day: "Mon", hours: 1.2 },
    { day: "Tue", hours: 2.1 },
    { day: "Wed", hours: 3.4 },
    { day: "Thu", hours: 2.7 },
    { day: "Fri", hours: 4.2 },
    { day: "Sat", hours: 2.5 },
    { day: "Sun", hours: 1.8 },
  ];

  useEffect(() => {
    fetch("http://127.0.0.1:8000/dashboard/")
      .then((response) => response.json())
      .then((data) => setDashboardData(data))
      .catch(console.error);
  }, []);

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
        }}
      >

        {/* Header */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "20px",
            padding: "28px",
            marginTop: "10px",
            marginBottom: "20px",
            textAlign: "center",
            position: "relative",
            boxShadow:
              "0 8px 20px rgba(0,0,0,.30)",
          }}
        >

          <Bell
            size={28}
            color="#FACC15"
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() =>
              setShowNotifications(
                !showNotifications
              )
            }
          />

          <div
            style={{
              position: "absolute",
              top: "14px",
              right: "14px",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: "#EF4444",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "11px",
              fontWeight: "bold",
            }}
          >
            {notifications.length}
          </div>

          <h1
            style={{
              color: "#93C5FD",
              marginBottom: "10px",
              fontSize: "32px",
            }}
          >
            HearSafeAI
          </h1>

          <p
            style={{
              color: "#CBD5E1",
              margin: 0,
            }}
          >
            Smart Hearing Protection Dashboard
          </p>

        </div>

        {/* Hearing Status */}

        <div
          style={{
            background:
              "linear-gradient(135deg,#16A34A,#22C55E)",
            borderRadius: "20px",
            padding: "24px",
            color: "white",
            marginBottom: "20px",
            boxShadow:
              "0 8px 18px rgba(0,0,0,.30)",
          }}
        >

          <ShieldCheck
            size={50}
            color="white"
          />

          <h2
            style={{
              marginTop: "18px",
              marginBottom: "8px",
            }}
          >
            Hearing Status
          </h2>

          <h1
            style={{
              fontSize: "34px",
              margin: 0,
            }}
          >
            {dashboardData.hearing_status}
          </h1>

          <p
            style={{
              marginTop: "12px",
              fontSize: "16px",
            }}
          >
            Hearing Score :
            <strong>
              {" "}
              {dashboardData.hearing_score}%
            </strong>
          </p>

        </div>
                {/* Today's Analytics */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "20px",
            padding: "20px",
            marginBottom: "20px",
            boxShadow: "0 8px 18px rgba(0,0,0,.30)",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              marginBottom: "18px",
              color: "#93C5FD",
            }}
          >
            📊 Today's Analytics
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
            }}
          >
            <div
              style={{
                background: "#334155",
                borderRadius: "14px",
                padding: "15px",
                color: "white",
              }}
            >
              <h3 style={{ margin: 0, color: "#22C55E" }}>🎧</h3>

              <p
                style={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                {dashboardData.listening_time}
              </p>

              <small style={{ color: "#CBD5E1" }}>
                Listening Time
              </small>
            </div>

            <div
              style={{
                background: "#334155",
                borderRadius: "14px",
                padding: "15px",
                color: "white",
              }}
            >
              <h3 style={{ margin: 0, color: "#FACC15" }}>🔊</h3>

              <p
                style={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                {dashboardData.average_volume}
              </p>

              <small style={{ color: "#CBD5E1" }}>
                Average Volume
              </small>
            </div>

            <div
              style={{
                background: "#334155",
                borderRadius: "14px",
                padding: "15px",
                color: "white",
              }}
            >
              <h3 style={{ margin: 0, color: "#EF4444" }}>🚨</h3>

              <p
                style={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                {dashboardData.alerts_today}
              </p>

              <small style={{ color: "#CBD5E1" }}>
                Alerts Today
              </small>
            </div>

            <div
              style={{
                background: "#334155",
                borderRadius: "14px",
                padding: "15px",
                color: "white",
              }}
            >
              <h3 style={{ margin: 0, color: "#A855F7" }}>👂</h3>

              <p
                style={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                {dashboardData.hearing_score}%
              </p>

              <small style={{ color: "#CBD5E1" }}>
                Hearing Score
              </small>
            </div>
          </div>
        </div>

        {/* Weekly Analytics */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "20px",
            padding: "20px",
            marginBottom: "20px",
            boxShadow: "0 8px 18px rgba(0,0,0,.30)",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              color: "#93C5FD",
            }}
          >
            📈 Weekly Listening Analytics
          </h2>

          <div
            style={{
              width: "100%",
              height: "250px",
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={usageData}>
                <CartesianGrid stroke="#475569" strokeDasharray="3 3" />

                <XAxis
                  dataKey="day"
                  stroke="#CBD5E1"
                />

                <YAxis stroke="#CBD5E1" />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="hours"
                  stroke="#3B82F6"
                  strokeWidth={4}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div
            style={{
              background: "#334155",
              borderRadius: "14px",
              padding: "15px",
              marginTop: "18px",
              color: "white",
            }}
          >
            <p style={{ color: "#22C55E" }}>
              🟢 Safe Zone : 0 - 2 Hours
            </p>

            <p style={{ color: "#FACC15" }}>
              🟡 Moderate Zone : 2 - 4 Hours
            </p>

            <p style={{ color: "#EF4444" }}>
              🔴 Risk Zone : Above 4 Hours
            </p>
          </div>
        </div>

        {/* Quick Status */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "20px",
            padding: "20px",
            marginBottom: "20px",
            boxShadow: "0 8px 18px rgba(0,0,0,.30)",
          }}
        >
          <h2
            style={{
              color: "#93C5FD",
              marginTop: 0,
              marginBottom: "20px",
            }}
          >
            ⚡ Quick Status
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "18px",
              color: "white",
            }}
          >
            <div style={{ display: "flex", gap: "12px" }}>
              <BluetoothConnected color="#22C55E" />
              <strong>Bluetooth</strong>
            </div>

            <strong>{dashboardData.bluetooth}</strong>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "18px",
              color: "white",
            }}
          >
            <div style={{ display: "flex", gap: "12px" }}>
              <Mic color="#FACC15" />
              <strong>Detection</strong>
            </div>

            <strong>Active</strong>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
            }}
          >
            <div style={{ display: "flex", gap: "12px" }}>
              <Bot color="#A855F7" />
              <strong>AI Assistant</strong>
            </div>

            <strong>{dashboardData.ai_status}</strong>
          </div>
        </div>
                {/* Notification Panel */}

        {showNotifications && (
          <div
            style={{
              position: "fixed",
              top: "90px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "calc(100% - 40px)",
              maxWidth: "390px",
              background: "#1E293B",
              borderRadius: "20px",
              padding: "20px",
              zIndex: 1000,
              boxShadow: "0 12px 30px rgba(0,0,0,.45)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "18px",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  color: "#93C5FD",
                  fontSize: "22px",
                }}
              >
                🔔 Notifications
              </h3>

              <X
                size={24}
                color="#FFFFFF"
                style={{ cursor: "pointer" }}
                onClick={() => setShowNotifications(false)}
              />
            </div>

            {notifications.map((item) => (
              <div
                key={item.id}
                style={{
                  background: "#334155",
                  borderRadius: "16px",
                  padding: "14px",
                  marginBottom: "14px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <span style={{ fontSize: "24px" }}>
                    {item.icon}
                  </span>

                  <strong
                    style={{
                      color: "#FFFFFF",
                    }}
                  >
                    {item.title}
                  </strong>
                </div>

                <p
                  style={{
                    margin: "10px 0 0 36px",
                    color: "#CBD5E1",
                    lineHeight: "1.5",
                    fontSize: "14px",
                  }}
                >
                  {item.message}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>

      <BottomNav />

    </MobileLayout>
  );
}

export default Dashboard;