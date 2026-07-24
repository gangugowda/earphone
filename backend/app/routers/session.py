from fastapi import APIRouter

router = APIRouter(
    prefix="/session",
    tags=["Live Session"]
)


@router.get("/")
def session_status():

    return {
        "duration": 30,
        "remaining_time": "30:00",
        "bluetooth": "Connected",
        "volume": 68,
        "status": "Running",
        "safe_time": "2 hr 15 min",
        "recommendation": "Take a 5 minute break after this session."
    }