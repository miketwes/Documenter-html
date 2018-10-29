# daemons_and_services


## 配置让哪些服务启动

方法1 运行ntsysv或者setup命令，进入菜单进行配置
方法2 chkconfig --list 显示服务
chkconfig name on/off 打开/关闭“name”服务
Installing and removing services using rc.d

http://pleasefeedthegeek.wordpress.com/2012/08/28/installing-and-removing-services-using-rc-d/

    service --status-all
    sudo service --status-all
    sudo sysv-rc-conf
    sudo chkconfig --list
    sysv-rc-conf 
    
    runlevel
    N 2	
    ls -l /etc/rc2.d/
    sudo update-rc.d -f pppd-dns remove
    head /etc/init.d/pppd-dns
    sudo update-rc.d pppd-dns defaults
    
    sudo service --status-all
    service rsyslog stop
    sudo service rsyslog restart
    sudo echo -n > /var/log/file_which_is_big 
    //  Use echo, then not have to restart rsyslog
    
    ps -ef | egrep "/sbin/init|/sbin/getty|bash|/bin/login"
    ps -ef # 查看所有进程 
    top # 实时显示进程状态
    w # 查看活动用户
    id <用户名> # 查看指定用户信息 
    last # 查看用户登录日志 
    cut -d: -f1 /etc/passwd # 查看系统所有用户
    cut -d: -f1 /etc/group # 查看系统所有组 
    crontab -l # 查看当前用户的计划任务 服务
    chkconfig --list # 列出所有系统服务 
    chkconfig --list | grep on # 列出所有启动的系统服务


## systemctl

linux中service与chkconfig的替代者systemctl

最近在玩ubuntu和opensuse时发现了systemctl命令了，后来在试玩centos7时也发现了该命令，systemctl是systemd下的一个工具。网上查了下，该命令已经存在很久了。该命令是用来替代service和chkconfig两个命令的 --- 尽管个人感觉还是后者好用。
为了顺应时间的发展，这里总结下。在目前很多linux的新发行版本里，系统对于daemon的启动管理方法不再采用SystemV形式，而是使用了sytemd的架构来管理daemon的启动。

  1. runlevel 到 target的改变
  
  在systemd的管理体系里面，以前的运行级别（runlevel）的概念被新的运行目标（target）所取代。tartget的命名类似于multi-user.target等这种形式，比如原来的运行级别3（runlevel3）就对应新的多用户目标（multi-user.target），run level 5就相当于graphical.target。
  
  由于不再使用runlevle概念，所以/etc/inittab也不再被系统使用 --- 无怪乎在新版本ubuntu上找不到inittab文件了。
  而在systemd的管理体系里面，默认的target（相当于以前的默认运行级别）是通过软链来实现。如：
  
  ln -s /lib/systemd/system/runlevel3.target /etc/systemd/system/default.target
  在/lib/systemd/system/ 下面定义runlevelX.target文件目的主要是为了能够兼容以前的运行级别level的管理方法。 事实上/lib/systemd/system/runlevel3.target，同样是被软连接到multi-user.target。
  
  注：opensuse下是在/usr/lib/systemd/system/目录下。
  
  2. 单元控制（unit）
  
  在systemd管理体系里，称呼需要管理的daemon为单元（unit）。对于单元（unit）的管理是通过命令systemctl来进行控制的。例如显示当前的处于运行状态的unit(即daemon)，如：
  
       systemctl
       systemctl --all
       systemctl list-units --type=sokect
       systemctl list-units --type=service
       
  注:type后面可以接的类型可以通过help查看
  
       systemctl -t help
  
  3. systemctl用法及示例
  
  chkconfig、service命令与systemctl命令的区别见下表：
  
  任务 	            旧指令 	                          新指令
  使某服务自动启动 	chkconfig --level 3 httpd on 	      systemctl enable httpd.service
  使某服务不自动启动 	chkconfig --level 3 httpd off  systemctl disable httpd.service
  检查服务状态 	    service httpd status 	          systemctl status httpd.service 
  
  
  
  systemctl is-active httpd.service （仅显示是否 Active)
  加入自定义服务 	chkconfig --add  test 	    systemctl   load test.service
  删除服务 	chkconfig --del  xxx 	停掉应用，删除相应的配置文件
  显示所有已启动的服务 	chkconfig --list 	    systemctl list-units --type=service
  启动某服务 	service httpd start 	            systemctl start httpd.service
  停止某服务 	service httpd stop 	            systemctl stop httpd.service
  重启某服务 	service httpd restart 	        systemctl restart httpd.service
  
  注：systemctl后的服务名可以到/usr/lib/systemd/system目录查看（opensuse下），其他发行版是位于/lib/systemd/system/ 下。
  
       systemctl status network.service
       /etc/init.d/network status
  
  4. service配置文件
  
  还以上面提到的httpd.service配置为例，httpd.service文件里可以找到如下行：
  
  [Install]
  WantedBy=multi-user.target
  则表明在多用户目标（multi-user.target，相当于level3）时自动启动。如果想在runlevel 5下也自启动，则可以将配置改为如下：
  
  [Install]
  WantedBy=multi-user.target graphical.target
  一旦设定了自动启动（enbale），就在/etc/systemd/system/.wants/下面建了一个httpd.service的软连接，连接到/lib/systemd/system/下的相应服务那里 。所以显示自动启动状态的unit （类似于chekconfig --list命令的结果），可以通过下面的方法：
  
  #ls /etc/systemd/system/multi-user.target.wants/
  systemctl的总结先写到这里，其是systemd包内的一个工具，也是该包中最为常用的工具。回头再针对systemd做一个总结。


