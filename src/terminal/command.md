# command

## Linux Terminal Command Reference

### System Info

    date – Show the current date and time
    cal – Show this month's calendar
    uptime – Show current uptime
    w – Display who is online
    whoami – Who you are logged in as
    finger user – Display information about user
    uname -a – Show kernel information
    cat /proc/cpuinfo – CPU information
    cat /proc/meminfo – Memory information
    df -h – Show disk usage
    du – Show directory space usage
    free – Show memory and swap usage

### Keyboard Shortcuts

    Enter – Run the command
    Up Arrow – Show the previous command
    Ctrl + R – Allows you to type a part of the command you're looking for and finds it
    
    Ctrl + Z – Stops the current command, resume with fg in the foreground or bg in the background
    Ctrl + C – Halts the current command, cancel the current operation and/or start with a fresh new line
    Ctrl + L – Clear the screen
    
    command | less – Allows the scrolling of the bash command window using Shift + Up Arrow and Shift + Down Arrow
    !! – Repeats the last command
    command  !$ – Repeats the last argument of the previous command
    Esc + . (a period) – Insert the last argument of the previous command on the fly, which enables you to edit it before executing the command
    
    Ctrl + A – Return to the start of the command you're typing
    Ctrl + E – Go to the end of the command you're typing
    Ctrl + U – Cut everything before the cursor to a special clipboard, erases the whole line
    Ctrl + K – Cut everything after the cursor to a special clipboard
    Ctrl + Y – Paste from the special clipboard that Ctrl + U and Ctrl + K save their data to
    Ctrl + T – Swap the two characters before the cursor (you can actually use this to transport a character from the left to the right, try it!)
    Ctrl + W – Delete the word / argument left of the cursor in the current line
    
    Ctrl + D – Log out of current session, similar to exit

### Learn the Commands

    apropos subject – List manual pages for subject
    man -k keyword – Display man pages containing keyword
    man command – Show the manual for command
    man -t man | ps2pdf - > man.pdf  – Make a pdf of a manual page
    which command – Show full path name of command
    time command – See how long a command takes
    
    whereis app – Show possible locations of app
    which app – Show which app will be run by default; it shows the full path

### Searching

    grep pattern files – Search for pattern in files
    grep -r pattern dir – Search recursively for pattern in dir
    command | grep pattern – Search for pattern in the output of command
    locate file – Find all instances of file
    find / -name filename – Starting with the root directory, look for the file called filename
    find / -name ”*filename*” – Starting with the root directory, look for the file containing the string filename
    find . -exec mv {} /foo \;
find 大王*/ -type f -name "*.gif"  -exec mv {} ~/t/45/king_gif \;
find /root/directory/to/search -name 'filename.*'
find . -type f -name 'btree*.c'
find / -size +700M
find . -type f -name "*.jpeg"  -exec mv {} ~/t/45/pngx \;
find . -type f -name "*.pyc"  -exec rm {} \;

find /src/dir/ -mtime +14 -size +10k -printf %P\\0 | rsync --files-from=- --from0 /src/dir/ /dst/dir/
rsync -a -v --ignore-existing src dst
find . -type f -mtime -2 -exec rsync -av -R {} /destination/ \;
find 大王爆笑*/ -type f -name "*"  -exec rsync -a -v --ignore-existing -R {} ~/t/52/king_gif \;
find 大王爆笑*/ -type f -name "*"  -exec rsync -a -q --ignore-existing -R {} ~/t/52/king_gif \;
find /home/mike/t/51/gif1/ -type f -name "*jpg"  -exec  mv {} ~/t/52/jpg2 \;


cd /
find -name *libcurl.so*    
    
    locate filename – Find a file called filename using the locate command; this assumes you have already used the command updatedb (see next)
    updatedb – Create or update the database of files on all file systems attached to the Linux root directory
    which filename – Show the subdirectory containing the executable file  called filename
    grep TextStringToFind /dir – Starting with the directory called dir, look for and list all files containing TextStringToFind

