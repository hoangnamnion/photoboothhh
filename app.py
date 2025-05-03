# app.py
from flask import Flask, request, send_file, render_template
from PIL import Image
import io
import base64
import math

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/collage", methods=["POST"])
def collage():
    data = request.get_json()
    images = [Image.open(io.BytesIO(base64.b64decode(img.split(",")[1]))) for img in data["images"]]
    layout = data["layout"]

    collage_img = create_collage(images, layout)
    buf = io.BytesIO()
    collage_img.save(buf, format="PNG")
    buf.seek(0)
    return send_file(buf, mimetype="image/png")

def create_collage(images, layout):
    count = len(images)
    if layout == "1x4":
        rows, cols = 1, 4
    elif layout == "1x3":
        rows, cols = 1, 3
    elif layout == "2x3":
        rows, cols = 2, 3
    elif layout == "3x2":
        rows, cols = 3, 2
    else:
        rows, cols = 1, count

    w, h = images[0].size
    collage = Image.new("RGB", (cols * w, rows * h), "white")

    for i, img in enumerate(images[:rows * cols]):
        r = i // cols
        c = i % cols
        collage.paste(img, (c * w, r * h))

    return collage

if __name__ == "__main__":
    app.run(debug=True)
