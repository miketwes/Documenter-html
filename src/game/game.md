# Game

## UrbanTerror

### Install  

    sudo aptitude install libqt4-network libsdl1.2-dev       
    https://up.barbatos.fr/urt/
    http://mirror.urtstats.net/urbanterror/

### libcurl. so not found: change /home/mike/.q3a/q3ut4/q3config.cfg  

    seta cl_cURLLib "libcurl.so.4"  


### add bot: /home/mike/soft/UrbanTerror43/UrbanTerror43/q3ut4/bot.cfg

    addbot boa 5 Blue 76 =lvl5=boa
    addbot cheetah 5 Blue 76 =lvl5=cheetah
    addbot chicken 5 Blue 76 =lvl5=chicken
    addbot cobra 5 Blue 76 =lvl5=cobra
    addbot c ockroach 5 Blue 76 =lvl5=ockroach
    addbot cougar 5 Blue 76 =lvl5=cougar
    addbot goose 5 Blue 76 =lvl5=goose
    addbot mantis 5 Blue 76 =lvl5=mantis
    addbot penguin 5 Blue 76 =lvl5=penguin
    addbot puma 5 Blue 76 =lvl5=puma
    addbot python 5 Blue 76 =lvl5=python
    addbot raven 5 Blue 76 =lvl5=raven
    addbot scarab 5 Blue 76 =lvl5=scarab
    addbot scorpion 5 Blue 76 =lvl5=scorpion
    addbot tiger 5 Blue 76 =lvl5=tiger
    addbot widow 5 Blue 76 =lvl5=widow

exec bot.cfg
  
## Quake 1

[Link to download Quake 1 Files](https://mega.co.nz/#!NEViWJLB!r4Refl08lTFXYqY-qhp8oBBIQX36SXgjesy6_wIR4JQ)  

[Link to download Quake 1 Client](http://quakeone.com) 

    sudo aptitude install darkplaces
    [exec] (quake1) {darkplaces -basedir /home/mike/soft/quake} <>


## Plant Vs Zombie

### "invalid command line parameter: -changedir" 

add parameter -changedir after pvz.exe

###  change money

    vi /home/mike/soft/*Zombies/userdata/user1.dat
    
    :%!xxd
    :%!xxd -r
    
    00000000: 0c00 0000 0700 0000 6200 0000 0100 0000  ........b.......
    00000000: 0c00 0000 0700 0000 6fff f000 0100 0000  ........b.......


## Road\ Rash

  1. Install wine-development
    
    sudo aptitude purge wine
    rm -rf    $HOME/.wine
    sudo aptitude install wine-development

  2. Download Road Rash 

    https://kat.cr/road-rash-t1890054.html

  3. Install Road Rash

    wine-development Road\ Rash.exe


  4. Edit registry, go to [HKEY_LOCAL_MACHINE\Software\Electronic Arts\RoadRash 95] change "Path"="C:\\somepath" to "Path"="C:\\yourpath"

    regedit-development


## 极品飞车热力追踪2的CD-key

    AVJ-XDTL-MSCJ-VPGJ
