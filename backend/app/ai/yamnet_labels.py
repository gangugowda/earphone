import os
import csv
import urllib.request

LABELS_URL = (
    "https://raw.githubusercontent.com/tensorflow/models/master/"
    "research/audioset/yamnet/yamnet_class_map.csv"
)

LABELS_FILE = os.path.join(os.path.dirname(__file__), "labels.csv")


def load_labels():
    if not os.path.exists(LABELS_FILE):
        print("Downloading YAMNet labels...")
        urllib.request.urlretrieve(LABELS_URL, LABELS_FILE)

    labels = []

    with open(LABELS_FILE, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            labels.append(row["display_name"])

    return labels