## kill 进程

    ps -ef | grep firefox | grep -v grep | cut -c 9-15 | xargs kill -s 9
    pgrep firefox | xargs kill -s 9
    ps -ef | grep firefox | awk '{print $2}' | xargs kill -9
    kill -s 9 `ps -aux | grep firefox | awk '{print $2}'`
    kill -s 9 `pgrep firefox`
    pkill -９ firefox // pkill＝pgrep+kill
    killall -9 firefox


## Linux查看端口

    lsof -i:端口号
    
    netstat -ntlp   //查看当前所有tcp端口·
    
    netstat -ntulp |grep 80   //查看所有80端口使用情况·
    
    netstat -an | grep 3306   //查看所有3306端口使用情况·
    
    netstat -anp|grep 445
    kill -9 3201
    
    fuser -n tcp -k 6800
    
    sudo netstat -lpn |grep :8080
    
    fuser -k 8080/tcp


## Linux下ps -ef和ps aux的区别及格式详解


Linux下显示系统进程的命令ps，最常用的有ps -ef 和ps aux。这两个到底有什么区别呢？
两者没太大差别，讨论这个问题，要追溯到Unix系统中的两种风格，System Ｖ风格和BSD 风格，
ps aux最初用到Unix Style中，而ps -ef被用在System V Style中，两者输出略有不同。
现在的大部分Linux系统都是可以同时使用这两种方式的。

ps -ef 是用标准的格式显示进程的、其格式如下

其中各列的内容意思如下
UID    //用户ID、但输出的是用户名
PID    //进程的ID
PPID    //父进程ID
C      //进程占用CPU的百分比
STIME  //进程启动到现在的时间
TTY    //该进程在那个终端上运行，若与终端无关，则显示? 若为pts/0等，则表示由网络连接主机进程。
CMD    //命令的名称和参数

ps aux 是用BSD的格式来显示、其格式如下

同ps -ef 不同的有列有
USER      //用户名
%CPU      //进程占用的CPU百分比
%MEM      //占用内存的百分比
VSZ      //该进程使用的虚拟內存量（KB）
RSS      //该进程占用的固定內存量（KB）（驻留中页的数量）
STAT      //进程的状态
START    //该进程被触发启动时间
TIME      //该进程实际使用CPU运行的时间

其中STAT状态位常见的状态字符有
D      //无法中断的休眠状态（通常 IO 的进程）；
R      //正在运行可中在队列中可过行的；
S      //处于休眠状态；
T      //停止或被追踪；
W      //进入内存交换 （从内核2.6开始无效）；
X      //死掉的进程 （基本很少见）；
Z      //僵尸进程；
<      //优先级高的进程
N      //优先级较低的进程
L      //有些页被锁进内存；
s      //进程的领导者（在它之下有子进程）；
l      //多线程，克隆线程（使用 CLONE_THREAD, 类似 NPTL pthreads）；
+      //位于后台的进程组；

 ps aux 和ps -ef 
两者的输出结果差别不大，但展示风格不同。aux是BSD风格，-ef是System V风格。
这是次要的区别，一个影响使用的区别是aux会截断command列，而-ef不会。当结合grep时这种区别会影响到结果。
推荐使用：ps –ef 

Linux中杀掉进程中包含特定字符串的所有进程 批量杀掉包含某个关键字的程序进程


    ps -ef | grep fcitx | grep -v grep | cut -c 9-15 | xargs kill -9
    # ps aux | grep fcitx | grep -v grep | awk '{print $2}' | xargs kill -9
