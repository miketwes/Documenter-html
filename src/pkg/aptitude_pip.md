## libglib2.0-0 

./geany: symbol lookup error: /usr/lib/i386-linux-gnu/libgobject-2.0.so.0: undefined symbol: g_variant_dict_ref
undefined symbol: g_type_check_instance_is_fundamentally_a

## downgrade package

    aptitude versions libglib2.0-0
    wget snapshot.debian.org
    nano index.html
    echo "deb http://snapshot.debian.org/archive/debian/20180405 sid main" >> /etc/apt/sources.list
    nano /etc/apt/sources.list
    aptitude update
    
    in http://snapshot.debian.org/ search binary package libglib2.0-0


    sudo apt-cache madison libglib2.0-0
    sudo apt-cache policy libglib2.0-0
    sudo aptitude versions libglib2.0-0
    sudo apt-cache show  libglib2.0-0
    dpkg -l libglib2.0-0
    
    apt-cache showpkg libglib2.0-0
    aptitude purge libglib2.0-dev
    aptitude install libglib2.0-0=2.56.0-4
    
    dpkg -l | grep libglib2.0
    sudo apt-cache search libglib2.0-0
    
    ls /var/lib/dpkg/info/cross*
    sudo rm /var/lib/dpkg/info/cross*
    sudo aptitude purge crossover


    dpkg -S libglib-2.0.so
    
    ls -il  /usr/lib/i386-linux-gnu/libgobject-2.0.so*
    suod rm /usr/lib/i386-linux-gnu/libgobject-2.0.so.0.3800.2
    sudo rm /usr/lib/i386-linux-gnu/libgobject-2.0.so.0.3800.2
    sudo rm /lib/i386-linux-gnu/libglib-2.0.so.0.3800.2
    ls /usr/lib/i386-linux-gnu/libglib*
    file /usr/lib/i386-linux-gnu/libglib-2.0.so.0
    sudo rm /lib/i386-linux-gnu/libglib-2.0.so.0
    sudo ln -s /usr/lib/i386-linux-gnu/libglib-2.0.so.0.5800.1 /lib/i386-linux-gnu/libglib-2.0.so.0
    ls /lib/i386-linux-gnu/libglib*
    file /lib/i386-linux-gnu/libglib-2.0.so.0
    aptitude versions libglib2.0-0
    
    dpkg -L manpages-zh | less
    dpkg -S libglib-2.0.so
    libglib2.0-0:i386: /usr/lib/i386-linux-gnu/libglib-2.0.so.0.5800.1
    libglib2.0-0:i386: /usr/lib/i386-linux-gnu/libglib-2.0.so.0
    
    
    ldd geany1/bin/geany
    
    ...
    libgobject-2.0.so.0 => /usr/lib/i386-linux-gnu/libgobject-2.0.so.0 (0xb6e5a000)
    ...
    libglib-2.0.so.0 => /lib/i386-linux-gnu/libglib-2.0.so.0 (0xb6d17000)
    ...

    

## holding back packages



### dpkg Put a package on hold:

    echo "<package-name> hold" | sudo dpkg --set-selections

Remove the hold:

    echo "<package-name> install" | sudo dpkg --set-selections

    dpkg --get-selections | grep hold


### apt Hold a package:

    sudo apt-mark hold <package-name>

Remove the hold:

    sudo apt-mark unhold <package-name>

###  aptitude Hold a package:

    sudo aptitude hold <package-name>

Remove the hold:

    sudo aptitude unhold <package-name>



aptitude与apt-get常用选项


=========================================
aptitude 
=========================================

aptitude search "" #查找软件包
aptitude show ""   #显示包的详细信息
aptitude install ""  #安装包
aptitude remove ""   #删除包
aptitude pruge ""    #删除包及其配置文件
aptitude hold ""  #禁止更新
aptitude keep ""
aptitude unhold ""
aptitude reinstall "" #再安装
aptitude markauto "" #
aptitude unmarkauto ""
aptitude update     #更新可用的包列表
根据/etc/apt/sources.list的信息，获取软件包列表的更新，不更新软件
aptitude upgrade  #升级可用的包
aptitude safe-upgrade 
如果已安装的软件有最新版，则安装。一般在aptitude update之后执行
aptitude full-upgrade

