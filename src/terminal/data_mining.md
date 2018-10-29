% Using commands and pipes to “mine” and extract data
% Ian! D. Allen – idallen@idallen.ca – www.idallen.com
% Winter 2015 - January to Apil 2015 - Updated Sun Jan 4 12:53:53 EST 2015

Data Mining
===========

Because of the power of Unix pipes and the rich set of command-line tools
available, Unix/Linux system administrators are often asked to extract or
“mine” data from various text files, or to convert files from one format to
another format.

The “mining” operation can take many forms; but, a common form is to process
a stream of text and extract certain fields from certain lines. One set of
commands selects the lines to extract; the other set of commands picks off
the desired fields from those lines (or vice-versa). Often these two
operations are repeated, narrowing down the selection until just the desired
information is displayed.

Data mining is easy, if you build up the Unix pipeline slowly, adding one
command at a time and watching the output each time.

Selecting lines and fields
--------------------------

Some Unix commands select lines from a text stream, others select fields, and
some can do both:

-   Select lines from text streams:

        grep, awk, sed, head, tail, look, uniq, comm, diff

-   Select fields in lines or parts of lines:

        awk, sed, cut

-   Transform text (change characters or words in lines):

        awk, sed, tr

The `sort` command is also useful for putting lines of text in order, often
for counting using `uniq -c`.

Become familiar with the data mining capabilities of the above commands.

Example 1 – fifth line or field
===============================

Problem: “Print the fifth directory from your `PATH` environment variable.”

This problem can be generalized to print the fifth field or fifth line of any
input stream. We will do an iterative solution built up slowly using simple
commands. There are several solutions.

Solution using `tr`, `head`, `tail`
-----------------------------------

First, we echo the `PATH` variable onto our screen and note that fields are
separated by colon (`:`) characters:

    $ echo "$PATH"
    /usr/bin:/usr/sbin:/sbin:/bin:/usr/games:/usr/lib/xscreensaver

Next, we convert the colons separating directories into newlines, so that
each directory is on a separate line. We do this so that we can later use
“line selection” commands to select the fifth directory as the fifth line
instead:

    $ echo "$PATH" | tr ':' '\n'
    /usr/bin
    /usr/sbin
    /sbin
    /bin
    /usr/games
    /usr/lib/xscreensaver

Now that the fields are on separate lines, we can use a “line selection”
command to select the first five lines:

    $ echo "$PATH" | tr ':' '\n' | head -5
    /usr/bin
    /usr/sbin
    /sbin
    /bin
    /usr/games

Now, we use a “line selection” command to select the last line (of the first
5):

    $ echo "$PATH" | tr ':' '\n' | head -5 | tail -1
    /usr/games

This is the answer – `/usr/games` is the fifth directory (the last line of
the first five lines).

Solution using `awk`
--------------------

We can also do the same operation using the “field selection” commands to
extract the fifth field.

-   The `awk` command `'{print $1}'` prints the first field on each line.
-   The `awk` command `'{print $2}'` prints the second field on each line.
-   The `awk` command `'{print $NF}'` prints the last field on each line.

By default, `awk` separates fields by blanks; so, we need to turn the colons
in `PATH` into blanks. Again, build up the command iteratively:

    $ echo "$PATH"
    /usr/bin:/usr/sbin:/sbin:/bin:/usr/games:/usr/lib/xscreensaver

    $ echo "$PATH" | tr ':' ' '
    /usr/bin /usr/sbin /sbin /bin /usr/games /usr/lib/xscreensaver

    $ echo "$PATH" | tr ':' ' ' | awk '{print $5}'
    /usr/games

However, `awk` has a convenient option to use another separator character:

    $ echo "$PATH" | awk -F: '{print $5}'
    /usr/games

Solution using `cut`
--------------------

If you happen to know that `cut` can split a line using any delimiter
character, you could also use:

    $ echo "$PATH" | cut -d: -f5
    /usr/games

Solution using `sed`
--------------------

