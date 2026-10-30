#!/usr/bin/env bash
# Re-export PNG icons from icons/icon.svg. Run from the repo root: bash tools/make-icons.sh
# The icon (icons/icon.svg) is a plain placeholder: a cream paw print on honey gold #F2B544, no lettering.
# Uses headless Google Chrome/Chromium + Python Pillow (pip install pillow).
# Manual alternative: open icons/icon.svg in Inkscape/Figma/any online "SVG to PNG" converter and export
#   icon-192.png (192x192), icon-512.png (512x512), apple-touch-icon.png (180x180),
#   icon-maskable-512.png (512x512: the icon scaled to ~80% centred on the #F2B544 honey-gold background).
set -e
cd "$(dirname "$0")/.."
CHROME=$(command -v google-chrome || command -v chromium || command -v chromium-browser)
TMP=$(mktemp -d)
echo "<html><body style='margin:0'><img src='file://$PWD/icons/icon.svg' width=512 height=512></body></html>" > "$TMP/i.html"
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --window-size=512,512 --screenshot="$TMP/full.png" "file://$TMP/i.html"
python3 - "$TMP/full.png" <<'PY'
import sys
from PIL import Image
im=Image.open(sys.argv[1]).convert("RGBA").crop((0,0,512,512))
im.save("icons/icon-512.png")
im.resize((192,192),Image.LANCZOS).save("icons/icon-192.png")
im.convert("RGB").resize((180,180),Image.LANCZOS).save("icons/apple-touch-icon.png")
m=Image.new("RGBA",(512,512),(242,181,68,255))
m.paste(im.resize((410,410),Image.LANCZOS),(51,51))
m.save("icons/icon-maskable-512.png")
PY
rm -rf "$TMP"; echo "Icons written to icons/"
