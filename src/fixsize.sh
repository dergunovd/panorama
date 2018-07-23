#!/bin/bash
for file in $1/*.jpg
do
	if [ -d "$file" ]
	then
		echo "$file is a directory"
	elif [ -f "$file" ]
	then
		gm convert -size 1024x1024 $file -resize 1024x1024 +profile "*" $file
		echo "$file converted"
	fi
done
