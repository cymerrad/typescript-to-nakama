#!/usr/bin/env bash
set -e

CWD=$(dirname $0)
CWD=$(realpath $CWD)

testMocks=$CWD/../tests/mock

echo "Creating some folders in node_modules in order for tests to work."
nakama_dir=$CWD/../node_modules/nakama
vendor_thingy_dir=$CWD/../node_modules/vendor.utils

mkdir -p ${nakama_dir}
mkdir -p ${vendor_thingy_dir}
cp -r ${testMocks}/nakama/* ${nakama_dir}
cp -r ${testMocks}/vendor.utils/* ${vendor_thingy_dir}