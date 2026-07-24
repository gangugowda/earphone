import time

from app.ai.audio_utils import record_audio
from app.ai.classifier import classify_audio
from app.ai.alert_engine import handle_emergency
from app.ai.detector_service import update_detection


print("=" * 50)
print("🎤 HearSafeAI Detection Service")
print("=" * 50)
print("Listening continuously...")
print("Press Ctrl + C to stop.\n")


try:
    while True:

        # Record audio
        waveform = record_audio()

        # AI Classification
        result = classify_audio(waveform)

        # Update backend
        update_detection(
            sound=result["sound"],
            confidence=result["confidence"],
            emergency=result["emergency"],
            risk_level=result["risk_level"],
            recommendation=result["recommendation"],
        )

        # Console Output
        print("-" * 50)
        print(f"Sound          : {result['sound']}")
        print(f"Confidence     : {result['confidence']} %")
        print(f"Category       : {result['category']}")
        print(f"Risk Level     : {result['risk_level']}")
        print(f"Emergency      : {result['emergency']}")
        print(f"Recommendation : {result['recommendation']}")

        # Protection
        if result["emergency"]:
            handle_emergency(
                result["sound"],
                result["confidence"],
            )

        time.sleep(0.2)

except KeyboardInterrupt:
    print("\n🛑 Detection stopped.")