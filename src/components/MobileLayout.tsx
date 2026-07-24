import { ReactNode } from "react";
import { useTheme } from "../context/ThemeContext";

interface MobileLayoutProps {
  children: ReactNode;
}

function MobileLayout({ children }: MobileLayoutProps) {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <div
      style={{
        background: isDark
          ? "linear-gradient(180deg, #061B3A 0%, #0B2C56 100%)"
          : "#F4F7FC",
        color: isDark ? "#FFFFFF" : "#0F172A",
        minHeight: "100vh",
        width: "100%",
        maxWidth: "430px",
        margin: "0 auto",
        padding: "18px",
        paddingBottom: "100px",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
        transition: "all 0.3s ease",
      }}
    >
      {children}
    </div>
  );
}

export default MobileLayout;