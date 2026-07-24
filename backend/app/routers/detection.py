from fastapi import APIRouter
import random


router = APIRouter(
    prefix="/detection",
    tags=["Detection"]
)


sounds = [
    {
        "name": "🚑 Ambulance Siren",
        "emergency": True,
        "confidence": 96
    },
    {
        "name": "🚆 Train Horn",
        "emergency": True,
        "confidence": 93
    },
    {
        "name": "🚗 Vehicle Horn",
        "emergency": False,
        "confidence": 91
    },
    {
        "name": "🔨 Construction Noise",
        "emergency": False,
        "confidence": 95
    },
    {
        "name": "Normal Environment",
        "emergency": False,
        "confidence": 98
    }
]


@router.get("/")
def detection_status():

    sound = random.choice(sounds)

    noise_level = random.randint(40,100)


    if noise_level < 70:
        risk = "SAFE"
        action = "Continue listening safely"

    elif noise_level < 85:
        risk = "WARNING"
        action = "Reduce volume and take breaks"

    else:
        risk = "DANGER"
        action = "Reduce headphone volume immediately"


    return {

        "microphone": "Active",

        "current_sound": sound["name"],

        "confidence": sound["confidence"],

        "noise_level": noise_level,

        "risk_level": risk,

        "emergency": sound["emergency"],

        "recommendation": action,

        "protection_action": action,

        "sounds_processed": random.randint(20,150),

        "accuracy": random.randint(90,98)

    }



@router.get("/history")
def detection_history():

    return [
        {
            "id":1,
            "sound":"🚑 Ambulance Siren",
            "time":"09:15 AM",
            "date":"20 July 2026",
            "status":"Emergency Alert Sent",
            "color":"#EF4444"
        },
        {
            "id":2,
            "sound":"🚆 Train Horn",
            "time":"11:40 AM",
            "date":"19 July 2026",
            "status":"User Warned",
            "color":"#FACC15"
        }
    ]