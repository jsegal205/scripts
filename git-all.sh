#!/bin/bash

if [ "$1" == "" ]; then
  echo "Directory path not passed as arg"
  exit 0
fi

cd $1

for dir in */; do
  echo "$1/$dir"
  cd "$1/$dir"
  git pull
done
