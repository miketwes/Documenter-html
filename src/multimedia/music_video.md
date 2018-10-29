# music and video

## Deadbeef

### build

    sudo aptitude install build-essential subversion git-core yasm \
    intltool libgtk-3-dev libgtk2.0-dev automake libtool libzip-dev \
    libgpac-dev libdirac-dev libgsm1-dev libschroedinger-dev \
    libspeex-dev libvorbis-dev libopenjpeg-dev libdc1394-22-dev \
    libsdl1.2-dev zlib1g-dev texi2html libfaac-dev libfaad-dev \
    libmp3lame-dev libtheora-dev  libopencore-amrnb-dev \
    libopencore-amrwb-dev libvpx-dev libfreetype6-dev \
    frei0r-plugins-dev librtmp-dev libaacplus-dev libx264-dev \
    libavdevice-dev libavfilter-dev libavformat-dev libavutil-dev \
    libxvidcore-dev libasound2-dev libpulse-dev libmad0-dev \
    libwavpack-dev libsndfile1-dev libcdio-dev libcddb2-dev \
    libsamplerate0-dev  libavformat-dev libcurl4-gnutls-dev \
    libdbus-1-dev libfaad-dev libimlib2-dev libmpg123-dev libasound2-dev  \
    libavcodec-dev libgtk-3-dev libjansson-dev libvdpau-dev libvdpau1 libvdpau-va-gl1
    
    dpkg -i libmac2_3.99-u4-b5-dmo1_i386.deb
    git clone https://github.com/Alexey-Yakovenko/deadbeef.git -b master soft/deadbeef
    cd deadbeef
    ./autogen.sh
    ./configure

### Deadbeef has no sound 

    rm -rf .config/deadbeef


## Flashplayer stand alone install 

    sudo aptitude install libnss3-1d
    wget -c http://fpdownload.macromedia.com/pub/flashplayer/updaters/11/flashplayer_11_sa_debug.i386.tar.gz
    tar xzf flashplayer_11_sa_debug.i386.tar.gz
    sudo mkdir -p /usr/lib/flashplayer
    sudo mv flashplayerdebugger /usr/lib/flashplayer/flashplayerdebugger
    sudo rm -rf /usr/bin/flashplayerdebugger
    sudo ln -s /usr/lib/flashplayer/flashplayerdebugger /usr/bin/flashplayerdebugger
    echo "[Desktop Entry]
    	Name=Flash Player Debugger
     	Exec=/usr/lib/flashplayer/flashplayerdebugger %U
     	MimeType=application/swf-flash;application/x-shockwave-flash;
    	Terminal=false
    	Type=Application
    	Categories=GTK;GNOME;AudioVideo;Player;Video;" > flashplayerdebugger.desktop
    sudo mv flashplayerdebugger.desktop /usr/share/applications/flashplayerdebugger.desktop
    sudo update-desktop-database
    flashplayerdebugger  



mplayer libdvdnavmini.so.4 not find
sudo mv /usr/lib/i386-linux-gnu/libdvdnav.so.4 /usr/lib/i386-linux-gnu/libdvdnavmini.so.4


摄像头测试软件webcam spcaview luvcview xawtv 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
GuvcViewer视频捕获软件是Linux平台上一款不可多得的视频捕捉程序,可以抓拍或录制视频
sudo aptitude install guvcviewer
sudo aptitude install xawtv
uvcvideo的模块
Linux UVC网站 http://www.ideasonboard.org/uvc/ 中有一个支持的设备列表，lsusb -v | grep ID



## combine video files into one file

merge flv files

    ffmpeg -f concat -i 100.txt -c copy 100.flv
    
    100.txt
    file '1.flv'
    file '2.flv'


mencoder merge video files

    mencoder -forceidx -of lavf -oac pcm -ovc copy -o output.flv 01.flv 02.flv 03.flv 04.flv
    mencoder -ovc lavc -lavcopts vcodec=mpeg4 -oac mp3lame 0.flv 1.flv（有几个写几个）-o  目标名.avi
    mencoder part1.flv part2.flv part3.flv -o all.flv -ovc copy -oac copy -of lavf -lavfopts format=flv   
    mencoder 2.mp4 2.mp4 3.mp4 -oac pcm -ovc copy -o output.mp4


 
## extract audio from flv adn f4v to mp3
 
    sudo aptitude install avidemux vlc smplayer   
 


