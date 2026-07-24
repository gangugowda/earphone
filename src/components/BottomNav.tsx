import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Bluetooth,
  Mic,
  Bot,
  HeartPulse,
  Clock3,
  Settings,
} from "lucide-react";

function BottomNav() {
  const location = useLocation();

  const items = [
    { name: "Home", path: "/dashboard", icon: Home },
    { name: "Bluetooth", path: "/bluetooth", icon: Bluetooth },
    { name: "Detection", path: "/live-detection", icon: Mic },
    { name: "AI", path: "/assistant", icon: Bot },
    { name: "Health", path: "/health", icon: HeartPulse },
    { name: "Session", path: "/live-session", icon: Clock3 },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "75px",
        background: "#fff",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderTop: "1px solid #ddd",
      }}
    >
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            to={item.path}
            style={{
              textDecoration: "none",
              color:
                location.pathname === item.path
                  ? "#2563EB"
                  : "#777",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "11px",
            }}
          >
            <Icon size={22} />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}

export default BottomNav;