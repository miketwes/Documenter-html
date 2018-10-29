# Graphics


## Imagemagick

    convert -strip -interlace Plane -gaussian-blur 0.05 -quality 85% source.jpg result.jpg
    du -h image_compressed.jpg
    convert -quality 50 1.jpg image_compressed.jpg
    convert -resize 80%x80%  1.png n.png

## Gs rotation view:

    gs -dEPSCrop -c "<</Orientation 3>> setpagedevice" -f file.ps -c quit

## screen capture

scrot // (SCReen shOT)  commandline screen capture utility 

    scrot '%Y-%m-%d_$wx$h.png' -s -e 'mv $f ~/download/'

Ubuntu下截图设置 http://hi.baidu.com/icexile/item/473d9ed3e62a674efb5768b3
　　会附带安装上giblib1 libimlib2两个包，安装完成之后，
在shell中执行就自动截下当前全屏的图，并保存在用户home目录了，先看一下常用参数：
  -b 截取窗口时保存带窗口边框的图片
　　-d n 延迟n秒截图
　　-c 配合上一个参数使用，显示延迟倒计时
　　-e app 截图之后对所截图片$f执行app操作
　　-q 75/100 设置图像精度，默认75，最大100，不过一般用png图片格式的时候应该用不到了
　　-s 手动选择截图区域或者窗口

## [图像查看器 by alan]( http://burnyfox.hostzi.com/?p=508 )

gimp inkscape 
xfce自带了一个图像查看器Ristretto，一直觉得看图不清晰，
同样的png图片在firefox下显示清楚多了，用Ristretto看总觉得雾蒙蒙的。
今天试了下别的看图软件GpicView和mcomix，同样比Ristretto清晰，跟firefox一样；
看了下Ristretto也没有相关设置项，干脆卸载换掉。不过Comix不支持动态gif，
把GpicView和mcomix都装上了，GpicView对付gif和临时看图，mcomix看漫画之类的多图。
今天发现gpicview有个bug，就是打开一张大图选择原比例显示后不能滚动，
缩小或者放大一点就可以了，换成gthumb了。
更新：又换了，gthumb打开太慢了，试了下mirage、geeqie、gqview、feh、sxiv和qiv，
都不满意，大部分不支持gif动态图，mirage倒是支持gif但是在我这也很慢。最后试了下eog，
简单、快、支持gif、快捷键方便，就它了。


Converting RAW files to JPGs


exiftool -fileOrder DateTimeOriginal -b -previewImage -w  <name>.jpg -ext CR2  <CR2's location>

#!/usr/bin/python
# -*- coding: utf8 -*-
import os

# Grab all files inside subdirectories within the current directory 
search_files ="find . -name *.CR2"

# Loop through all found files
for source_file in os.popen (search_files):
  # Remove \n at end of found files
  source_file = source_file[:-1]
  
  print "Processing file " + source_file
  
  os.popen ("ufraw-batch --wb=camera --exposure=auto --out-type=jpeg --compression=96 --out-path=./processed_images " + source_file )
  
find . -type f -name '*.CR2' -print0 | while read -rd ''; do
  something-with "$REPLY"
done

raw_convert()
{
if [ ! -d ./processed_images ]; then mkdir ./processed_images; fi;

# processes raw files
for f in *.CR2;
do
	echo "Processing $f"
	ufraw-batch \
		--wb=camera \
		--exposure=auto \
		--out-type=jpeg \
		--compression=96 \
		--out-path=./processed_images \
		$f
done

cd ./processed_images

# change the image names
for i in *.jpg;
do
	mv "$i" "${i/.jpg}"_r.jpg;
done
for i in *.jpg;
do
	mv "$i" "${i/imgp/_igp}";
done
}