Even `sed` lets us pick off the fifth field separated by colons using a
“regular expression” pattern (though this is very messy!):

    $ echo "$PATH" | sed -e 's/^[^:]*:[^:]*:[^:]*:[^:]*:\([^:]*\):.*/\1/'
    /usr/games

Example 2 – second-to-last line or field
========================================

Problem: “Print the second-to-last directory from your `PATH` environment
variable.”

This can be generalized to print the second-to-last line of any input.

Use the same basic line-oriented form as the previous example, only select
the fields from the end of the list instead of the beginning. Build up the
command one-by-one:

    $ echo "$PATH"
    $ echo "$PATH" | tr ':' '\n'
    $ echo "$PATH" | tr ':' '\n' | tail -2
    $ echo "$PATH" | tr ':' '\n' | tail -2 | head -1

This is the answer – it is the second-to-last directory (the first line of
the last two lines). We can also do the same operation using the “field
selection” commands to extract the fifth field. Build up the pipe line
iteratively:

    $ echo "$PATH"
    $ echo "$PATH" | tr ':' ' '
    $ echo "$PATH" | tr ':' ' ' | awk '{print $(NF-1)}'
    -OR-
    $ echo "$PATH" | awk -F: '{print $(NF-1)}'
    -OR-
    $ echo "$PATH" | sed -e 's/^.*:\([^:]*\):[^:]*$/\1/'

Note the use of single quotes to protect the dollar signs in the command-line
script fragments from expansion the shell. We want the commands themselves to
see the dollar symbols; we don’t want the shell to expand them.

Example 3 – sort lines or fields
================================

Problem: “Sort the elements in the `PATH` variable in ascending order.”

This can be generalized to sort any field-delimited list.

Since the `sort` command only works on lines, not fields, we must first
transform the `PATH` into a list of directories, one per line:

    $ echo "$PATH"
    /usr/bin:/usr/sbin:/sbin:/bin:/usr/games:/usr/lib/xscreensaver

    $ echo "$PATH" | tr ':' '\n'
    /usr/bin
    /usr/sbin
    /sbin
    /bin
    /usr/games
    /usr/lib/xscreensaver

Now, we can add the sort command:

    $ echo "$PATH" | tr ':' '\n' | sort
    /bin
    /sbin
    /usr/bin
    /usr/games
    /usr/lib/xscreensaver
    /usr/sbin

Now, we can put the line back together by changing all the newlines back into
colons:

    $ echo "$PATH" | tr ':' '\n' | sort | tr '\n' ':'
    /bin:/sbin:/usr/bin:/usr/games:/usr/lib/xscreensaver:/usr/sbin:

The above line adds an extra colon (`:`) on the end of the `PATH`, which
isn’t correct. To get rid of the final colon, a final edit with `sed`:

    $ echo "$PATH" | tr ':' '\n' | sort | tr '\n' ':' | sed -e 's/:$//'
    /bin:/sbin:/usr/bin:/usr/games:/usr/lib/xscreensaver:/usr/sbin

Example 4 – only the first five lines or fields
===============================================

Problem: “Keep only the first five elements of the `PATH`.”

This can be generalized to keep the first **N** fields of any list.

We will again transform the fields of `PATH` into directories on separate
lines, select the first five lines, then put the directories back together
again. Build up the pipeline iteratively, checking each step:

    $ echo "$PATH"
    $ echo "$PATH" | tr ':' '\n'
    $ echo "$PATH" | tr ':' '\n' | head -5 
    $ echo "$PATH" | tr ':' '\n' | head -5 | tr '\n' ':'
    $ echo "$PATH" | tr ':' '\n' | head -5 | tr '\n' ':' | sed -e 's/:$//'

Make sure to get rid of the trailing colon added by the final newline.

Example 5 – count of field contents
===================================

Problem: “How many unique shells are in the `/etc/passwd` file?”

This can be generalized to count the unique field values in any data.

Build up the solution iteratively, starting with simple commands.

