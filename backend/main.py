from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


# Routers
from app.routers.dashboard import router as dashboard_router
from app.routers.bluetooth import router as bluetooth_router
from app.routers.notifications import router as notifications_router
from app.routers.detection import router as detection_router
from app.routers.session import router as session_router
from app.routers.health import router as health_router
from app.routers.history import router as history_router


# AI Detection Service
from app.ai.detector_service import get_detection



# =====================================
# Create FastAPI Application
# =====================================

app = FastAPI(

    title="HearSafeAI Backend",

    description="Backend for Smart Hearing Protection System",

    version="1.0.0"

)



# =====================================
# CORS Configuration
# =====================================

app.add_middleware(

    CORSMiddleware,

    allow_origins=[

        "http://localhost:5173",

        "http://127.0.0.1:5173",

    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],

)



# =====================================
# Root Endpoint
# =====================================

@app.get("/", tags=["Root"])
def home():

    return {

        "message": "Welcome to HearSafeAI Backend",

        "status": "Running",

        "project": "Smart Hearing Protection System",

    }



# =====================================
# System Status
# =====================================

@app.get("/status", tags=["System"])
def status():

    return {

        "system": "Active",

        "backend": "FastAPI",

        "version": "1.0.0",

        "ai_status": "Ready",

    }



# =====================================
# Live AI Detection Endpoint
# =====================================

@app.get("/live-detection", tags=["AI Detection"])
def live_detection():

    return get_detection()



# =====================================
# Register Routers
# =====================================

app.include_router(dashboard_router)

app.include_router(bluetooth_router)

app.include_router(notifications_router)

app.include_router(detection_router)

app.include_router(session_router)

app.include_router(health_router)

app.include_router(history_router)