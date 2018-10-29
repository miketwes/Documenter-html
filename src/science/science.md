=================
Science
=================

$ sudo jupyter kernelspec install ./SageMath/local/share/jupyter/kernels/sagemath
$ jupyter kernelspec install --user ./SageMath/local/share/jupyter/kernels/sagemath

sudo aptitude purge fcitx ibopencc2  libfcitx-qt0  fcitx-libs-qt libopencc2  fcitx-libs libqt4-declarative libqtwebkit4 sogoupinyin

ibus  ibus-pinyin im-config ibus-sunpinyin fcitx-ui-light

export GTK_IM_MODULE=ibus
export XMODIFIERS=@im=ibus
export QT_IM_MODULE=ibus
export PIP_CONFIG_FILE=$HOME/.pip2/pip2.conf
export PYTHONPATH=$PYTHONPATH:/home/mike/pip2_lib
ibus-setup fcitx-config-gtk3

https://github.com/kimwalisch/primecount

https://github.com/miketwes/Documenter-html.git

https://raw.githubusercontent.com/hotoo/pinyin/master/data/phrases-dict.js

Install Qt 5.0.2
_______________________________________
::
http://download.qt-project.org/official_releases/qt/5.0/

    ./qt-linux-opensource-5.0.2-x86-offline.run
    ln -s /home/qt/Tools/QtCreator/bin/qtcreator /usr/bin/qt

If run Qt5.0.2 qtcreator :  /usr/bin/ld:cannot find -lGL/
but libgl1-mesa-dev already installed::

    apt-get --reinstall install libgl1-mesa-dev