aptitude clean       #删除下载的包文件
aptitude autoclean   #仅删除过期的包文件

aptitude download ""
下载deb格式的安装包，但不安装

aptitude help

aptitude命令的日志文件 ： /var/log/aptitude 


=========================================
apt-get
=========================================
apt-get update              #更新软件包列表
apt-get install ""          #安装一个新软件包
apt-get remove  ""          #卸载一个已安装的软件包（保留配置文档）
apt-get remove --purge ""   #卸载一个已安装的软件包（删除配置文档）
apt-get autoremove ""       #删除包及其依赖的软件包
apt-get autoremove --purge ""  #删除包及其依赖的软件包+配置文件，比上面的要删除的彻底一点
apt-get autoclean  #apt会把已装或已卸的软件都备份在硬盘上，所以假如需要空间的话，能够让这个命令来删除您已卸载掉的软件的备份。
apt-get clean  #这个命令会把安装的软件的备份也删除，但是这样不会影响软件的使用。
apt-get upgrade       #更新软件包
apt-get dist-upgrade  #将系统升级到新版本
apt-cache search ""   #在软件包列表中搜索字符串
apt-cache show   ""   #获取包的相关信息，如说明、大小、版本等


## 让debian自动寻找最快的更新源



    sudo apt-spy -d unstable -a Asia -t 5 -o sources.list -w topServers.txt -n 5

其中-d选项指定发行版本，可选项为"stable、testing、unstable”。unstable为非稳定版，stable为稳定版，建议选择stable。

-a选项指定debian安装源服务器的区域，如asia、Europe、North-America。asia为亚洲，建议选择此项。

-t为超时阈值。设置较小的值可以忽略较慢的服务器。为了选择较小的服务器，可以选择一个比较小的值。

命令完成后，apt-spy自动创建/etc/apt/sources.list.d文件夹，并在该文件夹里面创建apt-spy.list文件。



## 设置软件更新选择源的优先级

在加了测试/不稳定的repo之后，当你更新系统的时候所有安装过并且可用的软件就会立马更新，而后你的系统就被你玩火自焚了。

所以需要设置一些规则，以便选定的软件包在正常的更新时不会被更新到一个不稳定的测试版本。

我们需要告诉apt系统，除了我们希望使用测试版或不稳定版的特定软件包之外，其它的总是使用稳定版的软件包来更新。

可以通过如下两个文件之一来设置APT源选择的优先级。

/etc/apt/preferences
Package: linux-compiler-gcc-5-x86 linux-headers-4.6.0-1-686 linux-headers-4.6.0-1-686-pae linux-headers-4.6.0-1-all linux-headers-4.6.0-1-all-i386 linux-headers-4.6.0-1-common linux-headers-4.6.0-1-common-rt linux-headers-4.6.0-1-rt-686-pae
Pin: version 4.6.2-2
Pin-Priority: 1001

/etc/apt/preferences
/etc/apt/preferences.d/my_preferences

打开这两个文件之一，没有的话创建一个。

粘贴如下内容：

Package: *
Pin: release a=stable
Pin-Priority: 700
     
Package: *
Pin: release a=testing
Pin-Priority: 650
     
Package: *
Pin: release a=sid
Pin-Priority: 600

这里说一下，稳定版指的是你当前的debian版本，测试版是下一个，而不稳定版则是更远的将来发行版，对应stable/testing/sid。上面的设置中最主要的是优先级（Pin-Priority）。当前的稳定版应该有最高的优先级，这就是说，正常的apt-get操作只会从当前的稳定版的软件库（现在是jessie）里面安装软件。

更新包缓存：

sudo apt-get update		

确认优先级设置正确。使用apt-cache的policy参数来检查

apt-cache policy apache2
	apache2:
	Installed: (none)
	Candidate: 2.2.22-13
	Version table:
            2.4.7-1 0
		600 http://http.us.debian.org/debian/ unstable/main amd64 Packages
	    2.4.6-3 0
		650 http://http.us.debian.org/debian/ testing/main amd64 Packages
	    2.2.22-13 0
		700 http://http.us.debian.org/debian/ wheezy/main amd64 Packages