The shell field is the seventh colon-delimited field in the `passwd` file.
The commands `awk`, `sed`, or `cut` can pick out a field from a file. We will
use `cut` to pick out the seventh field delimited by a colon.

Once we have only the seventh field being output, we can use `sort` and
`uniq` to reduce the repeated lines to only unique lines, and then count
them.

Because the `/etc/passwd` file some machines is huge (and the output on our
screen would be huge), we will start making our pipeline with only the first
10 lines of the `passwd` file until we know we have the correct command line,
then we will use the solution on the whole `passwd` file.

First, get 10 lines from the top of the `passwd` file:

    $ head /etc/passwd
    root:x:0:0:root:/root:/bin/bash
    daemon:x:1:1:daemon:/usr/sbin:/bin/sh
    bin:x:2:2:bin:/bin:/bin/sh
    sys:x:3:3:sys:/dev:/bin/sh
    sync:x:4:65534:sync:/bin:/bin/sync
    games:x:5:60:games:/usr/games:/bin/sh
    man:x:6:12:man:/var/cache/man:/bin/sh
    lp:x:7:7:lp:/var/spool/lpd:/bin/sh
    mail:x:8:8:mail:/var/mail:/bin/sh
    news:x:9:9:news:/var/spool/news:/bin/sh

Cut out only the seventh field in each line, delimited by a colon:

    $ head /etc/passwd | cut -d : -f 7
    /bin/bash
    /bin/sh
    /bin/sh
    /bin/sh
    /bin/sync
    /bin/sh
    /bin/sh
    /bin/sh
    /bin/sh
    /bin/sh

Sort the fields so that identical field values are adjacent:

    $ head /etc/passwd | cut -d : -f 7 | sort
    /bin/bash
    /bin/sh
    /bin/sh
    /bin/sh
    /bin/sh
    /bin/sh
    /bin/sh
    /bin/sh
    /bin/sh
    /bin/sync

Reduce the output to unique lines by removing adjacent duplicate lines with
`uniq`:

    $ head /etc/passwd | cut -d : -f 7 | sort | uniq
    /bin/bash
    /bin/sh
    /bin/sync

Count the unique lines:

    $ head /etc/passwd | cut -d : -f 7 | sort | uniq | wc -l
    3

We have the correct command line. Now use the solution on the whole file, not
just on the first ten lines:

    $ cat /etc/passwd | cut -d : -f 7 | sort | uniq | wc -l
    6

Note that the `cut` command is quite capable of reading files itself - there
is no need to use a superfluous and unnecessary `cat` command to do it:

    $ cut -d : -f 7 /etc/passwd | sort | uniq | wc -l
    6

The sort command also has a option that only outputs unique lines. If we knew
about it, we would write:

    $ cut -d : -f 7 /etc/passwd | sort -u | wc -l
    6

Does the pipeline below (the reverse of the above) give the same output?

    $ sort -u /etc/passwd | cut -d : -f 7 | wc -l
    48                                # WRONG ANSWER!

When selecting lines and fields from a text stream, often the order in which
you do the selection matters.

Example 7 – Extract fields from a web page
==========================================

Problem: “Extract the temperature for Ottawa from a weather web page.”

Here is a URL that has the RSS feed for the Ottawa weather:

    http://weather.gc.ca/rss/city/on-118_e.xml

We will look at the unformatted page and two formatted versions of the page,
and decide which version is easiest to work with:

    $ url='http://weather.gc.ca/rss/city/on-118_e.xml'

    $ wget -O wget.txt "$url"
    ...raw XML RSS page downloads here into wget.txt file...

    $ lynx -dump "$url" >lynx.txt
    ...formatted web page is in lynx.txt...

    $ alias ee='elinks -dump -no-numbering -no-references'
    $ ee "$url" >elinks.txt
    ...formatted web page is in elinks.txt...

The formatted `elinks` page is the easiest to work with.

The first step is to extract from the page the line we want. The Temperature
we want is on this line in the `elinks` output:

    [...]
    Temperature: -8.6°C
    [...]

