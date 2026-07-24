from datetime import datetime

latest_detection = {
    "sound": "Listening...",
    "confidence": 0.0,
    "emergency": False,
    "risk_level": "SAFE",
    "recommendation": "Monitoring environment",
}

history = []


def update_detection(sound, confidence, emergency):

    if emergency:
        risk = "DANGER"
        recommendation = "Reduce headphone volume immediately"

    elif confidence >= 40:
        risk = "WARNING"
        recommendation = "Stay alert"

    else:
        risk = "SAFE"
        recommendation = "Monitoring environment"

    global latest_detection

    latest_detection = {
        "sound": sound,
        "confidence": round(confidence, 2),
        "emergency": emergency,
        "risk_level": risk,
        "recommendation": recommendation,
    }

    history.insert(
        0,
        {
            "sound": sound,
            "confidence": round(confidence, 2),
            "emergency": emergency,
            "risk_level": risk,
            "time": datetime.now().strftime("%I:%M:%S %p"),
            "date": datetime.now().strftime("%d %b %Y"),
        },
    )

    if len(history) > 100:
        history.pop()


def get_detection():
    return latest_detection


def get_history():
    return history