## [视频文件处理命令行点滴](http://www.cnblogs.com/canmusic/archive/2012/10/09/2717428.html)

   1. 视频文件截图
   
    ffmpeg.exe -i "c:\test.mp4" -f image2 -ss 8 -vframes 1 -y "c:\test.bmp"
   
   -i 表示输入文件
   
   -f 表示输出文件格式
   
   -ss 表示截取第几秒的画面
   
   -vframes 表示截图的帧数
   
   -y 表示覆盖保存输出文件
   
   最后一个参数是ffmpeg的输出文件
   
   2. 获取视频文件播放时间以及分辨率等信息
   
    ffmpeg.exe -i "c:\test.avi"
   
   3. 获取MP4文件信息
   
    mp4box.exe "c:\test.mp4" -info
   
   4. F4V转MP4
   
    f4vpp.exe -i "c:\test.f4v" -o "c:\new.mp4" -v -f
   
   -i 输入文件
   
   -o 输出文件
   
   -v 显示转换过程
   
   -f 覆盖保存输出文件
   
   ffmpeg.exe -i "c:\test.f4v" -y -codec copy "c:\new.mp4"
   
   -codec copy 表示保留原有视频编码信息不变进行转换
   
   5. MP4文件合并
   
    mp4box.exe -force-cat -cat "c:\a.mp4" -cat "c:\b.mp4" -cat "c:\c.mp4" -new "c:\output.mp4"
   
   -force-cat 表示强制合并操作（mp4合并文件中的视频和音频信息需要相同，否则会有问题）
   
   -new 覆盖保存输出文件
   
   6. 按固定时间长度分割MP4文件
   
    mp4box.exe -split 60 "c:\test.mp4"
   
   单位（秒），一分钟一个MP4文件进行分割
   
   输出文件自动保存在输入文件相同的目录下
   
   7. 按固定文件大小分割MP4文件
   
    mp4box.exe -splits 1024 "c:\test.mp4"
   
   单位（KB），1MB一个MP4文件进行分割
   
   最大分割大小为600MB
   
   8. 按时间段截取MP4文件
   
    mp4box.exe -splitx 0:64 "c:\test.mp4"
   
   单位（秒），从第0秒到第64秒截取MP4文件

 

相关工具下载地址：

ffmpeg：http://www.ffmpeg.org/download.html

mp4box：http://gpac.wp.mines-telecom.fr/

f4vpp：http://www.adobe.com/go/fms_tools_samples/




mplayer -vo null -ao null -frames 0 -identify 0002-墙头记.flv


Concatenate two mp4 files using ffmpeg
http://stackoverflow.com/questions/7333232/concatenate-two-mp4-files-using-ffmpeg

concat demuxer

$ cat mylist.txt
file '/path/to/file1'
file '/path/to/file2'
file '/path/to/file3'

$ ffmpeg -f concat -i mylist.txt -c copy output

Joining H264 *without* re-encoding
http://superuser.com/questions/133413/joining-h264-without-re-encoding

么把H264编码的F4V文件不重新编码封装成MP4文件？
http://zhidao.baidu.com/question/222520176.html
ffmpeg -i 输入文件.f4v -vcodec copy -acodec copy 输出文件.mp4


土豆网下载的f4v无损转AAC无损转换M4A格式
http://sulisu.wordpress.com/2011/04/16/%E5%9C%9F%E8%B1%86%E7%BD%91%E4%B8%8B%E8%BD%BD%E7%9A%84f4v%E6%97%A0%E6%8D%9F%E8%BD%ACaac%E6%97%A0%E6%8D%9F%E8%BD%AC%E6%8D%A2m4a%E6%A0%BC%E5%BC%8F/


    https://pan.baidu.com/s/1skUWHm1
    https://blog.csdn.net/kangkermit/article/details/38057503
    sudo apt-get install bchunk

然后，然后，bchunk filename.bin filename.cue filename.iso

BIN (or  BIN + CUE )：

可以用 cdemu 挂载，也可以用 bin2iso 转换成 iso 再挂载，也可以 bchunk 转换 bin+cue 到 iso 。
linux系统挂载光盘镜像ISO的方法
http://www.jb51.net/os/RedHat/1050.html

https://askubuntu.com/questions/4158/how-do-i-mount-cue-file

### Flacon - Audio File Encoder

https://flacon.github.io/

echo "deb http://download.opensuse.org/repositories/home:/Sokoloff/Debian_9.0 ./" > /etc/apt/sources.list.d/flacon.list
wget http://download.opensuse.org/repositories/home:/Sokoloff/Debian_9.0/Release.key -O- | apt-key add -
apt-get update
apt-get install flacon

Flacon extracts individual tracks from one big audio file containing the entire album of music and saves them as separate audio files.

To do this, it uses information from the appropriate CUE file. Besides, Flacon makes it possible to conveniently revise or specify tags both for all tracks at once or for each tag separately.
Features

    Supported input formats: WAV, FLAC, APE, WavPack, True Audio (TTA).
    Supported out formats: FLAC, WAV, WavPack, AAC, OGG or MP3.
    Replay Gain analysis (album-gain and track-gain modes).
    Multi-threaded conversion process.
    Automatic character set detection for CUE files.
    Generation of the pertrack CUE file in the output dir.

