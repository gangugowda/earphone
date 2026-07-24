from fastapi import APIRouter

router = APIRouter(
    prefix="/bluetooth",
    tags=["Bluetooth"]
)


@router.get("/")
def bluetooth_status():

    return {
        "connected": True,
        "device": "HearSafe Earbuds",
        "battery": 87,
        "signal_strength": "Excellent",
        "bluetooth_version": "5.3"
    }