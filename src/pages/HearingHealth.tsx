import BottomNav from "../components/BottomNav";
import MobileLayout from "../components/MobileLayout";

import {
  Heart,
  Activity,
  Volume2,
  Clock3,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

function HearingHealth() {
  return (
    <MobileLayout>

      <div
        style={{
          minHeight: "calc(100vh - 160px)",
          background: "#0F172A",
          borderRadius: "24px",
          padding: "22px",
          paddingTop: "40px",
          paddingBottom: "100px",
          fontFamily: "Arial, sans-serif",
        }}
      >

        {/* Header */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "22px",
            padding: "28px",
            textAlign: "center",
            marginBottom: "22px",
            boxShadow: "0 8px 20px rgba(0,0,0,.30)",
          }}
        >

          <Heart
            size={70}
            color="#EF4444"
          />

          <h1
            style={{
              color: "#93C5FD",
              marginTop: "18px",
              marginBottom: "10px",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Hearing Health
          </h1>

          <p
            style={{
              color: "#CBD5E1",
              fontSize: "15px",
              lineHeight: "24px",
            }}
          >
            Monitor your hearing health and listening habits in real time.
          </p>

        </div>

        {/* Health Status */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "22px",
            padding: "24px",
            textAlign: "center",
            marginBottom: "22px",
            boxShadow: "0 8px 20px rgba(0,0,0,.30)",
          }}
        >

          <div
            style={{
              fontSize: "70px",
            }}
          >
            😊
          </div>

          <h2
            style={{
              color: "#22C55E",
              marginTop: "15px",
              marginBottom: "12px",
            }}
          >
            Your Hearing is Healthy
          </h2>

          <p
            style={{
              color: "#CBD5E1",
              lineHeight: "28px",
              fontSize: "15px",
            }}
          >
            Excellent! Your current listening habits are within the recommended safe hearing limits.
            Continue using HearSafeAI to maintain healthy hearing and receive emergency alerts.
          </p>

        </div>

        {/* Today's Usage */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "22px",
            padding: "22px",
            marginBottom: "22px",
            boxShadow: "0 8px 20px rgba(0,0,0,.30)",
          }}
        >

          <h2
            style={{
              color: "#93C5FD",
              marginTop: 0,
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Today's Usage
          </h2>

          {/* Listening Time */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#0F172A",
              borderRadius: "16px",
              padding: "16px",
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
              <Clock3
                size={24}
                color="#FACC15"
              />

              <span
                style={{
                  color: "#E2E8F0",
                  fontWeight: 600,
                }}
              >
                Listening Time
              </span>
            </div>

            <span
              style={{
                color: "#22C55E",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              2 hr 15 min
            </span>
          </div>
                    {/* Average Volume */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#0F172A",
              borderRadius: "16px",
              padding: "16px",
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
              <Volume2
                size={24}
                color="#60A5FA"
              />

              <span
                style={{
                  color: "#E2E8F0",
                  fontWeight: 600,
                }}
              >
                Average Volume
              </span>
            </div>

            <span
              style={{
                color: "#FACC15",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              68%
            </span>
          </div>

          {/* Safe Listening Time */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#0F172A",
              borderRadius: "16px",
              padding: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <Activity
                size={24}
                color="#A855F7"
              />

              <span
                style={{
                  color: "#E2E8F0",
                  fontWeight: 600,
                }}
              >
                Safe Time Left
              </span>
            </div>

            <span
              style={{
                color: "#22C55E",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              1 hr 45 min
            </span>
          </div>

        </div>

        {/* Weekly Summary */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "22px",
            padding: "22px",
            marginBottom: "22px",
            boxShadow: "0 8px 20px rgba(0,0,0,.30)",
          }}
        >

          <h2
            style={{
              color: "#93C5FD",
              marginTop: 0,
              marginBottom: "20px",
            }}
          >
            Weekly Summary
          </h2>

          {[
            { day: "Monday", status: "Safe", color: "#22C55E" },
            { day: "Tuesday", status: "Safe", color: "#22C55E" },
            { day: "Wednesday", status: "High Volume", color: "#EF4444" },
            { day: "Thursday", status: "Safe", color: "#22C55E" },
            { day: "Friday", status: "Safe", color: "#22C55E" },
            { day: "Saturday", status: "Safe", color: "#22C55E" },
            { day: "Sunday", status: "Safe", color: "#22C55E" },
          ].map((item) => (
            <div
              key={item.day}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 0",
                borderBottom: "1px solid #334155",
              }}
            >
              <span
                style={{
                  color: "#E2E8F0",
                }}
              >
                {item.day}
              </span>

              <span
                style={{
                  color: item.color,
                  fontWeight: "bold",
                }}
              >
                {item.status === "Safe"
                  ? "✅ Safe"
                  : "⚠ High Volume"}
              </span>
            </div>
          ))}

        </div>
                {/* AI Recommendation */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "22px",
            padding: "22px",
            marginBottom: "22px",
            boxShadow: "0 8px 20px rgba(0,0,0,.30)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <ShieldCheck
              size={30}
              color="#22C55E"
            />

            <h2
              style={{
                color: "#22C55E",
                margin: 0,
              }}
            >
              AI Recommendation
            </h2>
          </div>

          <p
            style={{
              color: "#CBD5E1",
              lineHeight: "30px",
              fontSize: "15px",
            }}
          >
            • Keep headphone volume below <strong>70%</strong>.
            <br />
            • Take a <strong>10-minute break</strong> after every hour of listening.
            <br />
            • Enable <strong>Emergency Sound Detection</strong> to receive alerts for ambulance sirens, train horns and alarms.
            <br />
            • Review your hearing analytics every week.
          </p>
        </div>

        {/* Overall Hearing Score */}

        <div
          style={{
            background: "linear-gradient(135deg,#2563EB,#1D4ED8)",
            borderRadius: "22px",
            padding: "25px",
            textAlign: "center",
            boxShadow: "0 8px 20px rgba(0,0,0,.30)",
          }}
        >
          <TrendingUp
            size={55}
            color="#FACC15"
          />

          <h2
            style={{
              color: "white",
              marginTop: "16px",
            }}
          >
            Overall Hearing Score
          </h2>

          <h1
            style={{
              color: "#22C55E",
              fontSize: "56px",
              margin: "10px 0",
            }}
          >
            95%
          </h1>

          <p
            style={{
              color: "#DBEAFE",
              fontSize: "16px",
              lineHeight: "28px",
            }}
          >
            Excellent hearing habits. Keep following safe listening
            practices to maintain healthy ears.
          </p>
        </div>

      </div>

      <BottomNav />

    </MobileLayout>
  );
}

export default HearingHealth;