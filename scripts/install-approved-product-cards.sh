#!/bin/bash
set -euo pipefail

EXPECTED_BRANCH="modernise/burnsville-v2"
TARGET_REL="frontend/public/images/burnsville/cards"
ZIP_OR_DIR="${1:-}"

if [ -z "$ZIP_OR_DIR" ]; then
  echo "Usage: $0 /path/to/BURNSVILLE_PRODUCT_CARDS_MASTER_16.zip"
  exit 1
fi

if [ ! -e "$ZIP_OR_DIR" ]; then
  echo "ERROR: Source not found: $ZIP_OR_DIR"
  exit 1
fi

REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || true)"
if [ -z "$REPO_ROOT" ]; then
  echo "ERROR: Run this inside the Burnsville Git repository."
  exit 1
fi
cd "$REPO_ROOT"

CURRENT_BRANCH="$(git branch --show-current)"
if [ "$CURRENT_BRANCH" != "$EXPECTED_BRANCH" ]; then
  echo "ERROR: Current branch is '$CURRENT_BRANCH'. Expected '$EXPECTED_BRANCH'."
  exit 1
fi

if [ -n "$(git status --porcelain)" ]; then
  echo "ERROR: Working tree is not clean. Commit/stash unrelated work first."
  git status --short
  exit 1
fi

echo "Fetching latest $EXPECTED_BRANCH..."
git fetch origin "$EXPECTED_BRANCH"
git pull --ff-only origin "$EXPECTED_BRANCH"

TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

if [ -d "$ZIP_OR_DIR" ]; then
  SOURCE_ROOT="$ZIP_OR_DIR"
else
  case "$ZIP_OR_DIR" in
    *.zip|*.ZIP)
      unzip -q "$ZIP_OR_DIR" -d "$TMP_DIR/source"
      SOURCE_ROOT="$TMP_DIR/source"
      ;;
    *)
      echo "ERROR: Source must be a directory or ZIP archive."
      exit 1
      ;;
  esac
fi

MANIFEST="$TMP_DIR/manifest.csv"
cat > "$MANIFEST" <<'EOF'
filename,width,height,sha256
BURNSVILLE-01-GREEN-SPARK.png,1122,1402,76bd23b4be08307b2534958b81951e418eb30683a67a76ecc482a2d9a49f3659
BURNSVILLE-02-SUN-GOLD.png,1122,1402,1ff5aae12c62054ba7f2ceab2a17be0d2a6920b531fdecad9dcb1cdf91118e1b
BURNSVILLE-03-CITRUS-FLARE.png,1122,1402,a1d41ee428a22d7c7afcde17d49536a9b282e35c2b085991b1fc114b3412ff8d
BURNSVILLE-04-RED-EMBER.png,1122,1402,5d05dd2d2a4686dedf0637acdb50ece55f449ee7b93f56721ae892265e32a58c
BURNSVILLE-05-DARK-HARVEST.png,1122,1402,7931b930e2ddf8af0b52d240b0b89410e1f3c269d75da5219018be9523ad0a4c
BURNSVILLE-06-SALINE-CURRENT.png,1122,1402,d17d5e61c04d2ff457b8d30d0b25a9f565c6497d461c76db0b7bda99e22927d8
BURNSVILLE-07-CALABRIAN-GLOW.png,1122,1402,b7aa62882f1441ba3f99e990b6e44660c30d27e6acf3c045670315f5bd01fe4f
BURNSVILLE-08-BIRDS-FIRE.png,1122,1402,eff0b953de24b820606d54ce172e586810ff4d6034034e318fce8782a1a03864
BURNSVILLE-09-VIOLETS-FUSE.png,1122,1402,bf62636a55edd75c97be36ecba5d3c8f617068cb28df7851908a2361c1f930e6
BURNSVILLE-10-GHOST-BLACK.png,1122,1402,b5c842b7d02f0c8a1b5b86b69dbc94e854425b62792ab4a5a69962ec2fb048bc
BURNSVILLE-B-42-NIGHT-ORCHARD.png,1122,1402,7e52795c7cac65184fdbbc0afa1467b73c26003753441e4e78f66c539ccee0cd
BURNSVILLE-P-X-FERMENT-BLOOM.png,1122,1402,86a81542260adc88a6e9cce6dac1291de5b278bfb861ce533557cb31f9a66e90
BURNSVILLE-POT-7-VELVET-SCORCH.png,1122,1402,bae3e237cdb095891572f132320be34a6c833d275c3c35f23fb9c774dc65ba5d
BURNSVILLE-R-13-CASK-13.png,1122,1402,df9549b18370e5ca3ca5402aed19a1aa31389cfac1999377620906df3f2a74e9
BURNSVILLE-TMR-200.png,1122,1402,27cadd151036244edc0e8386ef31f69a92a01162b7fbcdc147b40793bb565bf1
BURNSVILLE-X-666-FINAL-BURN.png,1122,1402,4f51ad6e1f5bac2cf57d8b17178d4d6095ec542fd1383444029e68d7e3809e2c
EOF

