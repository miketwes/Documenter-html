# firefox

## rm cache

```bash
 rm ~/.mozilla/firefox/*.default/cookies.sqlite
 rm ~/.mozilla/firefox/*.default/*.sqlite  
 cd ~/.mozilla/firefox/*default/*sessions*
 rm recovery.jsonlz4
 rm -r ~/.cache/mozilla/firefox/*.default/*
 cd ~/.cache/thumbnails
 rm -rf normal
 mkdir normal

 #!/bin/bash
 echo "shredding cache"
 find ~/.cache/thumbnails -type f -name "*.png" -exec shred -f -u -z -n 1 {} \;
 echo "finished shredding" 
```

## css

Firefox's user interface can be modified by editing the userChrome.css and userContent. 
css files in ~/.mozilla/firefox/<profile_dir>/chrome/ (profile_dir is of the form hash.name, 
where the hash is an 8 character, seemingly random string and the profile name is usually default).
Note: The chrome/ folder and userChrome.css/userContent.css files may not necessarily exist,
so they may need to be created.


## View config file

about:support

## browser

```bash
chromium --proxy-server="http://127.0.0.1:8087"
sed -i -e 's/0/1/g' /home/mike/.mozilla/firefox/gupfzry5.default/user.js 
```
