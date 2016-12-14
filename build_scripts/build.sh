#!/bin/bash
set -e
morph install
node node_modules/bower/bin/bower install
grunt build