That’s easy to extract. Send the page fetched to standard output, into a pipe
into `fgrep` to extract the right line:

    $ ee "$url" | fgrep 'Temperature:'
    Temperature: -8.6°C

If we only wanted the actual number, we could extract the last field from the
line:

    $ ee "$url" | fgrep 'Temperature:' | awk '{ print $NF }'
    -8.6°C

In a script, we might use shell Command Substitution to place the output into
a variable for later use:

    $ cat temp.sh
    #!/bin/sh -u
    city='Ottawa'
    url='http://weather.gc.ca/rss/city/on-118_e.xml'
    temp=$( elinks -dump -no-numbering -no-references "$url" \
        | fgrep 'Temperature:' | awk '{ print $NF }' )
    echo "The temperature in $city is: $temp"
    $ ./temp.sh
    The temperature in Ottawa is: -8.6°C

Sometimes the pattern we want matches more than one line in the weather
report, and we might get multiple output lines:

    $ ee "$url" | fgrep 'Wind'
    Wind Chill: -16
    Wind: NW 19 km/h gust 28 km/h
    2014-04-16T05:01:00Z 2014-04-16T05:01:00Z Partly cloudy. Wind northwest 20
    2014-04-16T05:01:00Z 2014-04-16T05:01:00Z Sunny. Wind northwest 20 km/h

We can limit the output to just the lines we want using `head` and `tail`,
but be careful that the order and number of lines never changes or else the
output will be wrong:

    $ ee "$url" | fgrep 'Wind' | head -n2 | tail -n1
    Wind: NW 19 km/h gust 28 km/h

The above fails when the **Wind Chill** line is not included in the weather
report!

Example 8 – Summarize system log file information
=================================================

Here are command pipelines that extract information from the system
authorization log file `/var/log/auth.log` on who is trying to attack
the [Course Linux Server] (may require privileged read permission on the
log files). The format of each line in this file is like this:

    Jan  2 09:51:17 idallen-ubuntu sshd[28008]: Failed password for root from 50.46.204.2 port 33092 ssh2

Each line starts with the date, followed by some text. (Different log files
may have different date formats.)

> Each of these commands below is one, long single command line, but to make
> the long lines easier to read in this document the long lines have been
> split into multiple lines by using a backslash at the end of a line to mean
> “continue this with the next line”. You can either type the lines with the
> backslashes at the end, as shown below, or else simply type one long line
> and omit the trailing backslashes:

-   Find users with most failed passwords (since the log began):
    -   The userid field is the 9th blank-separated field on each of these
        lines in `/var/log/auth.log`
    -   We need a numeric sort on the output of `uniq -c`

    fgrep 'Failed password' /var/log/auth.log \
            | awk '{print $9}' | sort | uniq -c | sort -nr | head

-   Failed passwords only in January:
    -   This log file uses the abbreviation `Jan` for “January”. (Different
        log files may have different date formats.)
    -   Add a second `fgrep` to further limit the lines to ones that contain
        the date string `Jan` followed by a blank:

    fgrep 'Failed password' /var/log/auth.log \
        | fgrep 'Jan ' \
        | awk '{print $9}' | sort | uniq -c | sort -nr | head

-   Failed passwords only in February:
    -   This log file uses the abbreviation `Feb` for “February”.
    -   Just change `Jan` to `Feb` in the search string:

    fgrep 'Failed password' /var/log/auth.log \
        | fgrep 'Feb ' \
        | awk '{print $9}' | sort | uniq -c | sort -nr | head

-   Connections refused only in February:
    -   Change `Failed password` to `refused connect` in the search string.
    -   The IP address is the 10th field on each of these lines in
        `/var/log/auth.log`:

    Jan  2 02:18:27 idallen-ubuntu sshd[18078]: refused connect from 222.189.239.75 (222.189.239.75)

    fgrep 'refused connect' /var/log/auth.log \
        | fgrep 'Feb ' \
        | awk '{print $10}' | sort | uniq -c | sort -nr | head

