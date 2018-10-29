# network


/etc/init.d/networking start


## inux 防火墙应用：过滤入站 RST 数据包
操作系统：ubuntu 18.04 ， 防火墙：ufw，
用无界浏览 u1802.exe 翻墙时打开网页速度很慢，

从 [ 终端 ] 临时添加一条 iptables 防火墙过滤规则之后，打开网页速度非常快，

    sudo iptables -I INPUT 1 ! -i lo -p tcp --tcp-flags RST RST -j DROP

Windows 7 操作系统用户，安装 outpost firewall pro 防火墙，开启防 RST 攻击选项，应该有同样效果，


手机 热点连接无线路由
wps 开启
无线设置 开启
高级设置 无线扩展 开启 然后扫描


