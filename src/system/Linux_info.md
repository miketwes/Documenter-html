# Linux info

## Envirment

/etc/environment
/etc/profile 

启动到文字界面(不启动xwindow)(bjchenxu)

  vi /etc/inittab
  id:x:initdefault:
  x=3:文本方式 x=5:图形方式

## linux常用查看设备命令
 
    uname -a # 查看内核/操作系统/CPU信息 
    head -n 1 /etc/issue # 查看操作系统版本 or cat /etc/os-release
    cat /proc/cpuinfo # 查看CPU信息
    hostname # 查看计算机名  
    lspci -tv # 列出所有PCI设备 
    lsusb -tv # 列出所有USB设备 
    lsmod # 列出加载的内核模块 
    env # 查看环境变量 资源
    free -m # 查看内存使用量和交换区使用量  
    df -h # 查看各分区使用情况 
    du -sh <目录名> # 查看指定目录的大小
    grep MemTotal /proc/meminfo # 查看内存总量
    grep MemFree /proc/meminfo # 查看空闲内存量 
    uptime # 查看系统运行时间、用户数、负载
    cat /proc/loadavg # 查看系统负载 磁盘和分区 
    mount | column -t # 查看挂接的分区状态 
    fdisk -l # 查看所有分区
    e2label /dev/hdxn, where x=a,b,c,d....; n=1,2,3...    
    e2label  will display or change the filesystem label on the ext2, ext3,
    or ext4 filesystem located on device.
    dumpe2fs - dump ext2/ext3/ext4 filesystem information  
 
## 查看硬件

    查询高级电源管理(APM) BIOS  apm
    查看主板的序列号：dmidecode | grep -i 'serial number'
    用硬件检测程序kuduz探测新硬件：service kudzu start （ or restart）
    查看CPU信息：cat /proc/cpuinfo [dmesg | grep -i 'cpu'][dmidecode -t processor]
    查看内存信息：cat /proc/meminfo [free -m][vmstat]
    查看板卡信息：cat /proc/pci
    查看显卡/声卡信息：lspci |grep -i 'VGA'[dmesg | grep -i 'VGA']
    查看网卡信息：dmesg | grep -i 'eth'[cat /etc/sysconfig/hwconf | grep -i eth][lspci | grep -i 'eth']
    查看PCI信息：lspci （相比cat /proc/pci更直观）
    查看USB设备：cat /proc/bus/usb/devices
    查看键盘和鼠标：cat /proc/bus/input/devices
    查看系统硬盘信息和使用情况：fdisk & disk – l & df
    查看各设备的中断请求（IRQ）：cat /proc/interrupts
    查看系统体系结构：uname -a
    查看及启动系统的32位或64位内核模式：isalist –v [isainfo –v][isainfo –b]
    查看硬件信息，包括bios、cpu、内存等信息：dmidecode
    测定当前的显示器刷新频率：/usr/sbin/ffbconfig –rev ?查看系统配置：/usr/platform/sun4u/sbin/prtdiag –v
    查看当前系统中已经应用的补丁：showrev –p
    显示当前的运行级别：who –rH
    查看当前的bind版本信息：nslookup –class=chaos –q=txt version.bind
    查看硬件信息：dmesg | more显示外设信息， 如usb，网卡等信息：
    lspci查看已加载的驱动：　lsnod lshw　
    查看当前处理器的类型和速度（主频）：psrinfo -v
    打印当前的OBP版本号：prtconf -v查看硬盘物理信息（vendor， RPM， Capacity）：iostat –E
    查看磁盘的几何参数和分区信息：prtvtoc /dev/rdsk/c0t0d0s 
    显示已经使用和未使用的i-node数目：df –F ufs –o i


## /proc中的重要信息 
   
    cat /proc/cpuinfo - CPU
    cat /proc/dma - 主机DMA通道信息
    cat /proc/interrupts - 中断
    cat /proc/filesystems - 文件系统信息
    cat /proc/ioports - 设备I/O端口
    cat /proc/meminfo - 内存信息(i.e. mem used, free, swap size)
    cat /proc/partitions - 所有设备的所有分区
    cat /proc/pci - PCI设备的信息
    cat /proc/swaps - 所有Swap分区的信息
    cat /proc/version - Linux的版本号
    
    备注： proc – process information pseudo-filesystem 进程信息伪装文件系统

## 查看inode 查看每个inode节点的大小
 
查看每个inode节点的大小，可以用如下命令：
    sudo dumpe2fs -h /dev/hda | grep "Inode size"
    sudo fdisk -l
    /dev/sda6       77608960  97138687  19529728  9.3G 83 Linux
    sudo dumpe2fs -h /dev/sda6
    df -i查看每个硬盘分区的inode总数和已经使用的数量 
    查看同个目录下哪个目录占用的inode
    find dir |wc -l
    du --maxdepth=4 |wc -l 
    