Re-formatting data for parsing
==============================

Sometimes the data you are reading isn’t nicely separated into lines on which
you can use `grep`. You can use the `tr` (“translate”) command to split up
the file into separate lines, based on some list of delimiters.

For parsing HTML pages, it’s often useful to split the long lines in HTML
pages on angle brackets and/or quotes. This can put the data you want to
extract on separate lines so that `grep` can find it easily.

Let’s try to extract the URL that has the Ottawa weather from the master
index page of weather in major Canadian cities:

    $ url='http://weather.gc.ca/canada_e.html'
    $ wget -q -O - "$url" | fgrep 'Ottawa'
    <area href="/city/pages/on-118_metric_e.html" title="Ottawa" alt="Ottawa" shape="poly" coords="417,445,428,445,431,453,442,453,442,463,427,463,427,474,462,474,462,508,420,508,417,480,414,463,406,463,406,449" />
    <td headers="header1"><a href='/city/pages/on-118_metric_e.html'>Ottawa (Kanata - Orléans)</a></td><td headers="header2">Clear</td><td headers="header3" class="align-right">-9&deg;C</td></tr>

The initial try finds two (long) lines. Both lines contain the `href=` URL
for the Ottawa weather page. We decide to use the second one, so we refine
the search to only select that line and not the first one:

    $ wget -q -O - "$url" | fgrep '>Ottawa'
    <td headers="header1"><a href='/city/pages/on-118_metric_e.html'>Ottawa (Kanata - Orléans)</a></td><td headers="header2">Clear</td><td headers="header3" class="align-right">-9&deg;C</td></tr>

That very long line is messy for getting at the URL for Ottawa, which is
inside single quotes in the middle of the line. Let’s split that one long
line into separate lines by turning single quotes into newlines:

    $ wget -q -O - "$url" | fgrep '>Ottawa' | tr -s "'" '\n'
    <td headers="header1"><a href=
    /city/pages/on-118_metric_e.html
    >Ottawa (Kanata - Orléans)</a></td><td headers="header2">Clear</td><td headers="header3" class="align-right">-9&deg;C</td></tr>

We want that `/city/pages/...` URL, which is now on its own line and easy to
extract with another `grep`:

    $ wget -q -O - "$url" | fgrep '>Ottawa' | tr -s "'" '\n' | fgrep '/city/pages/'
    /city/pages/on-118_metric_e.html

In a script, we usually save the output in a variable using shell Command
Substitution. Later, we output an HTML hyperlink to the Ottawa weather page:

    $ cat ottawa.sh
    #!/bin/sh -u
    baseurl='http://weather.gc.ca'
    canadaurl="$baseurl/canada_e.html"
    wanturl=$( wget -q -O - "$canadaurl" \
        | fgrep '>Ottawa' | tr -s "'" '\n' | fgrep '/city/pages/' )
    fullurl="$baseurl$wanturl"
    echo "Link to Weather in <a href='$fullurl'> Ottawa </a>"
    $ ./ottawa.sh
    Link to Weather in <a href='http://weather.gc.ca/city/pages/on-118_metric_e.html'> Ottawa </a>

Using `cut` vs. `awk` to extract fields from lines
==================================================

The `cut` command treats every occurrence of the delimiter as the beginning
of a new field. This makes it wrong to use in many situations.

    $ echo "a b c" | awk '{print $2}'       # output is: b
    $ echo "a b c" | cut -d ' ' -f 2        # output is: b
    $ echo "a b c" | cut -d ' ' -f 3        # output is: c

    $ echo "a  b c" | awk '{print $2}'      # output is: b
    $ echo "a  b c" | cut -d ' ' -f 2       # output is:      # WHY?
    $ echo "a  b c" | cut -d ' ' -f 3       # output is: b    # WHY?

    $ echo "a   b c" | awk '{print $2}'     # output is: b
    $ echo "a   b c" | cut -d ' ' -f 2      # output is:      # WHY?
    $ echo "a   b c" | cut -d ' ' -f 3      # output is:      # WHY?
    $ echo "a   b c" | cut -d ' ' -f 4      # output is: b    # WHY?

