# Mouse

##  Change mouse to left handed

    xmodmap -e "pointer = 3 2 1" 

##  Mouse cursor

    sudo aptitude install dmz-cursor-theme
    sudo update-alternatives --config x-cursor-theme
    mdetect - mouse device autodetection tool
    sudo aptitude install mdetect


# dmesg filled with "evbug.c: Event. Dev: input5, Type: 0, Code: 0, Value: 0"
    log are filled with info like:
    output of dmesg:


    [ 2836.722627] evbug.c: Event. Dev: input5, Type: 4, Code: 4, Value: 156
    [ 2836.722638] evbug.c: Event. Dev: input5, Type: 1, Code: 96, Value: 0
    [ 2836.722645] evbug.c: Event. Dev: input5, Type: 0, Code: 0, Value: 0


    tail -n2 /etc/modprobe.d/blacklist.conf
    #evbug
    blacklist evbug