查看linux中文件的inode信息大致四个方法：

   1. 直接执行stat命令，以文件名称为参数
   2.  在debugfs中执行stat命令，以文件名称为参数
   3. 在debugfs中执行mi命令，以inode编号为参数，注意执行debugfs时，要附加-w选项
   4. 定位inode所在位置，然后以dd命令导出。
    
    swapon -s # 查看所有交换分区 
    hdparm -i /dev/hda # 查看磁盘参数(仅适用于IDE设备) 
    dmesg | grep IDE # 查看启动时IDE设备检测状况
    fsck 尝试修复逻辑卷 /dev/hd1：
    fsck –p /dev/hd1 –y
    通过使用fsck命令，您还可以缩小受损inode的搜索范围。如果您正在搜索一个特定的inode，那么可以使用带-ii-NodeNumber开关的fsck命令。
 


## Linux下查看内核、CPU、内存及各组件版本的命令和方法

查看当前用户名：a.getuid()获取当前用户的uid;b.getpwuid(uid)或者用户名

Linux查看内核版本： uname -a
                        more /etc/*release
                        more /etc/RedHat-release
                        more /proc/version

查看CPU信息：grep "model name" /proc/cpuinfo
                        more /proc/cpuinfo

查看CPU位数：getconf LONG_BIT
                        ls  如果在root下ls有lib64 文件夹说明系统64

查看CPU内核数：/proc/cpuinfo 'processor'字段最大值+1(逻辑核数)， 'physical id'字段最大值 + 1


查看libc、gcc版本：ldd /sbin/mii-tool
                                rpm -qa | grep glibc
                                gcc –v

查看内存信息：more /proc/meminfo

    grep MemTotal /proc/meminfo

## CentOS查看CPU、内存、版本等系统信息
 
　　CentOS查看系统信息

　　一：查看CPU

　　more /proc/cpuinfo | grep "model name"

　　grep "model name" /proc/cpuinfo

　　如果觉得需要看的更加舒服

　　grep "model name" /proc/cpuinfo | cut -f2 -d:

　　怎么样，Linux的命令就要这样熟悉。

　　二：查看内存

　　grep MemTotal /proc/meminfo

　　grep MemTotal /proc/meminfo | cut -f2 -d:

　　free -m |grep "Mem" | awk '{print $2}'

　　三：查看cpu是32位还是64位

　　查看CPU位数(32 or 64)

　　#getconf LONG_BIT

　　#echo $HOSTTYPE

　　#uname -a

　　四：查看当前linux的版本

　　#more /etc/RedHat-release

　　#cat /etc/redhat-release

　　五：查看内核版本

　　#uname -r
　　#uname -sr
　　#uname -a

　　六：查看当前时间

　　date

　　七：查看硬盘和分区

　　df -h

　　fdisk -l

　　也可以查看分区

　　du -sh

　　可以看到全部占用的空间

　　du /etc -sh

　　可以看到这个目录的大小

　　八：查看安装的软件包

　　查看系统安装的时候装的软件包

　　cat -n /root/install.log

　　more /root/install.log | wc -l

　　查看现在已经安装了那些软件包

　　rpm -qa

　　rpm -qa | wc -l

　　yum list installed | wc -l

　　不过很奇怪，我通过rpm，和yum这两种方式查询的安装软件包，数量并不一样。没有找到原因。

　　九：查看键盘布局

　　cat /etc/sysconfig/keyboard

　　cat /etc/sysconfig/keyboard | grep KEYTABLE | cut -f2 -d=

　　十：查看selinux情况

　　sestatus

　　sestatus | cut -f2 -d:

　　cat /etc/sysconfig/selinux

　　十一：查看ip，mac地址

　　在ifcfg-eth0 文件里你可以看到mac，网关等信息。

　　ifconfig

　　cat /etc/sysconfig/network-scripts/ifcfg-eth0 | grep IPADDR

　　cat /etc/sysconfig/network-scripts/ifcfg-eth0 | grep IPADDR | cut -f2 -d=

　　ifconfig eth0 |grep "inet addr:" |awk '{print $2}'|cut -c 6-

　　ifconfig  | grep 'inet addr:'| grep -v '127.0.0.1' | cut -d: -f2 | awk '{ print $1}'

　　查看网关

　　cat /etc/sysconfig/network

　　查看dns

　　cat /etc/nf

　　十二：查看默认语言

　　echo $LANG $LANGUAGE

　　cat /etc/sysconfig/i18n

　　十三：查看所属时区和是否使用UTC时间

　　cat /etc/sysconfig/clock

　　十四：查看主机名

　　hostname

　　cat /etc/sysconfig/network

    修改主机名就是修改这个文件，同时最好也把host文件也修改
