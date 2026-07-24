import BottomNav from "../components/BottomNav";
function UsageMonitor() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F4F7FC",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <div style={{ fontSize: "60px" }}>🎧</div>

        <h1
          style={{
            color: "#2563EB",
            marginTop: "15px",
            marginBottom: "15px",
          }}
        >
          Usage Monitor
        </h1>

        <p
          style={{
            color: "#555",
            fontSize: "16px",
          }}
        >
          Monitor your daily headphone usage and maintain healthy listening habits.
        </p>
      </div>

      {/* Today's Usage */}
      <div
        style={{
          background: "#fff",
          borderRadius: "15px",
          padding: "20px",
          marginBottom: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h2 style={{ color: "#2563EB" }}>Today's Usage</h2>

        <p>🎧 Listening Time : <strong>2 Hours 15 Minutes</strong></p>
        <p>🔊 Average Volume : <strong>68%</strong></p>
        <p>⏳ Safe Listening Time Left : <strong>1 Hour 45 Minutes</strong></p>
      </div>

      {/* Weekly Report */}
      <div
        style={{
          background: "#fff",
          borderRadius: "15px",
          padding: "20px",
          marginBottom: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h2 style={{ color: "#2563EB" }}>Weekly Report</h2>

        <p>Monday - ✅ Safe</p>
        <p>Tuesday - ✅ Safe</p>
        <p>Wednesday - ⚠ High Volume</p>
        <p>Thursday - ✅ Safe</p>
        <p>Friday - ✅ Safe</p>
        <p>Saturday - ✅ Safe</p>
        <p>Sunday - ✅ Safe</p>
      </div>

      {/* Recommendations */}
      <div
        style={{
          background: "#E8F5E9",
          borderRadius: "15px",
          padding: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h2 style={{ color: "#16A34A" }}>Recommendations</h2>

        <ul style={{ lineHeight: "30px" }}>
          <li>Keep volume below 70%.</li>
          <li>Take a 10-minute break every hour.</li>
          <li>Enable Smart Hearing Protection.</li>
          <li>Avoid prolonged exposure to loud sounds.</li>
          <li>Review your weekly listening report regularly.</li>
        </ul>
      </div>
      <BottomNav />
    </div>
  );
}

export default UsageMonitor;