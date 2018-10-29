ff_set browser.search.defaulturl '"https://duckduckgo.com/"'

Here is the code:

#!/bin/bash

sed -i 's/user_pref("'$1'",.*);/user_pref("'$1'",'$2');/' user.js
grep -q $1 user.js || echo "user_pref(\"$1\",$2);" >> user.js


/home/mike/.mozilla/firefox/gupfzry5.default/User.js
user_pref("network.proxy.http", "127.0.0.1");
user_pref("network.proxy.http_port", 8087);
user_pref("network.proxy.type", 0);

sed  -i -e 's#user_pref("network.proxy.type", 1);#user_pref("network.proxy.type", 0);#g' /home/mike/.mozilla/firefox/gupfzry5.default/user.js

sed  -i -e 's#user_pref("network.proxy.type", 0);#user_pref("network.proxy.type", 1);#g' /home/mike/.mozilla/firefox/gupfzry5.default/prefs.js

sed 's#"http://www.fubar.com"#URL_FUBAR#g'

https://stackoverflow.com/questions/5099119/adding-a-zero-to-single-digit-variable

sed -i -e 's/0/1/g' /home/mike/.mozilla/firefox/gupfzry5.default/User.js


sed -i -e 's/abc/XYZ/g' /tmp/file.txt

Which will invoke sed to do an in-place edit due to the -i option. This can be called from bash.

If you really really want to use just bash, then the following can work:

while read a ; do echo ${a//abc/XYZ} ; done < /tmp/file.txt > /tmp/file.txt.t ; mv /tmp/file.txt{.t,}

https://stackoverflow.com/questions/7517632/how-do-i-escape-double-and-single-quotes-in-sed-bash
