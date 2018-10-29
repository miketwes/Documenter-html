#  NVIDIA 

## Install NVIDIA Video Driver

    sudo apt-get purge nvidia*
    sudo apt-get install nvidia-304 nvidia-settings
    
## nvidia-settings ====

	sudo aptitude install xserver-xorg-video-nvidia-legacy-304xx 

## Check video driver info

    glxinfo | grep rendering
    glxinfo | grep render
    glxinfo | grep "OpenGL version"
    LIBGL_DEBUG=verbose glxinfo | grep rendering 
    lsmod | grep -i 'nvidia' 
    grep -B2 'Module class: X.Org Video Driver' /var/log/Xorg.0.log
    sudo hwinfo --framebuffer

## NVIDIA Video Driver Install from deb package 
    
    sudo aptitude -r install linux-headers-$(uname -r|sed 's,[^-]*-[^-]*-,,') nvidia-kernel-dkms
    mkdir /etc/X11/xorg.conf.d
    echo -e 'Section "Device"\n\tIdentifier "My GPU"\n\tDriver "nvidia"\nEndSection$Section' &gt; /etc/X11/xorg.conf.d/20-nvidia.conf
    sudo mv /etc/X11/xorg.conf.bak /etc/X11/xorg.conf
    sudo aptitude purge xserver-xorg-video-nouveau
    sudo reboot

## NVIDIA Video Driver Install from NVIDIA-Linux-x86-304.88.run package 


     sudo nano /etc/modprobe.d/blacklist.conf
     blacklist nouveau
     blacklist lbm-nouveau
     options nouveau modeset=0
     sudo update-initramfs -u
     sudo apt-get install dkms build-essential linux-headers-$(uname -r)
     sh NVIDIA-Linux-x86-XXX.YY.run --extract-only
     cd NVIDIA-Linux-x86-XXX.YY
     patch -p1 < /home/download/nvidia-linux-3.10.patch
     /etc/init.d/gdm3 stop
     chmod +x *.run
     ./*.run # after reboot login as root
     ln -s /usr/lib/xorg/modules/extensions/libglx.so.XXX.YY /usr/lib/xorg/modules/extensions/libglx.so
     ln -s /usr/lib/xorg/modules/extensions/libglx.so.XXX.YY /usr/lib/libglx.so
     ln -s /usr/lib/libGL.so.XXX.YY /usr/lib/libGL.so
     nvidia-xconfig
     sudo ./*.run --uninstall #remove
     ln -s /usr/lib/nvidia/current/libglx.so.304.88 /usr/lib/xorg/modules/extensions/libglx.so
     ln -s /usr/lib/nvidia/current/libglx.so.304.88 /usr/lib/libglx.so
     ln -s /usr/lib/i386-linux-gnu/nvidia/current/libGL.so.304.88 /usr/lib/libGL.so


## sh file


    #! /bin/sh
    rm /usr/lib/xorg/modules/extensions/libglx.so.orig
    rm /usr/lib/i386-linux-gnu/libGL.so.1.orig
    mv /usr/lib/xorg/modules/extensions/libglx.so /usr/lib/xorg/modules/extensions/libglx.so.orig
    mv /usr/lib/i386-linux-gnu/libGL.so.1 /usr/lib/i386-linux-gnu/libGL.so.1.orig
    ln -s /usr/lib/xorg/modules/extensions/libglx.so.304.131 /usr/lib/xorg/modules/extensions/libglx.so
    ln -s /usr/lib/libGL.so.304.131 /usr/lib/i386-linux-gnu/libGL.so.1


## After xserver-xorg-core package is updated

    mv /usr/lib/xorg/modules/extensions/libglx.so /usr/lib/xorg/modules/extensions/libglx.so.orig
    ln -s /usr/lib/xorg/modules/extensions/libglx.so.XXX.YY /usr/lib/xorg/modules/extensions/libglx.so
    sudo find /usr -iname "*libGL.so*"
    file /usr/lib/i386-linux-gnu/libGL.so.1
    file /usr/lib/i386-linux-gnu/libGL.so.1.2.0
    sudo mv /usr/lib/i386-linux-gnu/libGL.so.1 /usr/lib/i386-linux-gnu/libGL.so.1.orig
    sudo ln -s /usr/lib/libGL.so.304.131 /usr/lib/i386-linux-gnu/libGL.so.1
    glxinfo


## downgrade xserver-xorg when it conflict with  NVIDIA Video Driver ::
 
    sudo nano /etc/apt/sources.list    
    deb http://ftp.debian.org/debian stable main contrib non-free
    deb-src http://mirrors.163.com/debian/ stable main contrib non-free    
    sudo apt-cache show xserver-xorg
    sudo apt-get install xserver-xorg=1:7.7+3~deb7u1
    sudo dpkg -l "xserver-x*" | grep ^ii    
    sudo aptitude hold xserver-xorg
    ./NVIDIA-Linux-x86-304.131.run --extract-only
    patch NVIDIA-Linux-x86-304.131/kernel/nv-linux.h < nvidia_mtrr_k4_3.patch
    ./NVIDIA-Linux-x86-304.131/makeself.sh --target-os Linux --target-arch x86 NVIDIA-Linux-x86-304.131 NVIDIA-Linux-x86-304.131-patched.run "NVIDIA driver 304.131 patched for kernel 4.3+" ./nvidia-installer