For example, you might try to use `cut` to extract the current day from the
date string (though there are easier ways to get this information):

    $ date=$( date )
    $ echo "The date is $date"
    The date is Wed Oct 16 13:51:54 EDT 2008
    $ echo "$date" | cut -d ' ' -f 3
    16                                           # just the day number

This looks like it’s working fine, until next month…

    $ date=$( date )
    $ echo "The date is $date"
    The date is Fri Nov  1 12:15:45 EDT 2008
    $ echo "$date" | cut -d ' ' -f 3
                                                 # empty!  WHY?
    $

Woops! The extra blank in front of the day `1` has caused `cut` to come up
with an empty third field. This is not what we want.

The `awk` command behaves more reasonably when looking for fields separated
by *one or more* blanks. By default, `awk` splits up lines on any non-zero
amount of whitespace (blanks and tabs), so `awk` does not get confused by the
extra blanks between fields:

    $ date=$( date )
    $ echo "The date is $date"
    The date is Fri Nov  1 12:15:45 EDT 2002
    $ echo "$date" | awk '{print $3}'
    1

This works much better. `awk` doesn’t care if there is one blank or many
blanks; it still divides the line up into the same number of fields.

Usually `awk` does what your eyes expect when extracting fields separated by
blanks. Avoid `cut` for extracting fields unless you know that only *one*
delimiter exists between fields. (The password and group files are always
delimited by exactly *one* colon between each field.)

Other Tricks and Recipes
========================

Looking for all of a list or any of a list of strings
-----------------------------------------------------

Looking for lines containing **all** of a list of strings can be done by
chaining `grep` commands together:

    $ fgrep 'string one' filenames... | fgrep 'string two'

Only lines containing **both** `string one` **and** `string two` will
display. This can be extended to any number of text strings with more `grep`.

To find lines that contain **any** of a list of strings, use the `-e` option
to `grep`:

    $ fgrep -e 'string one' -e 'string two' filenames...

Lines containing `string one` **or** `string two` will display. This can be
extended to any number of text strings with more `-e` options.

Extract the lines between two patterns
--------------------------------------

You want to extract a block of lines, starting at a line matching the first
pattern and stopping at the line matching the second pattern.

    ... | grep -A 1000 "start pattern" | grep -B 1000 "end pattern"
    # The end pattern must be within 1000 lines of the start pattern in
    # the input stream.

    -OR-

    ... | sed -n -e '/start pattern/,/end pattern/p'
    # This above solution uses the "stream editor".

    -- 
    | Ian! D. Allen  -  idallen@idallen.ca  -  Ottawa, Ontario, Canada
    | Home Page: http://idallen.com/   Contact Improv: http://contactimprov.ca/
    | College professor (Free/Libre GNU+Linux) at: http://teaching.idallen.com/
    | Defend digital freedom:  http://eff.org/  and have fun:  http://fools.ca/

[Plain Text] - plain text version of this page in [Pandoc Markdown]
format 

  [Course Linux Server]: 070_course_linux_server.html
  [Plain Text]: 805_data_mining.txt
  [Pandoc Markdown]: http://johnmacfarlane.net/pandoc/
  [805_data_mining]:http://teaching.idallen.com/cst8207/15w/notes/805_data_mining.html




### remove a-z from txt file:
    sed  's/[a-z]//g' <<< cat sxc.txt > sxc1.txt

### Delete empty lines using sed \s to match any whitespace character
    sed '/^\s*$/d' <<< cat dyz1.txt > dyz2.txt

### append a character at end of each line of a file, add text at the end of each line
    
    touch te1.txt
    123 456
    sed 's/$/ 789/g' te1.txt  sed 's/$/ 789/' new_te1.txt
    123 456 789
    sed 's/$/ 3/' zi_3.txt > 3_zi.txt
    $ awk '{print $0, "| COUNTRY"}' file
 
