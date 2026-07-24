from fastapi import APIRouter

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/")
def get_dashboard():

    return {
        "hearing_score": 95,
        "hearing_status": "SAFE",
        "listening_time": "2 hr 15 min",
        "average_volume": "68%",
        "alerts_today": 2,
        "bluetooth": "Connected",
        "ai_status": "Ready"
    }