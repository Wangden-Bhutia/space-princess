#!/bin/sh
# Writes audio/index.json = list of keys for every audio/*.mp3, so the game only requests clips that exist.
# Run from the repo root after adding mp3s, then bump CACHE in sw.js.
cd "$(dirname "$0")/.." || exit 1
ls audio/*.mp3 2>/dev/null | sed 's#audio/##; s#\.mp3$##' | awk 'BEGIN{printf "["} {printf "%s\"%s\"", (NR>1?",":""), $0} END{print "]"}' > audio/index.json
echo "audio/index.json: $(grep -o '"' audio/index.json | wc -l | awk '{print $1/2}') clips"
