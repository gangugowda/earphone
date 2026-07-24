import BottomNav from "../components/BottomNav";
import MobileLayout from "../components/MobileLayout";

import {
  History as HistoryIcon,
  Ambulance,
  Train,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

function History() {

  const history = [
    {
      icon: <Ambulance size={30} color="white" />,
      sound: "Ambulance Siren",
      time: "Today • 2:35 PM",
      confidence: "98%",
      color: "#EF4444",
      status: "Emergency",
    },
    {
      icon: <Train size={30} color="white" />,
      sound: "Train Horn",
      time: "Today • 12:48 PM",
      confidence: "96%",
      color: "#2563EB",
      status: "Warning",
    },
    {
      icon: "🚒",
      sound: "Fire Alarm",
      time: "Yesterday • 6:20 PM",
      confidence: "95%",
      color: "#F59E0B",
      status: "Emergency",
    },
    {
      icon: "🚓",
      sound: "Police Siren",
      time: "Yesterday • 10:45 AM",
      confidence: "97%",
      color: "#7C3AED",
      status: "Warning",
    },
  ];

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

          <HistoryIcon
            size={70}
            color="#60A5FA"
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
            Detection History
          </h1>

          <p
            style={{
              color: "#CBD5E1",
              lineHeight: "24px",
              fontSize: "15px",
            }}
          >
            Review all emergency sounds detected by HearSafeAI with AI confidence and timestamps.
          </p>

        </div>

        {/* Detection Cards */}
                {history.map((item, index) => (

          <div
            key={index}
            style={{
              background: "#1E293B",
              borderRadius: "20px",
              padding: "18px",
              marginBottom: "18px",
              boxShadow: "0 8px 18px rgba(0,0,0,.30)",
              border: "1px solid #334155",
            }}
          >

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
              }}
            >

              <div
                style={{
                  width: "68px",
                  height: "68px",
                  borderRadius: "50%",
                  background: item.color,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "30px",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>

              <div
                style={{
                  flex: 1,
                }}
              >

                <h2
                  style={{
                    margin: 0,
                    color: "#F8FAFC",
                    fontSize: "21px",
                  }}
                >
                  {item.sound}
                </h2>

                <p
                  style={{
                    margin: "8px 0",
                    color: "#94A3B8",
                    fontSize: "14px",
                  }}
                >
                  {item.time}
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >

                  <span
                    style={{
                      color: "#60A5FA",
                      fontWeight: "bold",
                    }}
                  >
                    AI Confidence : {item.confidence}
                  </span>

                  <span
                    style={{
                      background:
                        item.status === "Emergency"
                          ? "#DC2626"
                          : "#7C3AED",

                      color: "white",

                      padding: "6px 12px",

                      borderRadius: "20px",

                      fontSize: "12px",

                      fontWeight: "bold",
                    }}
                  >
                    {item.status}
                  </span>

                </div>

              </div>

            </div>

          </div>

        ))}

        {/* Detection Statistics */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "22px",
            padding: "22px",
            marginTop: "10px",
            marginBottom: "22px",
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
            Detection Statistics
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
                borderRadius: "16px",
                padding: "18px",
                textAlign: "center",
              }}
            >
              <ShieldAlert
                size={34}
                color="#EF4444"
              />

              <h3
                style={{
                  color: "#EF4444",
                  margin: "12px 0 6px",
                }}
              >
                12
              </h3>

              <p
                style={{
                  color: "#CBD5E1",
                  margin: 0,
                }}
              >
                Emergency Alerts
              </p>

            </div>

            <div
              style={{
                background: "#0F172A",
                borderRadius: "16px",
                padding: "18px",
                textAlign: "center",
              }}
            >
              <ShieldCheck
                size={34}
                color="#22C55E"
              />

              <h3
                style={{
                  color: "#22C55E",
                  margin: "12px 0 6px",
                }}
              >
                48
              </h3>

              <p
                style={{
                  color: "#CBD5E1",
                  margin: 0,
                }}
              >
                Safe Detections
              </p>

            </div>

          </div>

        </div>
                {/* AI Insights */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "22px",
            padding: "22px",
            marginBottom: "20px",
            boxShadow: "0 8px 18px rgba(0,0,0,.30)",
          }}
        >
          <h2
            style={{
              color: "#93C5FD",
              marginTop: 0,
              marginBottom: "18px",
            }}
          >
            🤖 AI Insights
          </h2>

          <div
            style={{
              background: "#0F172A",
              borderLeft: "5px solid #22C55E",
              borderRadius: "14px",
              padding: "16px",
              marginBottom: "14px",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#E2E8F0",
                lineHeight: "26px",
              }}
            >
              ✅ Most emergency sounds were detected with over 95% confidence.
            </p>
          </div>

          <div
            style={{
              background: "#0F172A",
              borderLeft: "5px solid #FACC15",
              borderRadius: "14px",
              padding: "16px",
              marginBottom: "14px",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#E2E8F0",
                lineHeight: "26px",
              }}
            >
              ⚠️ High listening volume was detected twice this week. Consider reducing your volume.
            </p>
          </div>

          <div
            style={{
              background: "#0F172A",
              borderLeft: "5px solid #7C3AED",
              borderRadius: "14px",
              padding: "16px",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#E2E8F0",
                lineHeight: "26px",
              }}
            >
              💡 Your hearing protection score has improved by 8% compared to last week.
            </p>
          </div>
        </div>

        {/* Detection Summary */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "22px",
            padding: "22px",
            marginBottom: "30px",
            boxShadow: "0 8px 18px rgba(0,0,0,.30)",
          }}
        >
          <h2
            style={{
              color: "#93C5FD",
              marginTop: 0,
            }}
          >
            📊 Summary
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "14px",
              marginTop: "18px",
            }}
          >
            <div
              style={{
                background: "#0F172A",
                borderRadius: "16px",
                padding: "18px",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  color: "#60A5FA",
                }}
              >
                4
              </h2>

              <p
                style={{
                  color: "#CBD5E1",
                  marginTop: "8px",
                }}
              >
                Sounds Today
              </p>
            </div>

            <div
              style={{
                background: "#0F172A",
                borderRadius: "16px",
                padding: "18px",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  color: "#22C55E",
                }}
              >
                96%
              </h2>

              <p
                style={{
                  color: "#CBD5E1",
                  marginTop: "8px",
                }}
              >
                Avg Accuracy
              </p>
            </div>
          </div>
        </div>

      </div>

      <BottomNav />

    </MobileLayout>

  );
}

export default History;