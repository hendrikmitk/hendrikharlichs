#!/bin/bash

echo "[INFO] Creating Markdown file ..."

DATE=$(date +"%Y-%m-%d")
TITLE="$@"
FILE_NAME="$DATE-$(printf "$TITLE" | tr -d "[:punct:]" | xargs | tr " " "-" | tr "[A-Z]" "[a-z]").md"

cat > "src/lib/posts/$FILE_NAME" <<EOF
---
title: $(printf "$TITLE" | xargs)
created: $DATE
updated:
summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
draft: true
---

EOF

echo "[SUCCESS] Markdown file created successfully"

node create-og-image.js
