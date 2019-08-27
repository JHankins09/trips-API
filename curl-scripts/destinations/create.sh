#!/bin/bash

API="http://localhost:4741"
URL_PATH="/destinations"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "destination": {
      "name": "'"${NAME}"'",
      "pit": "'"${PIT}"'",
      "peak": "'"${PEAK}"'",
      "rating": "'"${RATE}"'",
      "trip": "'"${TRIP}"'"
    }
  }'

echo
