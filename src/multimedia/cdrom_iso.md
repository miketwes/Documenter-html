# cdrom and iso

## wine install iso file

    sudo aptitude install bchunk
    bchunk cpy-pvszgoty.bin cpy-pvszgoty.cue cpy-pvszgoty.iso
    sudo mount -t iso9660 -o loop,user cpy-pvszgoty.iso01.iso /mnt/cdrom
    cd /mnt/cdrom
    sudo umount /mnt/cdrom

    
## Burn data dvd silicon
    
    sudo apt-get install 'dvd+rw-tools'
    no need mount
    growisofs -dvd-compat -Z /dev/sr0 -J -R -joliet-long  /home/mike/dvd 
    sudo mount /dev/cdrom /mnt/cdrom
    cd /mnt/cdrom
    umount /mnt/cdrom 
    sudo eject /dev/sr0   
    lsblk
    dmesg | egrep -i --color 'cdrom|dvd|cd/rw|writer'
    mkdir -p /mnt/cdrom    
    mount -t iso9660 -o ro /dev/deviceName /path/to/mount/point
    mount -t iso9660 -o ro /dev/cdrom /mnt/cdrom
    mount -t auto /dev/cdrom /mnt/cdrom    
    mount
    df    
    cd /cdrom
    cp -v foo.txt /tmp    
    cp -v /cdrom/foo.txt /tmp    
    umount /cdrom
    umount /dev/cdrom
    umount /mnt/cdrom    
