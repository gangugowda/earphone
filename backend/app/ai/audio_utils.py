import numpy as np
import sounddevice as sd

# Audio Settings
SAMPLE_RATE = 16000
DURATION = 3


def record_audio():
    """
    Records audio from the microphone and returns
    a 1D NumPy waveform.
    """

    audio = sd.rec(
        int(SAMPLE_RATE * DURATION),
        samplerate=SAMPLE_RATE,
        channels=1,
        dtype="float32",
    )

    sd.wait()

    waveform = np.squeeze(audio)

    return waveform


def get_audio_settings():
    """
    Returns current recording settings.
    """

    return {
        "sample_rate": SAMPLE_RATE,
        "duration": DURATION,
    }


def list_microphones():
    """
    Prints available recording devices.
    Useful for debugging.
    """

    devices = sd.query_devices()

    for i, device in enumerate(devices):
        if device["max_input_channels"] > 0:
            print(f"{i}: {device['name']}")