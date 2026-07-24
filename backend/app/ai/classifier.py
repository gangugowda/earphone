import numpy as np
import tensorflow_hub as hub

from app.ai.yamnet_labels import load_labels

print("Loading YAMNet Model...")

model = hub.load("https://tfhub.dev/google/yamnet/1")
labels = load_labels()

print("✅ YAMNet Loaded")
print(f"Loaded {len(labels)} labels")


# -----------------------------
# Emergency Categories
# -----------------------------

EMERGENCY_CLASSES = {
    "TRAIN": [
        "train",
        "rail transport",
        "railroad",
        "subway",
        "metro",
    ],

    "SIREN": [
        "siren",
        "ambulance",
        "police",
        "fire engine",
        "fire truck",
        "emergency vehicle",
    ],

    "HORN": [
        "vehicle horn",
        "car horn",
        "honking",
    ],

    "ALARM": [
        "fire alarm",
        "smoke detector",
        "alarm",
    ],
}


# -----------------------------
# Thresholds
# -----------------------------

THRESHOLDS = {
    "TRAIN": 20,
    "SIREN": 35,
    "HORN": 30,
    "ALARM": 25,
}


def classify_audio(waveform):
    """
    Returns AI prediction information.
    """

    scores, embeddings, spectrogram = model(waveform)

    mean_scores = np.mean(scores.numpy(), axis=0)

    top_class = int(np.argmax(mean_scores))

    sound = labels[top_class]

    confidence = float(mean_scores[top_class]) * 100

    sound_lower = sound.lower()

    emergency = False
    category = None
    threshold = 50

    # -----------------------------
    # Determine emergency category
    # -----------------------------

    for cat, keywords in EMERGENCY_CLASSES.items():

        if any(keyword in sound_lower for keyword in keywords):

            category = cat
            threshold = THRESHOLDS[cat]
            emergency = confidence >= threshold
            break

    # -----------------------------
    # Risk Level
    # -----------------------------

    if emergency:
        risk = "DANGER"

    elif confidence >= 40:
        risk = "WARNING"

    else:
        risk = "SAFE"

    # -----------------------------
    # Recommendation
    # -----------------------------

    if emergency:
        recommendation = "Reduce headphone volume immediately."

    elif risk == "WARNING":
        recommendation = "Stay alert."

    else:
        recommendation = "Environment is safe."

    return {
        "sound": sound,
        "confidence": round(confidence, 2),
        "category": category,
        "emergency": emergency,
        "risk_level": risk,
        "recommendation": recommendation,
    }