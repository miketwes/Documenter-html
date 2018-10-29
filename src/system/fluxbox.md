# Fluxbox
 
## Fluxbox systemd auto login


    sudo nano /etc/systemd/system/getty.target.wants/getty@tty1.service
        
    #ExecStart=-/sbin/agetty --noclear %I $TERM
    ExecStart=-/sbin/agetty  -a mike --noclear %I $TERM
    
    sudo nano /etc/inittab
    
    #1:2345:respawn:/sbin/getty 38400 tty1
    1:2345:respawn:/sbin/agetty --autologin mike  --noclear tty1
    nano ~/.bashrc # add to last part
    if [ -z "$(pgrep Xorg)" ]
    then startx &
    else clear
    fi
    
    sudo mkdir /etc/systemd/system/getty@tty1.service.d
    sudo nano override.conf
    
    [Service]
    ExecStart=
    ExecStart=-/sbin/agetty  -a mike --noclear %I $TERM

## Window manager  packages
    
    sudo aptitude update
    sudo aptitude full-upgrade
    sudo aptitude dist-upgrade
    sudo aptitude install xorg  xserver-xorg-video-nvidia-legacy-304xx \
    xserver-xorg-video-all fluxbox xterm synaptic thunar localepurge geany \
    bleachbit synaptic sysv-rc-conf rar unrar mirage feh scrot geany \
    vim-gtk spyder grun sqlite3  gretl python-obspy \
    iceweasel lxappearance qt4-qtconfig \

## set background permanently
    
    nano ~/.fluxbox/init
    background: aspect | tiled | centered
    background.pixmap: /path/to/wallpaper.jpg

## Set a wallpaper
    
    apt-get install feh
    fbsetbg -f /home/braintix/wallpaper/eat-ya-chilis.png
    nano ~/.fluxbox/overlay
    background: aspect | tiled | centered
    background.pixmap: /path/to/wallpaper.jpg

## Randomly change wallpaper every n minutes
    
    chgWallpaper.sh
    
    sudo aptitude install cron
    #!/bin/bash
    export DISPLAY=:0.0
    fbsetbg -C /home/mike/t/desk/$(ls /home/mike/t/desk | sort -R | tail -1)
    
    sudo crontab -u mike -e
    */5 * * * * /bin/bash /home/mike/soft/chgWallpaper.sh # add below last line
    
    sudo /etc/init.d/cron start
    sudo service cron status
    systemctl status cron.service
    sudo systemctl stop cron.service
    
## Screens resolution 

    xrandr
    xrandr --output VGA-1 --mode 1024x768
    xrandr -s 1024x768
    
## screensaver
 
    xset s 0 600
    xset s of #Screensaver stop