### Delete empty lines using sed 
     sed '/^\s*$/d'

This uses \s to match any whitespace character.

sed '/^$/d' should be fine, are you expecting to modify the file in place? 
If so you should use the -i flag. sed -i '/^$/d'




### Add a prefix string to beginning of each line

sed -e 's/^/prefix/' file

If you want to edit the file in-place
sed -i -e 's/^/prefix/' file

If you want to create a new file
sed -e 's/^/prefix/' file > file.new

If prefix contains /, you can use any other character not in prefix, or escape the /, so the sed command becomes

's#^#/opt/workdir#'
or
's/^/\/opt\/workdir/'
awk '$0="prefix"$0' file > new_file

If your prefix is a bit complicated, just put it in a variable:

prefix=path/to/file/

Then, you pass that variable and let awk deal with it:

awk -v prefix="$prefix" '{print prefix $0}' input_file.txt

If you have Perl:

perl -pe 's/^/PREFIX/' input.file

Using the shell:

#!/bin/bash
prefix="something"
file="file"
while read -r line
do
 echo "${prefix}$line"
done <$file > newfile
mv newfile $file



### Sed: Delete lines in files that contain other than a-z ,0-9 and "."

```
ls | while read FILE; do
  sed -n "/^[a-z0-9.-]\+$/ p" $FILE > FILE.tmp.$$
  cp -f $FILE.tmp.$$ $FILE && rm $FILE.tmp.$$
done



ls | while read FILE; do
  grep "^[a-z0-9.-]\+$" $FILE > $FILE.tmp.$$
  cp -f $FILE.tmp.$$ $FILE && rm $FILE.tmp.$$
done

ls sitemap.*.xml | while read FILE; do
  sed -n "/^[a-z<>/0-9.:-]\+$/ p" $FILE > FILE.tmp.$$
  cp -f $FILE.tmp.$$ $FILE && rm $FILE.tmp.$$
done
    
sed 's/ [A-Za-z_]*/ /'

sed 's/ [a-z]/ p' <<<'host_192.168.0.100 host_192.168.0.100'

sed 's/ [A-Za-z_]*/ /' <<<'host_192.168.0.100 host_192.168.0.100'
host_192.168.0.100 192.168.0.100   
sed 's/[a-z]*/ /' <<<'host_192.168.0.100 host_192.168.0.100'
sed  's/[a-z]//g' <<< cat s1.txt
```

### pinyin

去掉非拼音相关的字符，只保留拼音字母，并存放到yindiao1.txt文件中。

cat yindiao.txt | tr -s ' ' '\n' | sed -r -n "s/([^a-z])//pg" >yindiao1.tx

(2).将带音节的字母替换。

如何处理音节，可能很多人不知道，但仔细阅读过正则表达式语法说明的人想必都知道如何表示。

在正则表达式中，使用[=a=]来表示字母a的各种音节，即āáǎà。其实这不是正则中的语法，而是一种类，它称为等价类。

常见的类集还有：

    字符类：如[:alpha:]、[:alnum:]......；
    排序类：如[.ab.]，排序类明确表示其内字符是一个整体，例如这里的例子表示只能匹配"ab"，不能匹配a或b或ba。

回归正题，现在就可以将带有音节的字符进行替换了。

由于26个字母，每个字母都有4个音节，光是音节字符就共有26*4=104个。所以，想要替换文件中的所有音节字符，考虑使用循环。

for i in {a..z};do
    sed -i -r "s/[[="$i"=]]/"$i"/g" yindiao1.txt
done

如果不知道sed中的引号为什么这样用，见sed修炼系列(四)：sed中的疑难杂症。

注意，这里sed必须使用"-i"选项，不能重定向，因为每次循环都只改变一个字母的音节，每次重定向到文件中显然不合适。

至此，得到了下面没有音节的拼音。最后剩下排序和去重。

sort yindiao1.txt | uniq -u > yindiao.txt
