# disk

## harddisk

### Check free disk space

    df -lh
    du --max-depth=1 -h
    du -sh *
    du -sh /var/*
    extract audio from flv adn f4v to mp3   


### Mount Windows ntfs disk

    fdisk -l
    mkdir /media/windows
    mount /dev/sda6 /media/windows/ -t ntfs -o nls=utf8,umask=0222
    cd windows/media
    umount /media/windows/

### 新增一块硬盘

```
   *1.关机，物理连接硬盘,如果是IDE硬盘，注意主、从盘的设置；如果是SCSI硬盘，注意选择一个没有被使用的ID号

   *2.开机，检查硬盘有没有被linux检测到,如果你没有检测到你的新硬盘，重启，检查连线，看看bios有没有认出它来

    dmesg |grep hd*(ide硬盘)
    dmesg |grep sd*(SCSI硬盘)
    less /var/log/dmesg

   *3.分区, 你可以使用fdisk，Sfdisk或者parted（GNU分区工具,linux下的partition magic)

   *4.格式化 mkfs

   *5.修改fstab vi /etc/fstab
   
```


## usb

### Linux formatting usb flash drive

```
    sudo fdisk -l
    sudo umount /dev/sdb
    sudo mkfs.vfat -F 32 /dev/sdb
    sudo mkfs.vfat /dev/sdb -I
    sudo mount /dev/sdb /media/usb
    sudo umount /media/usb

    sudo mount /dev/sdb1 /media/usb
    sudo cp *.mp3 /media/usb/
    sudo umount /media/usb
 ```   

### usb problems ===== 

F3 - an alternative to h2testw http://oss.digirati.com.br/f3/
```
    ~/f3.git/trunk$ sudo ./f3write /media/usb/
    ~/f3.git/trunk$ sudo ./f3read /media/usb/
    sudo dmesg
    ls /dev
    sudo fdisk -l
    sudo fdisk /dev/sdb
    sudo mkfs.vfat -n USBDISK /dev/sdb1
    sudo gparted    
    sudo dosfsck -a /dev/sdb1
    sudo df -Th    
    sudo mount --options remount,rw /dev/sdb1    
    sudo mount /dev/sdb1 /media/usb0
    sudo mount /media/usb0/ -o remount,rw
    sudo fdisk -l
    sudo mount -t vfat /dev/sdb1
    sudo umount /dev/sdb1 
    sudo mount /dev/sdb /media/usb
    sudo mount -o remount,rw /media/usb
    sudo umount /dev/sdb
    lsusb
    sudo dmesg | grep usb
```
