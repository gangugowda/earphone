import { useState } from "react";
import BottomNav from "../components/BottomNav";
import MobileLayout from "../components/MobileLayout";

import { Bot, Send, User, Sparkles } from "lucide-react";

function AIAssistant() {
  const [messages, setMessages] = useState<
    {
      sender: "ai" | "user";
      text: string;
    }[]
  >([
    {
      sender: "ai",
      text: "👋 Welcome to HearSafeAI! I'm here to help you protect your hearing, understand safe listening habits, and answer questions about ear health.",
    },
  ]);

  const [input, setInput] = useState("");

  const getAIResponse = (question: string) => {
    const q = question.toLowerCase();

    if (q.includes("volume")) {
      return "🟢 Safe Listening Tip: Keep your volume below 70% and avoid listening continuously for more than 60 minutes.";
    }

    if (q.includes("hearing")) {
      return "👂 Healthy Hearing Tip: Take a 10-minute break every hour and schedule regular hearing checkups.";
    }

    if (q.includes("ear")) {
      return "🩺 Ear Care: Clean your earbuds regularly and never insert sharp objects into your ears.";
    }

    if (q.includes("emergency")) {
      return "🚨 Emergency Detection: HearSafeAI can detect ambulance sirens, train horns, alarms, and other emergency sounds to keep you aware.";
    }

    if (q.includes("bluetooth")) {
      return "📶 Bluetooth Status: Ensure your Bluetooth earphones remain connected for uninterrupted monitoring.";
    }

    return "🤖 HearSafeAI Recommendation: Safe listening habits, regular breaks, and moderate volume levels are the best way to protect your hearing.";
  };

  const sendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = {
      sender: "user" as const,
      text: input,
    };

    const aiMessage = {
      sender: "ai" as const,
      text: getAIResponse(input),
    };

    setMessages([
      ...messages,
      userMessage,
      aiMessage,
    ]);

    setInput("");
  };

  return (
    <MobileLayout>

      <div
        style={{
          minHeight: "calc(100vh - 160px)",
          display: "flex",
          flexDirection: "column",
          background: "#0F172A",
          borderRadius: "22px",
          padding: "18px",
        }}
      >

        {/* Header */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "18px",
            padding: "18px",
            textAlign: "center",
            marginBottom: "18px",
            boxShadow: "0 6px 16px rgba(0,0,0,.25)",
          }}
        >

          <Sparkles
            size={34}
            color="#A855F7"
          />

          <h2
            style={{
              color: "#93C5FD",
              marginTop: "10px",
              marginBottom: "5px",
            }}
          >
            HearSafeAI Assistant
          </h2>

          <p
            style={{
              color: "#CBD5E1",
              margin: 0,
              fontSize: "14px",
            }}
          >
            Smart Hearing Protection Powered by AI
          </p>

        </div>

        {/* Chat Area */}

        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "5px",
          }}
        >

          {messages.map((msg, index) => (

            <div
              key={index}
              style={{
                display: "flex",
                justifyContent:
                  msg.sender === "user"
                    ? "flex-end"
                    : "flex-start",
                marginBottom: "15px",
              }}
            >

              <div
                style={{
                  maxWidth: "85%",
                  background:
                    msg.sender === "user"
                      ? "#2563EB"
                      : "#1E293B",

                  color: "white",

                  padding: "13px 16px",

                  borderRadius: "16px",

                  display: "flex",

                  gap: "8px",

                  alignItems: "flex-start",

                  boxShadow:
                    "0 3px 12px rgba(0,0,0,.25)",
                }}
              >

                {msg.sender === "user"
                  ? <User size={18} />
                  : <Bot size={18} color="#A855F7" />
                }

                <span
                  style={{
                    lineHeight: "1.5",
                  }}
                >
                  {msg.text}
                </span>

              </div>

            </div>

          ))}

        </div>
                {/* Suggestions */}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "15px",
            marginBottom: "15px",
          }}
        >
          {[
            "🎧 Safe Volume",
            "👂 Hearing Tips",
            "🩺 Ear Care",
            "🚨 Emergency Help",
          ].map((item) => (
            <button
              key={item}
              onClick={() => setInput(item)}
              style={{
                border: "none",
                background: "#A855F7",
                color: "white",
                padding: "10px 14px",
                borderRadius: "20px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "13px",
                transition: "0.3s",
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Input Box */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#1E293B",
            borderRadius: "18px",
            padding: "10px",
            boxShadow: "0 5px 12px rgba(0,0,0,.25)",
            marginBottom: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Ask HearSafeAI..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              flex: 1,
              background: "transparent",
              color: "white",
              border: "none",
              outline: "none",
              fontSize: "15px",
              padding: "10px",
            }}
          />

          <button
            onClick={sendMessage}
            style={{
              width: "48px",
              height: "48px",
              border: "none",
              background: "#2563EB",
              color: "white",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Send size={20} />
          </button>
        </div>

      </div>

      <BottomNav />

    </MobileLayout>
  );
}

export default AIAssistant;