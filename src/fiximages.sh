#!/bin/bash
for file in $1/room*/*.jpg
do
	if [ -d "$file" ]
	then
		echo "$file is a directory"
	elif [ -f "$file" ]
	then
		gm convert -size 1024x1024 $file -resize 1024x1024 +profile "*" $file
		echo "$file resized"
        cwebp -q 100 $file -quiet -o "${file%.*}.webp"
        echo "$file conwerted to webp"
	fi
done
