# Sound

## Adjust microphone

cat /proc/asound/cards
arecord -l

arecord -d 10 test.wav
aplay test.wav

alsamixer
amixer set Capture 5%-

sudo aptitude install aumix 

amixer set 'Rear Mic' 90% mute cap
amixer set 'Rear Mic Boost' 80%
amixer sget 'Input Source'
Simple mixer control 'Input Source',0
  Capabilities: cenum
  Items: 'Front Mic' 'Rear Mic' 'Line' 'CD' 'Mix'
  Item0: 'Front Mic'
  
amixer -c0 cset iface=MIXER,name='Input Source',index=1 'Front Mic' 
# (Record from Front Mic)
 
slightly modified according to my sound-card and setup 
(default sound-card, different items ordering) :

amixer cset name='Input Source',index=0 'Rear Mic'           
 
 
## Set volume from terminal

http://unix.stackexchange.com/questions/32206/set-volume-from-terminal
For interactive usage you can use alsamixer. For scripting (e.g. binding to key combinations) take a look at amixer.

alsamixer is included by default in most systems.

To set the master volume use:

# Gets a list of simple mixer controls
$ amixer scontrols 
Then set it to the desired volume, as an example

$ amixer sset 'Master' 50%

# increase by 3%
amixer -q sset Master 3%+

# decrease by 3%
amixer -q sset Master 3%-

# mute/unmute
amixer -q sset Master toggle

pamixer 
 
        
## has no sound

 sudo aptitude install alsa-base
 sudo alsa force-reload
 
### SMPlayer not playing any sound

go to the preferences (Ctrl+P), audio tab and changed the output 
controller from 'pulse' to 'alsa'

http://askubuntu.com/questions/225445/smplayer-not-playing-any-sound 