sudo apt show fluxbox
apt-get install -f
apt-get clean
apt-get update
apt --fix-broken install
apt-get install
apt-get dist-upgrade
apt-get install -f
apt-get clean
apt-get update 

which -a pip
/usr/local/bin/pip

dpkg -l | grep matplot


/usr/lib/apt/methods/http: relocation error: /usr/lib/apt/methods/http: symbol _ZN3URIcvNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEEB5cxx11Ev version APTPKG_5.0 not defined in file libapt-pkg.so.5.0 with link time reference
/usr/lib/apt/methods/http: relocation error: /usr/lib/apt/methods/http: symbol _ZN3URIcvNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEEB5cxx11Ev version APTPKG_5.0 not defined in file libapt-pkg.so.5.0 with link time reference
E: Method http has died unexpectedly!
E: Sub-process http returned an error code (127)
E: Method /usr/lib/apt/methods/http did not start correctly
E: Method http has died unexpectedly!
E: Sub-process http returned an error code (127)
E: Method /usr/lib/apt/methods/http did not start correctly
W: Failed to fetch http://mirrors.tuna.tsinghua.edu.cn/debian/dists/unstable/InRelease: 
W: Failed to fetch http://security.debian.org/debian-security/dists/stretch/updates/InRelease: 
E: Some index files failed to download. They have been ignored, or old ones used instead.


sudo apt-get update
apt-get: relocation error: /usr/lib/i386-linux-gnu/libapt-private.so.0.0: symbol _ZN3URIcvNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEEB5cxx11Ev version APTPKG_5.0 not defined in file libapt-pkg.so.5.0 with link time reference

ls /var/lib/apt/lists/
sudo rm -rf /var/lib/apt/lists/*
sudo dpkg -i libapt-pkg5.0_1.6.4_i386.deb
sudo aptitude purge apt
sudo dpkg -i apt_1.6.4_i386.deb
sudo aptitude install  tasksel
sudo tasksel --list-tasks
ls /usr/lib/i386-linux-gnu/


## 查看文件安装路径：

whereis oracle

查询运行文件所在路径：

which oracle

结果会显示：

/usr/bin/oracle

sudo dpkg -L ibus-sunpinyin | grep ibus-setup-sunpinyin

sudo dpkg -S ibus-setup-sunpinyin

对一个deb包的解压、修改、重新打包全过程方法


/*********************************************************************
 * Author  : Samson
 * Date    : 07/03/2014
 * Test platform:
 *              3.11.0-12-generic #19-Ubuntu
 *              GNU bash, version 4.2.45
 * *******************************************************************/


Reference: http://www.debian.org/doc/manuals/maint-guide/build.zh-cn.html

出于多种原因，有的时候需要直接对deb包中的各种文件内容进行修改，例如：在没有源代码的情况下的修改，还有…… %_~

那么就有三个问题需要解决：
0、如何将deb包文件进行解包呢？
1、修改要修改的文件？
2、对修改后的内容进行生成deb包？

以openssh-client的某个版本的deb包为例：
解决方法：
-0、准备工作：
mkdir extract
mkdir extract/DEBIAN
mkdir build

0、解包命令为：

#解压出包中的文件到extract目录下
dpkg -X ../openssh-client_6.1p1_i386.deb extract/

#解压出包的控制信息extract/DEBIAN/下：
dpkg -e ../openssh-client_6.1p1_i386.deb extract/DEBIAN/

1、修改文件(此处以修改ssh连接时禁止以root身份进行远程登录，原来是能够以root登录的)：
sed -i 's/PermitRootLogin yes/PermitRootLogin no/g' extract/etc/ssh/sshd_config

2、对修改后的内容重新进行打包生成deb包
dpkg-deb -b extract/ build/
ufo@ufo:~$ ll build/
总用量 1016
-rw-r--r-- 1 ufo ufo 1020014  7月  3 20:20 openssh-client_6.1p1_i386.deb

验证方法为：再次解开重新打包的deb文件，查看在etc/ssh/sshd_config文件是否已经被修改；

done :_(
sudo apt-cache search ibus | grep 'python'

sudo aptitude install ibus  ibus-pinyin im-switch ibus-sunpinyin

apt-cache showpkg libglib2.0-dev
