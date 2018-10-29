var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#Linux-install-1",
    "page": "Home",
    "title": "Linux install",
    "category": "section",
    "text": ""
},

{
    "location": "index.html#Install-Debian-system-1",
    "page": "Home",
    "title": "Install Debian system",
    "category": "section",
    "text": "get Win32 Disk Imager from http://sourceforge.net/projects/win32diskimager/     \nget Debian iso from:   http://www.debian.org/devel/debian-installer/netinst (generally 150-280 MB) CD images i386  \n     \n http://cdimage.debian.org/cdimage/daily-builds/daily/arch-latest/i386/iso-cd/debian-testing-i386-netinst.iso  \n      \n After the download completes, rename the file extension from .iso to .img.\n details see: http://dfarq.homeip.net/2013/05/how-to-build-bootable-debian-installation-usb-media-from-windows/optional  get 磁盘工具：Acronis Disk Director Suite V10.00.2160 汉化版\ninstall Debian: During the installation choose \"Advanced options\" -> \"Expert install\". "
},

{
    "location": "index.html#Update-Kernel-1",
    "page": "Home",
    "title": "Update Kernel",
    "category": "section",
    "text": "https://www.kernel.org/  http://kernel.ubuntu.com/~kernel-ppa/mainline/  wget http://kernel.ubuntu.com/~kernel-ppa/mainline/v3.11-saucy/linux-headers-3.11.0-031100-generic_3.11.0-031100.201309021735_i386.deb  \n\nwget http://kernel.ubuntu.com/~kernel-ppa/mainline/v3.11-saucy/linux-headers-3.11.0-031100_3.11.0-031100.201309021735_all.deb  \n\nwget http://kernel.ubuntu.com/~kernel-ppa/mainline/v3.11-saucy/linux-image-3.11.0-031100-generic_3.11.0-031100.201309021735_i386.deb  \n\nsudo dpkg -i linux-headers-3.11.0*.deb linux-image-3.11.0*.deb"
},

{
    "location": "index.html#Change-linux-boot-order-1",
    "page": "Home",
    "title": "Change linux boot order",
    "category": "section",
    "text": "sudo geany /etc/default/grub\n    GRUB_DEFAULT=2\n    GRUB_TIMEOUT=5\nsudo update-grub"
},

{
    "location": "index.html#Debian-reset-password-1",
    "page": "Home",
    "title": "Debian reset password",
    "category": "section",
    "text": "init=/bin/bash \nfdisk -l    \nmount -o remount,rw /dev/sda1 /\npasswd\n#mount -o remount,rw / \n#mount -a     \n#passwd root \nrebootBoot into grub, select single user but do not press enter. Press e to go into edit mode. Scroll down to the kernel line, it starts with \"linux /boot/vmlinuz-2.6…….\" Scroll to the end of that line and press space key once and type init=/bin/bash Press Ctrl X to boot Remount / as Read/Write  mount -rw -o remount /Change password with  passwdtype new password, confirm and hit enter and then reboot.  reboot"
},

{
    "location": "hardware/nvidia.html#",
    "page": "NVIDIA",
    "title": "NVIDIA",
    "category": "page",
    "text": ""
},

{
    "location": "hardware/nvidia.html#NVIDIA-1",
    "page": "NVIDIA",
    "title": "NVIDIA",
    "category": "section",
    "text": ""
},

{
    "location": "hardware/nvidia.html#Install-NVIDIA-Video-Driver-1",
    "page": "NVIDIA",
    "title": "Install NVIDIA Video Driver",
    "category": "section",
    "text": "sudo apt-get purge nvidia*\nsudo apt-get install nvidia-304 nvidia-settings"
},

{
    "location": "hardware/nvidia.html#nvidia-settings-1",
    "page": "NVIDIA",
    "title": "nvidia-settings ====",
    "category": "section",
    "text": "sudo aptitude install xserver-xorg-video-nvidia-legacy-304xx"
},

{
    "location": "hardware/nvidia.html#Check-video-driver-info-1",
    "page": "NVIDIA",
    "title": "Check video driver info",
    "category": "section",
    "text": "glxinfo | grep rendering\nglxinfo | grep render\nglxinfo | grep \"OpenGL version\"\nLIBGL_DEBUG=verbose glxinfo | grep rendering \nlsmod | grep -i \'nvidia\' \ngrep -B2 \'Module class: X.Org Video Driver\' /var/log/Xorg.0.log\nsudo hwinfo --framebuffer"
},

{
    "location": "hardware/nvidia.html#NVIDIA-Video-Driver-Install-from-deb-package-1",
    "page": "NVIDIA",
    "title": "NVIDIA Video Driver Install from deb package",
    "category": "section",
    "text": "sudo aptitude -r install linux-headers-$(uname -r|sed \'s,[^-]*-[^-]*-,,\') nvidia-kernel-dkms\nmkdir /etc/X11/xorg.conf.d\necho -e \'Section \"Device\"\\n\\tIdentifier \"My GPU\"\\n\\tDriver \"nvidia\"\\nEndSection$Section\' &gt; /etc/X11/xorg.conf.d/20-nvidia.conf\nsudo mv /etc/X11/xorg.conf.bak /etc/X11/xorg.conf\nsudo aptitude purge xserver-xorg-video-nouveau\nsudo reboot"
},

