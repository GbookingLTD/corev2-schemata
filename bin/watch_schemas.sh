#!/usr/bin/env bash

src=$( dirname "${BASH_SOURCE[0]}" )

cd "${src}/.."

while inotifywait -qr --event modify schemas; do make; echo "Update schemas `date +'%H:%M:%S'`"; done