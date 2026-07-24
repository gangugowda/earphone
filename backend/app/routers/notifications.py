from fastapi import APIRouter

router = APIRouter(
    prefix="/notifications",
    tags=["Notifications"]
)


@router.get("/")
def get_notifications():

    return [
        {
            "id": 1,
            "type": "warning",
            "title": "High Volume",
            "message": "Volume exceeds the safe limit. Please reduce the volume."
        },
        {
            "id": 2,
            "type": "reminder",
            "title": "Take a Break",
            "message": "You've been listening for 60 minutes."
        },
        {
            "id": 3,
            "type": "emergency",
            "title": "Ambulance Detected",
            "message": "Emergency vehicle approaching."
        }
    ]