GMT 5 install
_______________________________________
::

    aptitude install Subversion ghostscript build-essential cmake libnetcdf-dev libgdal1-dev
    svn checkout svn://gmtserver.soest.hawaii.edu/gmt5/trunk gmt-dev
    wget ftp://ftp.soest.hawaii.edu/pwessel/gshhs/gshhg-gmt-nc4-2.2.2.tar.gz
    tar xvj gshhg-gmt-nc4-2.2.2.tar.gz
    mv gshhg-gmt-nc4-2.2.2/* /home/gmt/share/coast
    cd gmt-dev
    cp cmake/ConfigUserTemplate.cmake  cmake/ConfigUser.cmake
    
    nano cmake/ConfigUser.cmake
    set (CMAKE_INSTALL_PREFIX /opt/gmt)
    set (GSHHG_ROOT <path to>/coast)
    set (FLOCK TRUE)
    
    mkdir build
    cd build
    cmake ..
    make
    make manpages_all
    make install
    
    nano /etc/profile
    export GMTHOME=/home/gmt
    export PATH=${GMTHOME}/bin:$PATH



==== Gs rotation view:  ====

    gs -dEPSCrop -c "<</Orientation 3>> setpagedevice" -f file.ps -c quit



==== PARI/GP ====

    http://pari.math.u-bordeaux.fr/pub/pari/unstable/pari-2.6.0.alpha.tar.gz
    
    tar -zxvf pari-2.6.0.alpha.tar.gz
    cd pari-2.6.0.alpha
    ./Configure --prefix=/home/pari
    make
    make install
    ln -s /home/pari/bin/gp-2.6 /usr/bin/pari

    libx11-6 gmp libfltk1.3 libfltk-gl1.3 gfortran libgfortran3

    libfltk1.1-dev libx11-dev libreadline-dev libgmp-dev

    dpkg -l | grep readline
    libreadline-dev:i386  7.0-5      GNU readline and history libraries, development files
    libreadline7:i386   
    php7.2-readline readline module for PHP
    readline-common

    git clone http://pari.math.u-bordeaux.fr/git/pari.git
    cd pari
    sudo aptitude install bison
    ./Configure --prefix=/home/mike/soft/pari_git
    make all
    make install

==== Sage ====

sudo aptitude install npm
sudo npm install -g configurable-http-prox

sudo jupyter kernelspec install soft/SageMath/local/share/jupyter/kernels/sagemath
/home/mike/soft/SageMath/sage -n jupyter

cd soft/SageMath
./sage --notebook ipython
new python2
from sage.all import *
P = Primes()
P.first()
2

pkill node

jupyterhub --no-ssl -f /home/mike/jupyterhub_config.py


ls /usr/bin/nodejs 
sudo ln -s /usr/bin/nodejs /usr/bin/node

sudo pip3 install --upgrade "ipython[all]"


sudo pip3 install jupyterhub
sudo pip3 install notebook
jupyter-kernelspec list


a=79
b=359
c=259
r = (a*b*c)/(sqrt((a+b+c)*(b+c-a)*(c+a-b)*(a+b-c)))
print(r)
((a*b*c)/(sqrt((a+b+c)*(b+c-a)*(c+a-b)*(a+b-c)))).n()
numerical_approx(r)

l = [(0, 0), (1, 1), (2, 5), (3, 8)]
a = line(l, marker='o',markersize=10,markerfacecolor='white', legend_label='circle',  axes=True)
t = sum([text(str(i[1]),i) for i in l])
a + t

l1 = [2, 3, 5, 8]
t2 = sum([text(str(l1[i]),(i, l1[i])) for i in range(0, len(l1))])
a1 = list_plot(l1,plotjoined=True, marker='o',markersize=10,markerfacecolor='white')

a1 + t2 

==== Install PHP ====

    install PHP from packages
    
    sudo aptitude install php5-dev php5-gd php5-sqlite
    
    dpkg -l | grep php
    php -i |grep php\.ini
    sudo geany  /etc/php5/cli/php.ini
    
        error_log = /home/usrname/php_errors.log
        
        extension_dir = "/usr/lib/php5/20121212/"
        ;   extension=modulename.extension
    
        extension=pdo.so
        extension=gd.so
        
     [opcache]
    zend_extension = opcache.so
    opcache.enable=1
    opcache.enable_cli=1
    opcache.memory_consumption=64
    opcache.interned_strings_buffer=8
    opcache.max_accelerated_files=2000
    opcache.max_wasted_percentage=5
    opcache.revalidate_freq=2
    opcache.fast_shutdown=1
    opcache.use_cwd=1
    opcache.save_comments=1
    opcache.revalidate_path=0
    opcache.validate_timestamps=1
    opcache.load_comments=1
    opcache.enable_file_override=0
    opcache.optimization_level=0xffffffff
    opcache.inherited_hack=1
    opcache.dups_fix=0
    opcache.max_file_size=0
    opcache.consistency_checks=0
    opcache.force_restart_timeout=180
    opcache.error_log= /home/mike/errors.log
    opcache.log_verbosity_level=1
    opcache.preferred_memory_model=""
    opcache.protect_memory=0
    tab-width: 4          
     
    // buiild PHP from source
    apt-get install libxml2-dev
    tar xjf php-5.5.0RC3.tar.bz2
    cd php-5.5.0RC3
    ./configure --prefix=/home/php
    make
    make install
    ln -s /home/php/bin/php /usr/bin/php
    cp php.ini-production /home/php/lib/php.ini
    nano /home/php/lib/php.ini
    
    // Add php GD library
    
          tar xvfJ php-5.5.0RC3.tar.xz
          cd php-5.5.0RC3/ext/gd
          /home/php/bin/phpize      
         ./configure  --with-gd=shared --with-jpeg-dir=/usr --with-zlib --with-php-config=/home/php/bin/php-config
          make
          find -name "gd.so"
          cp /home/username/download/php-5.5.0RC3/ext/gd/modules/gd.so /home/php/lib/php/extensions
    
          gedit /home/php/lib/php.ini
         ; Dynamic Extensions ;
          extension=/home/php/lib/php/extensions/gd.so
    
    // Run PHP Built-in web server
    
    php -S 0.0.0.0:8080 -t /home/web
    
    
    
PHP Math_Matrix  and  Math_Vector
_______________________________________
::   
    
    svn checkout https://github.com/pear/Math_Vector.git/trunk
    svn checkout https://github.com/pear/Math_Matrix.git/trunk
    
    
    unzip Math_Matrix-Vector.zip
    unzip  Math_Vector-master.zip
    
    cd Math_Matrix-master
    sudo pear install package.xml
    nano package.xml
    sudo pear uninstall Math_Vector 
    
    cd Math_Vector-master
    sudo pear install package.xml
    nano geany package.xml
    sudo pear install package.xml
    
    PHP bot
    
    if(isset($_SERVER['HTTP_USER_AGENT'])){
       $agent = $_SERVER['HTTP_USER_AGENT'];
    }
    
    if(preg_match('/^Googlebot/i',$agent)){
       http_response_code(301);
       header("HTTP/1.1 301 Moved Permanently");
       header("Location: http://www.google.com/");
       exit;
    }
    
Install Qt 5.0.2
_______________________________________
::
    
    http://download.qt-project.org/official_releases/qt/5.0/
    ./qt-linux-opensource-5.0.2-x86-offline.run
    ln -s /home/qt/Tools/QtCreator/bin/qtcreator /usr/bin/qt
    
    // If run Qt5.0.2 qtcreator : /usr/bin/ld:cannot find -lGL/
    but libgl1-mesa-dev already installed
    apt-get --reinstall install libgl1-mesa-dev
    
    
Install GMT The Generic Mapping
_______________________________________
::
    
    gmt gmt-common{a} gmt-dcw{a} gmt-doc{a} gmt-gshhg-low{a} 
    libfftw3-single3{a} libgmt5{a}
    
Building GMT from source::
    http://gmt.soest.hawaii.edu/projects/gmt/wiki/BuildingGMT
    
    sudo aptitude install git-core git-arch git-cvs git-daemon-run git-doc git-email git-gui git-svn gitk gitweb  openssh-client rsync patch less
    sudo aptitude install libcurl4-gnutls-dev libexpat1-dev gettext libz-dev libssl-dev build-essential
    sudo aptitude install Subversion ghostscript build-essential cmake libnetcdf-dev libgdal1-dev libfftw3-3 curl gawk libpcre3
    
    svn checkout svn://gmtserver.soest.hawaii.edu/gmt5/trunk gmt-dev
    wget -c ftp://ftp.soest.hawaii.edu/pwessel/gshhg/gshhg-gmt-nc4-2.2.4.tar.gz
    wget -c ftp://ftp.soest.hawaii.edu/dcw/dcw-gmt-1.1.0.tar.gz
    
    tar xzf gshhg-gmt-nc4-2.2.4.tar.gz
    tar xzf dcw-gmt-1.1.0.tar.gz
    
    mkdir -p gmt5/share/coast
    mkdir -p gmt5/share/dcw
    
    mv gshhg-gmt-nc4-2.2.4/* gmt5/share/coast
    mv dcw-gmt-1.1.0/* gmt5/share/dcw
    
    cd gmt-dev
    cp cmake/ConfigUserTemplate.cmake  cmake/ConfigUser.cmake
    
    nano cmake/ConfigUser.cmake
    
    set (CMAKE_INSTALL_PREFIX /home/username/gmt5)
    set (GSHHG_ROOT /home/username/gmt5/share/coast)
    set (DCW_ROOT /home/username/gmt5/share/dcw)
    set (FLOCK TRUE)
    
    mkdir build
    cd build
    cmake ..
    make
    sudo make install
    sudo nano /etc/profile
    
    export GMTHOME=/home/gmt5
    export PATH=${GMTHOME}/bin:$PATH
    
    source /etc/profile
    
    nano gmt5/share/conf/gmt.conf
    DIR_TMP                         = /home/username
    DIR_USER                        = /home/username
    
    Test GMT :
    pscoast -R-30/30/-40/40 -Jm0.1i -B5 -I1/1p,blue -N1/0.25p  -I2/0.25p,blue -W0.25p,white -Ggreen -Sblue -P > africa.ps
    
    ps2pdf africa.ps af.pdf
    fox af.pdf
    
    //Topographic maps
    wget -c ftp://topex.ucsd.edu/pub/global_topo_1min/topo_16.1.img
    
    
Linux Java
_______________________________________
::
    
    sudo apt-get purge openjdk-\*
    tar xzf jdk-7u45-linux-i586.tar.gz
    sudo nano /etc/profile
    sudo update-alternatives --install "/usr/bin/java" "java" "/home/java/jdk1.7.0_45/bin/java" 1 
    sudo update-alternatives --install "/usr/bin/javac" "javac" "/home/java/jdk1.7.0_45/bin/javac" 1 
    sudo update-alternatives --install "/usr/bin/javaws" "javaws" "/home/java/jdk1.7.0_45/bin/javaws" 1 
    sudo update-alternatives --set java /home/java/jdk1.7.0_45/bin/java
    sudo update-alternatives --set javac /home/java/jdk1.7.0_45/bin/javac 
    sudo update-alternatives --set javaws /home/java/jdk1.7.0_45/bin/javaws
     
    /etc/profile
     
    JAVA_HOME=/home/java/jdk1.7.0_45
    PATH=$PATH:$HOME/bin:$JAVA_HOME/bin
    export JAVA_HOME
    export PATH
        
    cd $JAVA_HOME/bin
    chmod a+x java
    sudo update-alternatives --config java
     
    cd ./usr/lib/mozilla/plugins/
    sudo ln -s /home/java/jdk1.7.0_45/jre/lib/i386/libnpjp2.so
     
Wallproxy
_______________________________________
::
    
    svn checkout https://github.com/wallproxy/wallproxy
    nano wallproxy/trunk/server/uploader.zip/appcfg.py
    #fancy_urllib._create_connection = socket.create_connection
    python wallproxy/trunk/server/uploader.zip
    nano wallproxy/trunk/local/proxy.ini
    
goagent
_______________________________________
::
    
    sudo aptitude install  libnss3-tools
    mkdir -p $HOME/.pki/nssdb
    certutil -d $HOME/.pki/nssdb -N
    certutil -d sql:$HOME/.pki/nssdb -L
    certutil -d sql:$HOME/.pki/nssdb -A -t "C,," -n GoAgent -i /home/username/goagent/local/CA.crt
    
    sudo cp /home/username/goagent/local/CA.crt /usr/share/ca-certificates/mozilla/goagent.crt
    sudo chmod a+r /usr/share/ca-certificates/mozilla/goagent.crt
    sudo dpkg-reconfigure ca-certificates
    
使用Chromeium浏览器如果手动导入证书出错，可采用如下方式：
    一，上google plus, twitter等网站遇到“the site's security certificate is not trusted ****”此类错误提示。其实这是因为goagent证书没有导入到系统的证书库中，而Google Chrome浏览器本身无法导入证书（这与Firefox不同），它使用系统的证书库。为此，需要我们手动导入。
    1，安装证书导入工具：
    sudo apt-get install libnss3-tools
    2, 将goAgent文件夹内的证书文件CA.crt导入(下面中括号内是证书的绝对路径，因人而异，注意)
    certutil -d sql:$HOME/.pki/nssdb -A -t TC -n "goagent" -i [/path/to/goagent/local/CA.crt]
    之后重新打开G+等就没有提示证书错误了。
    二，google plus的图标显示不正常。据说原因是因为这些图像保存在googleusercontent.com域，需要重新设置host ip。
    1，root下打开host文件：sudo gedit /etc/hosts
    2，把以下内容添加到host文件：173.194.38.143 ssl.gstatic.com
    3，在goagent添加新规则：*://gstatic.com/*
    之后刷新下就OK啦～
    
XX-net
_______________________________________
::   
    
    git clone https://github.com/XX-net/XX-Net.git -b master soft/xnet
    git pull
    sudo aptitude install libssl1.0.0 libssl-dev    
   
Obspy
_______________________________________
::    
    sudo aptitude install python-numpy  python-scipy python-matplotlib
    sudo aptitude install python-pyephem
    sudo aptitude install python-stdeb
    cd pyephem-3.7.5.2/
    sudo python setup.py install
    sudo aptitude install python python-dev python-setuptools python-numpy python-numpy-abi9 python-scipy python-matplotlib python-lxml python-sqlalchemy  python-suds gfortran libgfortran3 ipython
    wget http://nightly.ziade.org/distribute_setup.py
    sudo python distribute_setup.py
    
    sudo easy_install -U distribute
    sudo easy_install obspy
    sudo easy_install -U obspy==dev     
     
    lsb_release -cs
    lsb_release -a
    No LSB modules are available.
    Distributor ID: Debian
    Description:    Debian GNU/Linux unstable (sid)
    Release:        unstable
    Codename:       sid
    
    
    nano /etc/apt/sources.list
    
    deb http://deb.obspy.org CODENAME main 
    
    
    sudo dpkg -l | grep obspy
    ii  python3-obspy                          
    1.0.1-1~jessie                    i386         
    ObsPy: A Python Toolbox for seismology
    
    wget --quiet -O - https://raw.github.com/obspy/obspy/master/misc/debian/public.key | sudo apt-key add -
    
    
    
    deb http://mirrors.163.com/debian/ sid main contrib non-free
    deb-src http://mirrors.163.com/debian/ sid main contrib non-free
    deb http://mirrors.163.com/debian-security jessie/updates main contrib non-free
    deb http://security.debian.org/ jessie/updates main contrib
    deb-src http://security.debian.org/ jessie/updates main contrib
    deb  http://debian.ustc.edu.cn/debian-multimedia/ sid main non-free
    deb http://deb.obspy.org jessie main
     
    sudo aptitude install python3-obspy
     
    cd obspy
    pip install -e .
     
    pyflakes pyflakes3 python-mpltoolkits.basemap-data 
    python-pyflakes python3-flake8 
    python3-funcsigs python3-geographiclib python3-mccabe 
    python3-mock python3-mpltoolkits.basemap
    python3-pbr python3-pep8 python3-pyflakes
     

==== AES_Crypt ====

aescrypt -e -p apples picture.jpg

aescrypt -d -p apples picture.jpg.aes

tar -cvf - /home | aescrypt -e -p apples - >backup_files.tar.aes

In all of the examples above, the password is provided on the command line. Since there are certain risks associated with that kind of usage, it may be preferred to let aescrypt prompt you to enter the password. This can be accomplished simply by not including the -p parameter, like this:

aescrypt -d picture.jpg.aes //AES Crypt will prompt you for the password

aescrypt -d -o - passwords.txt.aes //have it displayed on the screen and not stored in a plaintext file

aescrypt_keygen -p apples secret.key

tar -cvf - /home | aescrypt -e -k secret.key - >backup_files.tar.aes

cd ~/soft/aescrypt-3.0.9/src
./aescrypt_keygen -p password A.key
./aescrypt -e -k A.key /home/mike/project/weblink/txt/g.txt -o /home/mike/project/weblink/txt/g.aes
./aescrypt -d -k A.key /home/mike/project/weblink/txt/g.aes -o /home/mike/project/weblink/txt/g.txt



Debian下成功安装latex
2018年01月06日 07:32:51 mec_zhang 阅读数：115
版权声明：欢迎访问我的博客 www.meczhang.com www.zhyuntao.com https://blog.csdn.net/mec_zhang/article/details/78986391

今日成功在Debian9下安装成功texlive-base。
#apt-get install texlive-latex-base
#apt-get install latex-cjk-chinese
首先建立一个源文件
vim test.tex
输入内容如下
\documentclass{article}
\begin{document} 
hello 
\end{document}

命令行输入
latex test.tex
生成test.dvi文件
可通过xdvi查看之。
dvipdf test.dvi
dvips test.dvi
以上命令可生成pdf文件和ps文件。


 在Debian上搞定中文Latex（原来这么简单）

分类： LINUX

2008-11-11 11:07:34

之前有弄过一次，没有成功，刚才忘记弄个什么东西，突然又看到latex-cjk，就找了下资料[1]，原来这么简单，只是当时设置字体的时候搞错了而已，晕死。虽然后面的资料有详细步骤，我还是再记录一下吧（万一那个地址访问不了怎么办！）。
   
    首先，安装下面几个包。

$ sudo apt-get install latex-cjk-common latex-cjk-chinese latex-cjk-chinese-arphic-bkai00mp latex-cjk-chinese-arphic-bsmi00lp latex-cjk-chinese-arphic-gbsn00lp latex-cjk-chinese-arphic-gkai00mp


    后面四个是字体包，字体包中以b开头的是big5的，以g开头的是gb2312（gbk?不清楚，反正是大陆的)的。

    接着就是写个简单的测试文档。
Code:
\documentclass[12pt]{article}
\usepackage{CJK} %使用CJK套件
\begin{document}
\begin{CJK}{UTF8}{gbsn} %开始CJK环境，设定编码，设定字体
中文测试。 This is a test.
\end{CJK} %有始有終
\end{document}

[Ctrl+A Select All]
    不过字体确实少了点，呵呵，如果想用繁体，貌似只有字体bsmi，并且需要用big5编码。
    需要注意的是，设置的字体名应该是那个字体包中的名字，比如bkai, bsmi, gbsn, gkai，以前我直接设置成了song，那样子不工作，因为根本就没有song这个字体，呵呵。

    最后，我们编译一下，然后用evince看看。

$ pdflatex test.tex
$ evince test.pdf

    大功告成！以后有时间就用latex-cjk来整理文档了。


Debian下成功安装latex
96 MecZhang
2017.01.24 21:24* 字数 96 阅读 67评论 0喜欢 0

今日成功在Debian9下安装成功texlive-base。
#apt-get install texlive-latex-base
#apt-get install latex-cjk-chinese
首先建立一个源文件
vim test.tex
输入内容如下
\documentclass{article}
\begin{document}
hello
\end{document}
命令行输入
latex test.tex
生成test.dvi文件
可通过xdvi查看之。
dvipdf test.dvi
dvips test.dvi
以上命令可生成pdf文件和ps文件。

aptitude search ~n^texlive


sudo /etc/init.d/miredo start
mike@ecs:~/soft/XX-Net-Linux/local$ export PIP_CONFIG_FILE=$HOME/.pip2/pip2.conf 
mike@ecs:~/soft/XX-Net-Linux/local$ export PYTHONPATH=$PYTHONPATH:/home/mike/pip2_lib
cd  ~/soft/XX-Net-Linux/local && python2.7 proxy.py

: 
