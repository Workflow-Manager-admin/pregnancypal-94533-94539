#!/bin/bash
cd /home/kavia/workspace/code-generation/pregnancypal-94533-94539/main_container_for_pregnancypal
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

