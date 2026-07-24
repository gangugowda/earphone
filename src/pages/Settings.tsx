import { useState } from "react";
import MobileLayout from "../components/MobileLayout";
import BottomNav from "../components/BottomNav";

import {
  Settings as SettingsIcon,
  Bell,
  Volume2,
  Mic,
  Bluetooth,
} from "lucide-react";

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [voiceAlerts, setVoiceAlerts] = useState(true);
  const [autoVolume, setAutoVolume] = useState(true);

  const bg = "#061B3A";
  const card = "#0F2A4F";
  const text = "#FFFFFF";
  const sub = "#CBD5E1";

  return (
    <MobileLayout>
      <div
        style={{
          minHeight: "100vh",
          background: bg,
          padding: "20px",
          paddingBottom: "90px",
          color: text,
          fontFamily: "Arial",
        }}
      >
        {/* HEADER */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          <SettingsIcon
            size={60}
            color="#38BDF8"
          />

          <h1
            style={{
              color: "#38BDF8",
              marginTop: "15px",
              marginBottom: "8px",
              fontSize: "30px",
            }}
          >
            Settings
          </h1>

          <p
            style={{
              color: sub,
            }}
          >
            Customize your HearSafeAI experience
          </p>
        </div>

        {/* PREFERENCES */}

        <div
          style={{
            background: card,
            borderRadius: "20px",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              color: "#38BDF8",
            }}
          >
            Preferences
          </h2>

          <SettingRow
            icon={<Bell size={20} />}
            title="Notifications"
            value={notifications}
            onClick={() =>
              setNotifications(!notifications)
            }
          />

          <SettingRow
            icon={<Volume2 size={20} />}
            title="Voice Alerts"
            value={voiceAlerts}
            onClick={() =>
              setVoiceAlerts(!voiceAlerts)
            }
          />

          <SettingRow
            icon={<Volume2 size={20} />}
            title="Auto Volume Reduction"
            value={autoVolume}
            onClick={() =>
              setAutoVolume(!autoVolume)
            }
          />
        </div>

        {/* SOUND SETTINGS */}

        <div
          style={{
            background: card,
            borderRadius: "20px",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              color: "#38BDF8",
            }}
          >
            Sound Settings
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "18px",
            }}
          >
            <span>
              <Volume2 size={18} /> Alert Volume
            </span>

            <strong>High</strong>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "18px",
            }}
          >
            <span>
              <Mic size={18} /> Microphone
            </span>

            <strong>Enabled</strong>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "18px",
            }}
          >
            <span>
              <Bluetooth size={18} /> Bluetooth
            </span>

            <strong>Connected</strong>
          </div>
        </div>
                {/* ABOUT */}

        <div
          style={{
            background: card,
            borderRadius: "20px",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              color: "#38BDF8",
              marginTop: 0,
            }}
          >
            About
          </h2>

          <div
            style={{
              color: sub,
              lineHeight: "1.9",
              fontSize: "15px",
            }}
          >
            <p>
              <strong style={{ color: text }}>
                App Version:
              </strong>{" "}
              1.3
            </p>

            <p>
              <strong style={{ color: text }}>
                Developer:
              </strong>{" "}
              GANGOTHRI K
            </p>

            <p>
              <strong style={{ color: text }}>
                Project:
              </strong>{" "}
              HearSafeAI – Smart Hearing Protection System
            </p>

            <p>
              <strong style={{ color: text }}>
                AI Status:
              </strong>{" "}
              Active
            </p>
          </div>
        </div>

        {/* LOGOUT BUTTON */}

        <button
          style={{
            width: "100%",
            padding: "16px",
            border: "none",
            borderRadius: "14px",
            background: "#DC2626",
            color: "white",
            fontSize: "17px",
            fontWeight: "bold",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          Logout
        </button>

        <BottomNav />
      </div>
    </MobileLayout>
  );
}

interface SettingRowProps {
  icon: React.ReactNode;
  title: string;
  value: boolean;
  onClick: () => void;
}

function SettingRow({
  icon,
  title,
  value,
  onClick,
}: SettingRowProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 0",
        borderBottom: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          color: "#FFFFFF",
        }}
      >
        {icon}
        <span>{title}</span>
      </div>

      <button
        onClick={onClick}
        style={{
          width: "70px",
          padding: "8px",
          border: "none",
          borderRadius: "20px",
          background: value ? "#16A34A" : "#6B7280",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "0.3s",
        }}
      >
        {value ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default Settings;