### File Permissions

chmod octal file – Change the permissions of file to octal, which can be found separately for user, group, and world by adding: 4 – read (r), 2 – write (w), 1 – execute (x)
Examples:
    chmod 777 – read, write, execute for all
    chmod 755 – rwx for owner, rx for group and world
For more options, see man chmod.

### File Commands

    ls – Directory listing
    ls -l – List files in current directory using long format
    ls -laC – List all files in current directory in long format and display in columns
    ls -F – List files in current directory and indicate the file type
    ls -al – Formatted listing with hidden files
    
    cd dir – Change directory to dir
    cd – Change to home
    mkdir dir – Create a directory dir
    pwd – Show current directory
    
    sudo rm /var/cache/apt/archives/*.deb
    rm name – Remove a file or directory called name
    rm -r dir – Delete directory dir
    rm -f file – Force remove file
    rm -rf dir – Force remove an entire directory dir and all it’s included files and subdirectories (use with extreme caution)
    
    cp -R t1/. t2/ //Copy files from one directory into an existing directory
    cp file1 file2 – Copy file1 to file2
    cp -r dir1 dir2 – Copy dir1 to dir2; create dir2 if it doesn't exist
    cp file /home/dirname – Copy the filename called file to the /home/dirname directory
    
    mv file /home/dirname – Move the file called filename to the /home/dirname directory
    mv file1 file2 – Rename or move file1 to file2; if file2 is an existing directory, moves file1 into directory file2
    
    ln -s file link – Create symbolic link link to file
    touch file – Create or update file
    cat > file – Places standard input into file
    cat file – Display the file called file
    
    more file – Display the file called file one page at a time, proceed to next page using the spacebar
    head file – Output the first 10 lines of file
    head -20 file – Display the first 20 lines of the file called file
    tail file – Output the last 10 lines of file
    tail -20 file – Display the last 20 lines of the file called file
    tail -f file – Output the contents of file as it grows, starting with the last 10 lines

### Compression

    tar cf file.tar files – Create a tar named file.tar containing files
    tar xf file.tar – Extract the files from file.tar
    
    tar czf file.tar.gz files – Create a tar with Gzip compression
    tar xzf file.tar.gz – Extract a tar using Gzip
    
    tar cjf file.tar.bz2 – Create a tar with Bzip2 compression
    tar xjf file.tar.bz2 – Extract a tar using Bzip2
    
    tar xvj gshhg-gmt-nc4-2.2.2.tar.gz
    tar xvf 3.10.4 #tar.gz f before file name
    tar xjf php-5.5.0RC3.tar.bz2
    tar xvfJ php-5.5.0RC3.tar.xz
    tar -zxvf pari-2.6.0.alpha.tar.gz
    tar xzf gshhg-gmt-nc4-2.2.4.tar.gz
    tar xzf dcw-gmt-1.1.0.tar.gz
    tar -cvf - /home | aescrypt -e -p apples - >backup_files.tar.aes
    tar -cvf - /home | aescrypt -e -k secret.key - >backup_files.tar.aes
    
    tar -xzf *.gz
linux下tar命令解压到指定的目录 ：
    #tar zxvf /bbs.tar.zip -C /zzz/bbs
//把根目录下的bbs.tar.zip解压到/zzz/bbs下，前提要保证存在/zzz/bbs这个目录
这个和cp命令有点不同，cp命令如果不存在这个目录就会自动创建这个目录！
 
tar xf file.tar.xz

You have to install xz-utils package first:

$ sudo apt-get install xz-utils
You can use unxz command to extract .xz files:

$ unxz file.xz
or using with --decompress option of xz:

$ xz --decompress file.xz


tar -xf file.name.tar -C /path/to/directory

GNU/tar Linux syntax:
tar xf file.tar -C /path/to/directory

OR
tar xf file.tar --directory /path/to/directory

Extract .tar.gz archive:
tar -zxf file.tar --directory /path/to/directory

Extract .tar.bz2/.tar.zx archive:
tar -jxf file.tar --directory /path/to/directory

Where,

x : Extract files
f : Tar archive name
--directory : Set directory name to extract files
-C : Set dir name to extract files
-j : Work on .tar.gz file format
-z : Work on .tar.bz2 file format
-v : Verbose output i.e. show progress on screen
Example: Extract files to another directory
In this example, I’m extracting $HOME/etc.backup.tar file to a directory called /tmp/data. First, you have to create the directory manually, enter:

mkdir /tmp/data
To extract a tar archive $HOME/etc.backup.tar into a /tmp/data, enter:

tar -xf $HOME/etc.backup.tar -C /tmp/data
To see a progress pass the -v option:

tar -xvf $HOME/etc.backup.tar -C /tmp/data
Extract .tar.gz/.tgz archive to specific folder
To extract a foo.tar.gz (.tgz extension file) tarball to /tmp/bar, enter:

mkdir /tmp/foo
tar -zxvf foo.tar.gz -C /tmp/foo
Extract .tar.bz2/.tbz2/.tb2/.tar.xz archive to specific directory
To extract a foo.tar.bz2 (.tbz, .tbz2 & .tb2 extension file) tarball to /tmp/bar, enter:

mkdir /tmp/bar
tar -jxvf bar.tar.bz2  -C /tmp/bar
 
 
 
        
    gzip file – Compresses file and renames it to file.gz
    gzip -d file.gz – Decompresses file.gz back to file
 
 UNZIP命令出错END-OF-CENTRAL-DIRECTORY SIGNATURE NOT FOUND


Archive: data.zip
End-of-central-directory signature not found. Either this file is not
a zipfile, or it constitutes one disk of a multi-part archive. In the
latter case the central directory and zipfile comment will be found on
the last disk(s) of this archive.
unzip: cannot find zipfile directory in one of bbs.zip or
data.zip.zip, and cannot find data.zip.ZIP, period.

出现这种情况，需要使用 7zip来解压

wget http://downloads.sourceforge.net/project/p7zip/p7zip/9.13/p7zip_9.13_src_all.tar.bz2?r=http://sourceforge.net/projects/p7zip/files/&ts=1283040874&use_mirror=voxel
tar -jxvf p7zip_9.13_src_all.tar.bz2
cd p7zip_9.13
make
make install

安装完成，

7za x data.zip

成功了


压文件大小为 2.2G，可能是 unzip 设置了这个限制吧。在网上查到要用 jar 来解

jar xvf trunk.zip

如果出现

jar:Command not found

要用yum下载

yum -y install java-1.6.0-openjdk-devel

再次运行

jar xvf trunk.zip

unrar
 
   1.查看rar包中的内容：
    #unrar l *.rar
   或者
    #unrar v *.rar
   
   2.测试rar包是否能解压成功：
    #unrar t *.rar
   
   3.解压到当前文件夹：
    #unrar e *.rar
   
   4.解压到指定文件夹：
    #unrar x *.rar /tmp 
 
 
    
## Printing

    /etc/rc.d/init.d/lpd start – Start the print daemon
    /etc/rc.d/init.d/lpd stop – Stop the print daemon
    /etc/rc.d/init.d/lpd status – Display status of the print daemon
    lpq – Display jobs in print queue
    lprm – Remove jobs from queue
    lpr – Print a file
    lpc – Printer control tool
    man subject | lpr – Print the manual page called subject as plain text
    man -t subject | lpr – Print the manual page called subject as Postscript output
    printtool – Start X printer setup interface
    
### Network

    ifconfig – List IP addresses for all devices on the local machine
    iwconfig – Used to set the parameters of the network interface which are specific to the wireless operation (for example: the frequency)
    iwlist – used to display some additional information from a wireless network interface that is not displayed by iwconfig
    ping host – Ping host and output results
    whois domain – Get whois information for domain
    dig domain – Get DNS information for domain
    dig -x host – Reverse lookup host
    wget file – Download file
    wget -c file – Continue a stopped download
   

### SSH

ssh user@host – Connect to host as user
ssh -p port user@host – Connect to host on port port as user
ssh-copy-id user@host – Add your key to host for user to enable a keyed or passwordless login

### User Administration

    adduser accountname – Create a new user call accountname
    passwd accountname – Give accountname a new password
    su – Log in as superuser from current login
    exit – Stop being superuser and revert to normal user
    
### Process Management
    
    ps – Display your currently active processes
    top – Display all running processes
    kill pid – Kill process id pid
    killall proc – Kill all processes named proc (use with extreme caution)
    bg – Lists stopped or background jobs; resume a stopped job in the background
    fg – Brings the most recent job to foreground
    fg n – Brings job n to the foreground
    
### Installation from source

./configure
make
make install
dpkg -i pkg.deb – install a DEB package (Debian / Ubuntu / Linux Mint)
rpm -Uvh pkg.rpm – install a RPM package (Red Hat / Fedora)

### Stopping & Starting

    shutdown -h now – Shutdown the system now and do not reboot
    halt – Stop all processes - same as above
    shutdown -r 5 – Shutdown the system in 5 minutes and reboot
    shutdown -r now – Shutdown the system now and reboot
    reboot – Stop all processes and then reboot - same as above
    startx – Start the X system

## Recommended reading:

    Cheat-Sheets.org – All cheat sheets, round-ups, quick reference cards, quick reference guides and quick reference sheets in one page. The only one you need.
    
    Tutorial: The best tips & tricks for bash, explained – Linux Tutorial Blog / Quality Linux tutorials without clutter
    
    LinuxCommand.org – Learning the shell, Writing shell scripts, Script library, SuperMan pages, Who, What, Where, Why
    
    LinuxManPages.com – General commands, System calls, Subroutines, Special files, File formats, Games, Macros and conventions, Maintenence commands, Most Popular Man Pages
    
    Linux Man Pages from die.net – Man pages are grouped into sections, to see the full list of Linux man pages for a section, pick one. Or you can browse Linux man pages by name; choose the first letter of the name of the Linux command, function, or file you are interested in.
    
    Linux Newbie Guide: Shorcuts and Commands – Linux essential shortcuts and sanity commands; Common Linux commands - system info; Basic operations, network apps, file (de)compression; Process control; Basic administration commands, accessing drives/partitions; Network administration tools, music-related commands, graphics-related commands.
    
    Sudo Manual Pages – Sudo (su "do") allows a system administrator to delegate authority to give certain users (or groups of users) the ability to run some (or all) commands as root or another user while providing an audit trail of the commands and their arguments. For more information, see the introduction to Sudo. Sudo is free software, distributed under an ISC-style license.
    
    LinOxide.com – Linux Commands Cheat Sheet in Black & White 



## linux常用命令分类总结


### 通用命令:

    1. date ：print or set the system date and time
    
    2. stty -a: 可以查看或者打印控制字符(Ctrl-C, Ctrl-D, Ctrl-Z等)
    
    3. passwd: print or set the system date and time (用passwd -h查看)
    
    4. logout, login: 登录shell的登录和注销命令
    
    5. pwd: print or set the system date and time
    
    6. more, less, head tail: 显示或部分显示文件内容.
    
    7. lp/lpstat/cancel, lpr/lpq/lprm: 打印文件.
    
    8. 更改文件权限： chmod u+x...
    
    9. 删除非空目录：rm -fr dir
    
    10. 拷贝目录： cp -R dir

### ubuntu常用命令:

    1. dpkg: package manager for Debian
    
   * 安装： dpkg -i package
    
   * 卸载： dpkg -r package
    
   * 卸载并删除配置文件: dpkg -P |--purge package
    
   * 如果安装一个包时。说依赖某些库。可以先 #apt-get install somelib...
    
   * 查看软件包安装内容 :dpkg -L package
    
   * 另外 dpkg还有 dselect和aptitude 两个frontend.
    
    apt
    
   * 安装: apt-get install packs
    
   * apt-get update : 更新源
    
   * apt-get upgrade: 升级系统。
    
   * apt-get dist-upgrade: 智能升级。安装新软件包,删除废弃的软件包
    
   * apt-get -f install ： -f == --fix broken 修复依赖
    
   * apt-get autoremove: 自动删除无用的软件
    
   * apt-get remove packages :删除软件
    
   * apt-get remove package --purge 删除包并清除配置文件
    
   * 清除所以删除包的残余配置文件: dpkg -l |grep ^rc|awk '{print $2}' |tr ["/n"] [" "]|sudo xargs dpkg -P
    
   * 安装软件时候包的临时存放目录 : /var/cache/apt/archives
    
   * 清除该目录: apt-get clean
    
   * 清除该目录的旧版本的软件缓存: apt-get autoclean
    
   * 查询软件some的依赖包： apt-cache depends some
    
   * 查询软件some被哪些包依赖: apt-get rdepends some
    
   * 搜索软件: apt-cache search name|regexp
    
   * 查看一个软件的编译依赖库: apt-cache showsrc packagename|grep Build-Depends
    
   * 下载软件的源代码 : apt-get source packagename (注: sources.list 中应该有 deb-src 源)
    
   * 安装软件包源码的同时, 安装其编译环境 :apt-get build-dep packagename (有deb-src源)
    
   * 如何将本地光盘加入安装源列表: apt-cdrom add
    
### 系统命令:
    
   * 查看内核版本： uname -a
    
   * 查看ubuntu 版本: cat /etc/issue
    
   * 查看网卡状态 : ethtool eth0
    
   * 查看内存,cpu的信息： cat /proc/meminfo ; cat /proc/cpuinfo
    
    (/proc下面的有很多系统信息)
    
   * 打印文件系统空间使用情况: df -h
    
   * 查看硬盘分区情况: fdisk -l
    
   * 产看文件大小: du -h filename;
    
   * 查看目录大小： du -hs dirname ; du -h dirname是查看目录下所有文件的大小
    
   * 查看内存的使用： free -m|-g|-k
    
   * 查看进程： ps -e 或ps -aux -->显示用户
    
   * 杀掉进程: kill pid
    
   * 强制杀掉： killall -9 processname

 
 
### 网络相关：

   * 配置 ADSL: sudo pppoeconf
    
   * ADSL手工拨号: sudo pon dsl-provider
    
   * 激活 ADSL : sudo /etc/ppp/pppoe_on_boot
    
   * 断开 ADSL: sudo poff
    
   * 根据IP查网卡地址: arping IP地址
    
   * 产看本地网络信息(包括ip等): ifconfig | ifconfig eth0
    
   * 查看路由信息: netstat -r
    
   * 关闭网卡： sudo ifconfig eth0 down
    
   * 启用网卡： sudo ifconfig eth0 up
    
   * 添加一个服务: sudo update-rc.d 服务名 defaults 99
    
   * 删除一个服务: sudo update-rc.d 服务名 remove
    
   * 临时重启一个服务: /etc/init.d/服务名 restart
    
   * 临时关闭一个服务: /etc/init.d/服务名 stop
    
   * 临时启动一个服务: /etc/init.d/服务名 start
    
   * 控制台下显示中文: sudo apt-get install zhcon
    
   * 查找某个文件: whereis filename 或 find 目录 -name 文件名
    
   *通过ssh传输文件
    
    scp -rp /path/filename username@remoteIP:/path #将本地文件拷贝到服务器上
    
    scp -rp username@remoteIP:/path/filename /path #将远程文件从服务器下载到本地
    
### 压缩:
    
   *解压缩 a.tar.gz
    
    #tar zxvf a.tar.gz
    
   *解压缩 a.tar.bz2
    
    #tar jxvf a.tar.bz2
    
   *压缩aaa bbb目录为xxx.tar.gz
    
    #tar zcvf xxx.tar.gz aaa bbb
    
   *压缩aaa bbb目录为xxx.tar.bz2
    
    #tar jcvf xxx.tar.bz2 aaa bbb
    
### Nautilus：
    
    特殊 URI 地址
    
   * computer:/// - 全部挂载的设备和网络
    
   * network:/// - 浏览可用的网络
    
   * burn:/// - 一个刻录 CDs/DVDs 的数据虚拟目录
    
   * smb:/// - 可用的 windows/samba 网络资源
    
   * x-nautilus-desktop:/// - 桌面项目和图标
    
   * file:/// - 本地文件
    
   * trash:/// - 本地回收站目录
    
   * ftp:// - FTP 文件夹
    
   * ssh:// - SSH 文件夹
    
   * fonts:/// - 字体文件夹，可将字体文件拖到此处以完成安装
    
   * themes:/// - 系统主题文件夹
    
   * 显示隐藏文件: Ctrl+h
    
   * 显示地址栏: Ctrl+l
    
   * 查看已安装字体: 在nautilus的地址栏里输入”fonts:///“，就可以查看本机所有的fonts



## Bash For Loop Examples - nixCraft 

https://www.cyberciti.biz/faq/bash-for-loop/

5 Bash for loop examples to make command line tasks more efficient | Benjamin Cane 
 http://bencane.com/2013/10/21/5-bash-for-loop-examples-to-make-command-line-tasks-more-efficient/
 
    for i in (); do echo $i ; ls $i; done
    for i in {0..3}; do for j in {0..9}; do echo -n \($i, $j\); echo Is today the $i$j \?; done; done
    for i in */; do (cd “$i” && git fetch) done
     
    for i in *; do echo $i; done [ will not show files with leading dash ]
    
    for i in “*”; do echo $i; done [ will show files with leading dash (but not one file per line) ]
    for i in /etc/*.conf; do cp $i /backup; done
    for((i=1;i<=10;i+=2)); do echo "Welcome $i times"; done

## Remove duplicate entries using a Bash script

    sort -u input.txt
    
    awk '!a[$0]++' input.txt
    


## find all files containing specific text on Linux
https://stackoverflow.com/questions/16956810/how-do-i-find-all-files-containing-specific-text-on-linux
grep -rnw '/home/mike/xnet3/XX-Net-python3/lib/common/' -e 'b"'


    -r or -R is recursive,
    -n is line number, and
    -w stands for match the whole word.
    -l (lower-case L) can be added to just give the file name of matching files.

Along with these, --exclude, --include, --exclude-dir flags could be used for efficient searching:

    This will only search through those files which have .c or .h extensions:

    grep --include=\*.{c,h} -rnw '/path/to/somewhere/' -e "pattern"

    This will exclude searching all the files ending with .o extension:

    grep --exclude=*.o -rnw '/path/to/somewhere/' -e "pattern"

    For directories it's possible to exclude a particular directory(ies) through --exclude-dir parameter. For example, this will exclude the dirs dir1/, dir2/ and all of them matching *.dst/:

    grep --exclude-dir={dir1,dir2,*.dst} -rnw '/path/to/somewhere/' -e "pattern"

This works very well for me, to achieve almost the same purpose like yours.

For more options check man grep.

grep -Ril "full-height" /home/mike/markdown-it\ demo_files/
grep -Ril "text-to-find-here" /

    i stands for ignore case (optional in your case).
    R stands for recursive.
    l stands for "show the file name, not the result itself".
    / stands for starting at the root of your machine.

grep -rnw '.' -e "apiproxy_errorsh"
    
https://stackoverflow.com/questions/16956810/how-do-i-find-all-files-containing-specific-text-on-linux
grep -Ril "lunr" ~/soft/julia-1.0.0/share/doc/julia/html/en
    
     shutdown -h now