{
    "location": "hardware/nvidia.html#NVIDIA-Video-Driver-Install-from-NVIDIA-Linux-x86-304.88.run-package-1",
    "page": "NVIDIA",
    "title": "NVIDIA Video Driver Install from NVIDIA-Linux-x86-304.88.run package",
    "category": "section",
    "text": " sudo nano /etc/modprobe.d/blacklist.conf\n blacklist nouveau\n blacklist lbm-nouveau\n options nouveau modeset=0\n sudo update-initramfs -u\n sudo apt-get install dkms build-essential linux-headers-$(uname -r)\n sh NVIDIA-Linux-x86-XXX.YY.run --extract-only\n cd NVIDIA-Linux-x86-XXX.YY\n patch -p1 < /home/download/nvidia-linux-3.10.patch\n /etc/init.d/gdm3 stop\n chmod +x *.run\n ./*.run # after reboot login as root\n ln -s /usr/lib/xorg/modules/extensions/libglx.so.XXX.YY /usr/lib/xorg/modules/extensions/libglx.so\n ln -s /usr/lib/xorg/modules/extensions/libglx.so.XXX.YY /usr/lib/libglx.so\n ln -s /usr/lib/libGL.so.XXX.YY /usr/lib/libGL.so\n nvidia-xconfig\n sudo ./*.run --uninstall #remove\n ln -s /usr/lib/nvidia/current/libglx.so.304.88 /usr/lib/xorg/modules/extensions/libglx.so\n ln -s /usr/lib/nvidia/current/libglx.so.304.88 /usr/lib/libglx.so\n ln -s /usr/lib/i386-linux-gnu/nvidia/current/libGL.so.304.88 /usr/lib/libGL.so"
},

{
    "location": "hardware/nvidia.html#sh-file-1",
    "page": "NVIDIA",
    "title": "sh file",
    "category": "section",
    "text": "#! /bin/sh\nrm /usr/lib/xorg/modules/extensions/libglx.so.orig\nrm /usr/lib/i386-linux-gnu/libGL.so.1.orig\nmv /usr/lib/xorg/modules/extensions/libglx.so /usr/lib/xorg/modules/extensions/libglx.so.orig\nmv /usr/lib/i386-linux-gnu/libGL.so.1 /usr/lib/i386-linux-gnu/libGL.so.1.orig\nln -s /usr/lib/xorg/modules/extensions/libglx.so.304.131 /usr/lib/xorg/modules/extensions/libglx.so\nln -s /usr/lib/libGL.so.304.131 /usr/lib/i386-linux-gnu/libGL.so.1"
},

{
    "location": "hardware/nvidia.html#After-xserver-xorg-core-package-is-updated-1",
    "page": "NVIDIA",
    "title": "After xserver-xorg-core package is updated",
    "category": "section",
    "text": "mv /usr/lib/xorg/modules/extensions/libglx.so /usr/lib/xorg/modules/extensions/libglx.so.orig\nln -s /usr/lib/xorg/modules/extensions/libglx.so.XXX.YY /usr/lib/xorg/modules/extensions/libglx.so\nsudo find /usr -iname \"*libGL.so*\"\nfile /usr/lib/i386-linux-gnu/libGL.so.1\nfile /usr/lib/i386-linux-gnu/libGL.so.1.2.0\nsudo mv /usr/lib/i386-linux-gnu/libGL.so.1 /usr/lib/i386-linux-gnu/libGL.so.1.orig\nsudo ln -s /usr/lib/libGL.so.304.131 /usr/lib/i386-linux-gnu/libGL.so.1\nglxinfo"
},

{
    "location": "hardware/nvidia.html#downgrade-xserver-xorg-when-it-conflict-with-NVIDIA-Video-Driver-::-1",
    "page": "NVIDIA",
    "title": "downgrade xserver-xorg when it conflict with  NVIDIA Video Driver ::",
    "category": "section",
    "text": "sudo nano /etc/apt/sources.list    \ndeb http://ftp.debian.org/debian stable main contrib non-free\ndeb-src http://mirrors.163.com/debian/ stable main contrib non-free    \nsudo apt-cache show xserver-xorg\nsudo apt-get install xserver-xorg=1:7.7+3~deb7u1\nsudo dpkg -l \"xserver-x*\" | grep ^ii    \nsudo aptitude hold xserver-xorg\n./NVIDIA-Linux-x86-304.131.run --extract-only\npatch NVIDIA-Linux-x86-304.131/kernel/nv-linux.h < nvidia_mtrr_k4_3.patch\n./NVIDIA-Linux-x86-304.131/makeself.sh --target-os Linux --target-arch x86 NVIDIA-Linux-x86-304.131 NVIDIA-Linux-x86-304.131-patched.run \"NVIDIA driver 304.131 patched for kernel 4.3+\" ./nvidia-installer"
},

