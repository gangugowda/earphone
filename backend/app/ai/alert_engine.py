import time
from plyer import notification

from pycaw.pycaw import AudioUtilities, IAudioEndpointVolume
from comtypes import CLSCTX_ALL


# Prevent repeated alerts
_last_alert_time = 0
ALERT_COOLDOWN = 10  # seconds


def reduce_volume(target_volume=0.40):
    """
    Reduce Windows master volume.
    target_volume = 0.0 to 1.0
    """

    try:
        devices = AudioUtilities.GetSpeakers()

        interface = devices.Activate(
            IAudioEndpointVolume._iid_,
            CLSCTX_ALL,
            None
        )

        volume = interface.QueryInterface(
            IAudioEndpointVolume
        )

        current = volume.GetMasterVolumeLevelScalar()

        print(f"🔊 Current Volume: {int(current * 100)}%")

        volume.SetMasterVolumeLevelScalar(
            target_volume,
            None
        )

        print(f"✅ Volume reduced to {int(target_volume * 100)}%")

    except Exception as e:
        print("Volume Control Error:", e)


def send_notification(sound, confidence):
    """
    Windows desktop notification
    """

    try:
        notification.notify(
            title="🚨 HearSafeAI Emergency",
            message=(
                f"{sound} detected\n"
                f"Confidence: {confidence:.1f}%\n\n"
                "Headphone volume reduced."
            ),
            timeout=5,
        )

        print("📢 Notification Sent")

    except Exception as e:
        print("Notification Error:", e)


def handle_emergency(sound, confidence):
    """
    Complete emergency protection.
    Prevents repeated alerts.
    """

    global _last_alert_time

    current_time = time.time()

    if current_time - _last_alert_time < ALERT_COOLDOWN:
        return

    print("\n🚨 EMERGENCY DETECTED")
    print(f"Type       : {sound}")
    print(f"Confidence : {confidence:.2f}%")

    send_notification(sound, confidence)
    reduce_volume()

    _last_alert_time = current_time