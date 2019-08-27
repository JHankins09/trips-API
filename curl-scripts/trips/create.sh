#!/bin/bash

API="http://localhost:4741"
URL_PATH="/trips"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "trip": {
      "name": "'"${NAME}"'",
      "_duration": "'"2"'",
      "completed": "'"false"'",
      "private": "'"false"'",
      "type": "'"${TYPE}"'"
    }
  }'

echo
