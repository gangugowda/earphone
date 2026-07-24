import { useEffect, useState } from "react";
import BottomNav from "../components/BottomNav";
import MobileLayout from "../components/MobileLayout";
interface BluetoothData {
  connected: boolean;
  device: string;
  battery: number;
  signal_strength: string;
  bluetooth_version: string;
}
import {
  BluetoothConnected,
  BatteryFull,
  Clock3,
  Volume2,
  Wifi,
  Headphones,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

function Bluetooth() {
  const [bluetoothData, setBluetoothData] =
    useState<BluetoothData>({
      connected: false,
      device: "",
      battery: 0,
      signal_strength: "",
      bluetooth_version: "",
    });

  useEffect(() => {
    fetch("http://127.0.0.1:8000/bluetooth/")
      .then((response) => response.json())
      .then((data) => setBluetoothData(data))
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
            padding: "30px 20px",
            marginTop: "12px",
            marginBottom: "22px",
            textAlign: "center",
            boxShadow: "0 8px 18px rgba(0,0,0,.30)",
          }}
        >

          <BluetoothConnected
            size={50}
            color="#2563EB"
          />

          <h1
            style={{
              color: "#93C5FD",
              fontSize: "30px",
              marginTop: "15px",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            Bluetooth Devices
          </h1>

          <p
            style={{
              color: "#CBD5E1",
              margin: 0,
              fontSize: "15px",
            }}
          >
            Manage your connected hearing device
          </p>

        </div>

        {/* Device Card */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "20px",
            padding: "22px",
            boxShadow: "0 8px 20px rgba(0,0,0,.30)",
            marginBottom: "20px",
          }}
        >

          <div
            style={{
              textAlign: "center",
            }}
          >

            <Headphones
              size={85}
              color="#A855F7"
            />

            <h2
  style={{
    color: "white",
    marginTop: "15px",
    marginBottom: "8px",
  }}
>
  {bluetoothData.device}
</h2>

           <p
  style={{
    color: bluetoothData.connected ? "#22C55E" : "#EF4444",
    fontWeight: "bold",
    fontSize: "18px",
  }}
>
  {bluetoothData.connected
    ? "🟢 Connected Successfully"
    : "🔴 Device Disconnected"}
</p>

          </div>

        </div>

        {/* Device Information */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "20px",
            padding: "18px",
            marginBottom: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,.30)",
          }}
        >

          <h2
            style={{
              color: "#93C5FD",
              marginTop: 0,
              marginBottom: "18px",
            }}
          >
            Device Information
          </h2>

          <div
            style={{
              background: "#334155",
              borderRadius: "14px",
              padding: "15px",
              marginBottom: "12px",
              color: "white",
            }}
          >
            <BatteryFull color="#22C55E" /> Battery Level
            <br />
            <strong>{bluetoothData.battery}%</strong>
          </div>

          <div
            style={{
              background: "#334155",
              borderRadius: "14px",
              padding: "15px",
              marginBottom: "12px",
              color: "white",
            }}
          >
            <Clock3 color="#FACC15" /> Connected Since
            <br />
            <strong>09:15 AM</strong>
          </div>

          <div
            style={{
              background: "#334155",
              borderRadius: "14px",
              padding: "15px",
              marginBottom: "12px",
              color: "white",
            }}
          >
            <Volume2 color="#22C55E" /> Listening Time
            <br />
            <strong>2 Hours 15 Minutes</strong>
          </div>
                    <div
            style={{
              background: "#334155",
              borderRadius: "14px",
              padding: "15px",
              marginBottom: "12px",
              color: "white",
            }}
          >
            <Wifi color="#22C55E" /> Signal Strength
            <br />
            <strong>{bluetoothData.signal_strength}</strong>
          </div>

          <div
            style={{
              background: "#334155",
              borderRadius: "14px",
              padding: "15px",
              marginBottom: "12px",
              color: "white",
            }}
          >
            <BluetoothConnected color="#2563EB" /> Bluetooth Version
            <br />
            <strong>{bluetoothData.bluetooth_version}</strong>
          </div>

          <div
            style={{
              background: "#334155",
              borderRadius: "14px",
              padding: "15px",
              marginBottom: "12px",
              color: "white",
            }}
          >
            <ShieldCheck color="#22C55E" /> Connection Security
            <br />
            <strong>Secure & Encrypted</strong>
          </div>

          <div
            style={{
              background: "#334155",
              borderRadius: "14px",
              padding: "15px",
              color: "white",
            }}
          >
            <Smartphone color="#A855F7" /> Connected Device
            <br />
            <strong>Android Phone</strong>
          </div>

        </div>

        {/* Action Button */}

        <button
          style={{
            width: "100%",
            padding: "16px",
            border: "none",
            borderRadius: "16px",
            background: "#EF4444",
            color: "white",
            fontSize: "17px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 6px 16px rgba(239,68,68,.35)",
            marginBottom: "15px",
          }}
        >
          Disconnect Device
        </button>

        {/* Status Card */}

        <div
          style={{
            background: "#1E293B",
            borderRadius: "18px",
            padding: "18px",
            textAlign: "center",
            boxShadow: "0 8px 20px rgba(0,0,0,.30)",
          }}
        >
          <h3
            style={{
              color: "#93C5FD",
              marginTop: 0,
            }}
          >
            Connection Status
          </h3>

          <p
  style={{
    color: bluetoothData.connected ? "#22C55E" : "#EF4444",
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "8px",
  }}
>
  {bluetoothData.connected
    ? "🟢 Device Connected Successfully"
    : "🔴 Device Disconnected"}
</p>

          <p
            style={{
              color: "#CBD5E1",
              margin: 0,
              lineHeight: "1.6",
            }}
          >
            {bluetoothData.connected
  ? `Your ${bluetoothData.device} is connected. Signal strength is ${bluetoothData.signal_strength} and the battery level is ${bluetoothData.battery}%. HearSafeAI is actively monitoring your listening activity.`
  : "No Bluetooth device is currently connected. Please connect your hearing device to begin monitoring."}
          </p>
        </div>

      </div>

      <BottomNav />

    </MobileLayout>
  );
}

export default Bluetooth;