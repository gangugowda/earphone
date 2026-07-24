from fastapi import APIRouter
from app.ai.detector_service import get_history

router = APIRouter(
    prefix="/history",
    tags=["History"]
)


@router.get("/")
def history():

    return {
        "total_records": len(get_history()),
        "history": get_history()
    }