{
    "location": "system/fluxbox.html#",
    "page": "Fluxbox",
    "title": "Fluxbox",
    "category": "page",
    "text": ""
},

{
    "location": "system/fluxbox.html#Fluxbox-1",
    "page": "Fluxbox",
    "title": "Fluxbox",
    "category": "section",
    "text": ""
},

{
    "location": "system/fluxbox.html#Fluxbox-systemd-auto-login-1",
    "page": "Fluxbox",
    "title": "Fluxbox systemd auto login",
    "category": "section",
    "text": "    sudo nano /etc/systemd/system/getty.target.wants/getty@tty1.service\n    \n    #ExecStart=-/sbin/agetty --noclear %I $TERM\n    ExecStart=-/sbin/agetty  -a mike --noclear %I $TERM\n    \n    sudo nano /etc/inittab\n    \n    #1:2345:respawn:/sbin/getty 38400 tty1\n    1:2345:respawn:/sbin/agetty --autologin mike  --noclear tty1\n    nano ~/.bashrc # add to last part\n    if [ -z \"$(pgrep Xorg)\" ]\n    then startx &\n    else clear\n    fi\n    \n    sudo mkdir /etc/systemd/system/getty@tty1.service.d\n    sudo nano override.conf\n    \n    [Service]\n    ExecStart=\n    ExecStart=-/sbin/agetty  -a mike --noclear %I $TERM"
},

{
    "location": "system/fluxbox.html#Window-manager-packages-1",
    "page": "Fluxbox",
    "title": "Window manager  packages",
    "category": "section",
    "text": "sudo aptitude update\nsudo aptitude full-upgrade\nsudo aptitude dist-upgrade\nsudo aptitude install xorg  xserver-xorg-video-nvidia-legacy-304xx \\\nxserver-xorg-video-all fluxbox xterm synaptic thunar localepurge geany \\\nbleachbit synaptic sysv-rc-conf rar unrar mirage feh scrot geany \\\nvim-gtk spyder grun sqlite3  gretl python-obspy \\\niceweasel lxappearance qt4-qtconfig \\"
},

{
    "location": "system/fluxbox.html#set-background-permanently-1",
    "page": "Fluxbox",
    "title": "set background permanently",
    "category": "section",
    "text": "nano ~/.fluxbox/init\nbackground: aspect | tiled | centered\nbackground.pixmap: /path/to/wallpaper.jpg"
},

{
    "location": "system/fluxbox.html#Set-a-wallpaper-1",
    "page": "Fluxbox",
    "title": "Set a wallpaper",
    "category": "section",
    "text": "apt-get install feh\nfbsetbg -f /home/braintix/wallpaper/eat-ya-chilis.png\nnano ~/.fluxbox/overlay\nbackground: aspect | tiled | centered\nbackground.pixmap: /path/to/wallpaper.jpg"
},

{
    "location": "system/fluxbox.html#Randomly-change-wallpaper-every-n-minutes-1",
    "page": "Fluxbox",
    "title": "Randomly change wallpaper every n minutes",
    "category": "section",
    "text": "chgWallpaper.sh\n\nsudo aptitude install cron\n#!/bin/bash\nexport DISPLAY=:0.0\nfbsetbg -C /home/mike/t/desk/$(ls /home/mike/t/desk | sort -R | tail -1)\n\nsudo crontab -u mike -e\n*/5 * * * * /bin/bash /home/mike/soft/chgWallpaper.sh # add below last line\n\nsudo /etc/init.d/cron start\nsudo service cron status\nsystemctl status cron.service\nsudo systemctl stop cron.service"
},

{
    "location": "system/fluxbox.html#Screens-resolution-1",
    "page": "Fluxbox",
    "title": "Screens resolution",
    "category": "section",
    "text": "xrandr\nxrandr --output VGA-1 --mode 1024x768\nxrandr -s 1024x768"
},

{
    "location": "system/fluxbox.html#screensaver-1",
    "page": "Fluxbox",
    "title": "screensaver",
    "category": "section",
    "text": "xset s 0 600\nxset s of #Screensaver stop"
},

{
    "location": "system/fluxbox.html#Mouse-1",
    "page": "Fluxbox",
    "title": "Mouse",
    "category": "section",
    "text": ""
},

{
    "location": "system/fluxbox.html#Change-mouse-to-left-handed-1",
    "page": "Fluxbox",
    "title": "Change mouse to left handed",
    "category": "section",
    "text": "xmodmap -e \"pointer = 3 2 1\""
},

{
    "location": "system/fluxbox.html#Mouse-cursor-1",
    "page": "Fluxbox",
    "title": "Mouse cursor",
    "category": "section",
    "text": "sudo aptitude install dmz-cursor-theme\nsudo update-alternatives --config x-cursor-theme\nmdetect - mouse device autodetection tool\nsudo aptitude install mdetect"
},

]}

var data = documenterSearchIndex.docs;
for (var i=0; i<data.length; i++) {
    data[i].id = i + 1;

}

console.log(JSON.stringify(data));
