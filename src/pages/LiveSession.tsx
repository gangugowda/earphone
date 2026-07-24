import { useEffect, useState } from "react";

import MobileLayout from "../components/MobileLayout";
import BottomNav from "../components/BottomNav";

import {
  Timer,
  Clock3,
  Play,
  Pause,
  Square,
  RotateCcw,
  Activity,
  Bluetooth,
  ShieldCheck,
} from "lucide-react";

export default function LiveSession() {
  // User selected duration (minutes)
  const [duration, setDuration] = useState(30);

  // Countdown in seconds
  const [timeLeft, setTimeLeft] = useState(30 * 60);

  // Elapsed time
  const [elapsed, setElapsed] = useState(0);

  // Timer running?
  const [running, setRunning] = useState(false);

  // Status
  const [status, setStatus] = useState("Ready");

  // Ask browser notification permission once
  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission();
    }
  }, []);

  // Update timer when duration changes
  useEffect(() => {
    if (!running) {
      setTimeLeft(duration * 60);
    }
  }, [duration, running]);

  // Countdown
  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setTimeLeft((previous) => {
        if (previous <= 1) {
          clearInterval(interval);

          setRunning(false);
          setStatus("Completed");

          // Browser notification
          if (
            "Notification" in window &&
            Notification.permission === "granted"
          ) {
            new Notification("HearSafeAI", {
              body: "Session completed! Please take a 5-minute hearing break.",
            });
          }

          // Popup
          alert(
            "⏰ Session Completed!\n\nPlease take a 5-minute hearing break."
          );

          return 0;
        }

        return previous - 1;
      });

      setElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  // Start
  const startSession = () => {
    setRunning(true);
    setStatus("Running");
  };

  // Pause
  const pauseSession = () => {
    setRunning(false);
    setStatus("Paused");
  };

  // Stop
  const stopSession = () => {
    setRunning(false);
    setElapsed(0);
    setTimeLeft(duration * 60);
    setStatus("Stopped");
  };

  // Reset
  const resetSession = () => {
    setRunning(false);
    setElapsed(0);
    setTimeLeft(duration * 60);
    setStatus("Ready");
  };

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <MobileLayout>
      <div
        style={{
          minHeight: "100vh",
          background: "#0F172A",
          color: "white",
          padding: "20px",
          paddingBottom: "100px",
          borderRadius: "20px",
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
              width: "90px",
              height: "90px",
              margin: "0 auto",
              borderRadius: "50%",
              background: "#2563EB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Timer size={45} color="white" />
          </div>

          <h1
            style={{
              color: "#93C5FD",
              fontSize: "28px",
              marginTop: "15px",
            }}
          >
            Live Protection Session
          </h1>

          <p
            style={{
              color: "#CBD5E1",
            }}
          >
            Protect your hearing with smart listening sessions
          </p>
        </div>

        {/* TIMER CARD */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "20px",
            padding: "25px",
            textAlign: "center",
          }}
        >
          <Clock3 size={42} color="#60A5FA" />

          <h2
            style={{
              color: "#93C5FD",
              marginTop: "15px",
            }}
          >
            Remaining Time
          </h2>

          <h1
            style={{
              fontSize: "52px",
              margin: "15px 0",
              color: running ? "#22C55E" : "white",
            }}
          >
            {formatTime(timeLeft)}
          </h1>

          <p
            style={{
              color: "#CBD5E1",
            }}
          >
            Status : {status}
          </p>
        </div>

        {/* DURATION */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "20px",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <h2
            style={{
              color: "#93C5FD",
              marginBottom: "10px",
            }}
          >
            Session Duration (Minutes)
          </h2>

          <input
            type="number"
            min={1}
            max={180}
            disabled={running}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "12px",
              border: "none",
              background: "#0F172A",
              color: "white",
              fontSize: "18px",
              textAlign: "center",
            }}
          />
        </div>

        {/* BUTTONS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <button
            onClick={startSession}
            disabled={running}
            style={{
              padding: "15px",
              borderRadius: "14px",
              border: "none",
              background: "#22C55E",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            <Play size={18} /> Start
          </button>

          <button
            onClick={pauseSession}
            disabled={!running}
            style={{
              padding: "15px",
              borderRadius: "14px",
              border: "none",
              background: "#F59E0B",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            <Pause size={18} /> Pause
          </button>

          <button
            onClick={stopSession}
            style={{
              padding: "15px",
              borderRadius: "14px",
              border: "none",
              background: "#EF4444",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            <Square size={18} /> Stop
          </button>

          <button
            onClick={resetSession}
            style={{
              padding: "15px",
              borderRadius: "14px",
              border: "none",
              background: "#3B82F6",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            <RotateCcw size={18} /> Reset
          </button>
        </div>
                {/* CURRENT SESSION */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "20px",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <h2
            style={{
              color: "#93C5FD",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "15px",
            }}
          >
            <Activity size={22} />
            Current Session
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
                borderRadius: "15px",
                padding: "18px",
                textAlign: "center",
              }}
            >
              <Bluetooth color="#60A5FA" size={30} />
              <p style={{ color: "#CBD5E1", marginTop: "10px" }}>
                Bluetooth
              </p>
              <h3>Connected</h3>
            </div>

            <div
              style={{
                background: "#0F172A",
                borderRadius: "15px",
                padding: "18px",
                textAlign: "center",
              }}
            >
              <ShieldCheck color="#22C55E" size={30} />
              <p style={{ color: "#CBD5E1", marginTop: "10px" }}>
                Protection
              </p>
              <h3
                style={{
                  color: running ? "#22C55E" : "#EF4444",
                }}
              >
                {running ? "ACTIVE" : "STOPPED"}
              </h3>
            </div>
          </div>
        </div>

        {/* SESSION STATS */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "20px",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <h2
            style={{
              color: "#93C5FD",
              marginBottom: "15px",
            }}
          >
            Session Statistics
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span>Status</span>
            <strong>{status}</strong>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span>Elapsed Time</span>
            <strong>{formatTime(elapsed)}</strong>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Remaining Time</span>
            <strong>{formatTime(timeLeft)}</strong>
          </div>
        </div>

        {/* SAFETY */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "20px",
            padding: "20px",
            marginTop: "20px",
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              color: "#93C5FD",
              marginBottom: "15px",
            }}
          >
            Safety Recommendation
          </h2>

          <ul
            style={{
              color: "#CBD5E1",
              lineHeight: "1.8",
              paddingLeft: "20px",
            }}
          >
            <li>🔊 Keep volume below 70%</li>
            <li>⏰ Take a 5-minute break every 30 minutes</li>
            <li>🎧 Avoid continuous headphone usage</li>
            <li>🚨 Stay alert for emergency sounds</li>
          </ul>
        </div>

      </div>

      <BottomNav />
    </MobileLayout>
  );
}