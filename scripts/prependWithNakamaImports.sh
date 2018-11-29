#!/usr/bin/env bash

CWD=$(dirname $0)
CWD=$(realpath $CWD)

# we need to change some source files
cd $CWD/../src;

nk_require='const nk = require(\"nakama\");\nconst table = require(\"vendor.utils\");';

source_files=*.ts;

prepend() {
	awk_program='NR == 1 { $0 = "'$@'\n" $0 } { print }';
	awk "$awk_program";
}

truncate() {
	awk 'NR > 2 { print }'
}

operate_on_copies() {
	for file in $source_files; do
		cp $file $file.orig;
		cat $file.orig | prepend ${nk_require} > $file;
	done
}

bring_them_back() {
	for file in *.orig; do
		#cat $file | truncate > $file;
		mv $file ${file/.orig/}
	done
}

operate_on_copies

# just in case
trap "echo interrupted; cd -; bring_them_back; exit 1" 2

cd - # restoring CWD
# inbetween these loops we can perform whatever we like
eval $@
cd -

bring_them_back