from fastapi import APIRouter

router = APIRouter(
    prefix="/health-score",
    tags=["Hearing Health"]
)

@router.get("/")
def get_health_score():
    return {
        "score": 95,
        "status": "SAFE",
        "listening_time": "2 hr 15 min",
        "recommendation": "Take a hearing break after long listening sessions"
    }