if ! command -v shasum >/dev/null 2>&1; then
  echo "ERROR: shasum is required."
  exit 1
fi
if ! command -v sips >/dev/null 2>&1; then
  echo "ERROR: sips is required (macOS)."
  exit 1
fi

mkdir -p "$TARGET_REL"

TOTAL=0
while IFS=, read -r filename width height expected_sha; do
  [ "$filename" = "filename" ] && continue
  TOTAL=$((TOTAL + 1))

  MATCH_COUNT="$(find "$SOURCE_ROOT" -type f -name "$filename" | wc -l | tr -d '[:space:]')"
  if [ "$MATCH_COUNT" -ne 1 ]; then
    echo "ERROR: Expected exactly one '$filename' in source, found $MATCH_COUNT."
    exit 1
  fi

  SOURCE_FILE="$(find "$SOURCE_ROOT" -type f -name "$filename" -print -quit)"
  ACTUAL_SHA="$(shasum -a 256 "$SOURCE_FILE" | awk '{print $1}')"
  if [ "$ACTUAL_SHA" != "$expected_sha" ]; then
    echo "ERROR: SHA-256 mismatch for $filename"
    echo "Expected: $expected_sha"
    echo "Actual:   $ACTUAL_SHA"
    exit 1
  fi

  ACTUAL_WIDTH="$(sips -g pixelWidth "$SOURCE_FILE" 2>/dev/null | awk '/pixelWidth/ {print $2}')"
  ACTUAL_HEIGHT="$(sips -g pixelHeight "$SOURCE_FILE" 2>/dev/null | awk '/pixelHeight/ {print $2}')"
  if [ "$ACTUAL_WIDTH" != "$width" ] || [ "$ACTUAL_HEIGHT" != "$height" ]; then
    echo "ERROR: Dimension mismatch for $filename: ${ACTUAL_WIDTH}x${ACTUAL_HEIGHT}; expected ${width}x${height}."
    exit 1
  fi

  TARGET_FILE="$TARGET_REL/$filename"
  if [ -f "$TARGET_FILE" ]; then
    TARGET_SHA="$(shasum -a 256 "$TARGET_FILE" | awk '{print $1}')"
    if [ "$TARGET_SHA" != "$expected_sha" ]; then
      echo "ERROR: Existing target differs: $TARGET_FILE"
      echo "No overwrite performed."
      exit 1
    fi
    echo "OK existing: $filename"
  else
    cp -p "$SOURCE_FILE" "$TARGET_FILE"
    echo "INSTALLED: $filename"
  fi
done < "$MANIFEST"

if [ "$TOTAL" -ne 16 ]; then
  echo "ERROR: Internal manifest count is $TOTAL, expected 16."
  exit 1
fi

# Final verification from installed targets.
while IFS=, read -r filename width height expected_sha; do
  [ "$filename" = "filename" ] && continue
  TARGET_FILE="$TARGET_REL/$filename"
  [ -f "$TARGET_FILE" ] || { echo "ERROR: Missing installed file $filename"; exit 1; }
  ACTUAL_SHA="$(shasum -a 256 "$TARGET_FILE" | awk '{print $1}')"
  [ "$ACTUAL_SHA" = "$expected_sha" ] || { echo "ERROR: Final hash mismatch for $filename"; exit 1; }
done < "$MANIFEST"

# Stage only the approved product-card asset directory.
git add -- "$TARGET_REL"
git diff --cached --check

if git diff --cached --quiet; then
  echo "All 16 approved product cards are already installed and verified."
  exit 0
fi

STAGED_OUTSIDE="$(git diff --cached --name-only | grep -v "^${TARGET_REL}/" || true)"
if [ -n "$STAGED_OUTSIDE" ]; then
  echo "ERROR: Unexpected staged files detected:"
  echo "$STAGED_OUTSIDE"
  exit 1
fi

STAGED_COUNT="$(git diff --cached --name-only -- "$TARGET_REL" | wc -l | tr -d '[:space:]')"
echo "Validated 16/16 approved product cards. $STAGED_COUNT new asset files staged."

git commit -m "chore: install approved Burnsville product card assets"
git push origin "$EXPECTED_BRANCH"

echo "PASS: Approved Burnsville product-card assets installed and pushed to $EXPECTED_BRANCH."
echo "No runtime catalogue, database, legacy assets, or production deployment was changed."
