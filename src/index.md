# Linux install  
 
## Install Debian system  

  1. get Win32 Disk Imager from http://sourceforge.net/projects/win32diskimager/     
  2. get Debian iso from:  
  
    http://www.debian.org/devel/debian-installer/netinst (generally 150-280 MB) CD images i386  
         
    http://cdimage.debian.org/cdimage/daily-builds/daily/arch-latest/i386/iso-cd/debian-testing-i386-netinst.iso  
          
   After the download completes, rename the file extension from .iso to .img.
   details see: http://dfarq.homeip.net/2013/05/how-to-build-bootable-debian-installation-usb-media-from-windows/

  3. optional  get 磁盘工具：[Acronis Disk Director Suite V10.00.2160 汉化版](http://mydown.yesky.com/soft/195/195606.shtml)
  4. install Debian: During the installation choose "Advanced options" -> "Expert install". 


## Update Kernel  

https://www.kernel.org/  

http://kernel.ubuntu.com/~kernel-ppa/mainline/  

	wget http://kernel.ubuntu.com/~kernel-ppa/mainline/v3.11-saucy/linux-headers-3.11.0-031100-generic_3.11.0-031100.201309021735_i386.deb  

	wget http://kernel.ubuntu.com/~kernel-ppa/mainline/v3.11-saucy/linux-headers-3.11.0-031100_3.11.0-031100.201309021735_all.deb  

	wget http://kernel.ubuntu.com/~kernel-ppa/mainline/v3.11-saucy/linux-image-3.11.0-031100-generic_3.11.0-031100.201309021735_i386.deb  

	sudo dpkg -i linux-headers-3.11.0*.deb linux-image-3.11.0*.deb

## Change linux boot order 

    sudo geany /etc/default/grub
        GRUB_DEFAULT=2
        GRUB_TIMEOUT=5
    sudo update-grub


## Debian reset password

    init=/bin/bash 
    fdisk -l    
    mount -o remount,rw /dev/sda1 /
    passwd
    #mount -o remount,rw / 
    #mount -a     
    #passwd root 
    reboot

Boot into grub, select single user but do not press enter.
Press e to go into edit mode.
Scroll down to the kernel line, it starts with "linux /boot/vmlinuz-2.6……."
Scroll to the end of that line and press space key once and type init=/bin/bash
Press Ctrl X to boot 

Remount / as Read/Write  
  
    mount -rw -o remount /
 
Change password with  
  
    passwd
 
type new password, confirm and hit enter and then reboot.  
  
    reboot
