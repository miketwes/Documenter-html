# file and folder

## Change folder permissions and ownership

I would like the user to have full rights on this folder (as well as all sub-directories and files in it):

~/.blabla

currently owned by root.

Use chown to change ownership and chmod to change rights.

    sudo chown -R username:group directory
    sudo chown -R $USER:$USER /path/to/dir

Make the current user own everything inside the folder (and the folder itself):
sudo chown -R $USER ~/.blabla

will change ownership (both user and group) of all files and directories inside of directory and directory itself.


## xclip
    ls -la | xclip
    alias xclip="xclip -selection c"
    echo test | xclip    
    Ctrl+v === test
    cat s1.json | xclip


## Generate md5 checksum for all files in a directory

```bash
    md5sum * > checklist.chk  # generates a list of checksums for any file that matches *
    md5sum -c checklist.chk   # runs through the list to check them
    find -exec md5sum "{}" \; > checklist.chk
    find ./backup -type f -print0 | xargs -0 md5sum > checklist.chk
``

## download file use aria2c
    python -m SimpleHTTPServe
    head -n 10 .aria2/aria2.conf
    aria2c  --enable-rpc=true --conf-path=/home/mike/.aria2/aria2.conf
    http://0.0.0.0:8000/ari/  //setup connetsetup input token in .aria2/aria2.conf


## diff

    diff <(sort text2) <(sort text1)
    
    diff <(ls -1a ./dir1) <(ls -1a ./dir2)
    
    diff <(ls -1a ./ty125_files) <(sort n1.txt)
    ls -1 | sort
    
    To sort them in reverse order:
    ls -1 | sort -r


## One liner to find and remove duplicate files in Linux Posted by ajay on October 16, 2009


I recently found a one-liner to report all duplicate files under the current directory and its subdirectories here. The command is as follows –

    find -not -empty -type f -printf "%s\n" | sort -rn | uniq -d | xargs -I{} -n1 find -type f -size {}c -print0 | xargs -0 md5sum | sort | uniq -w32 --all-repeated=separate

It first compares size and then compares md5 hash in order to find duplicate files. Since this one just reports and doesnt delete the files, I’ve made slight modifications to find and DELETE duplicate files as well. Don’t worry, it’ll ask your permission before running the delete command over all files. Here it goes –

    find -not -empty -type f -printf "%s\n" | sort -rn | uniq -d |  xargs -I{} -n1 find -type f -size {}c -print0 | xargs -0 md5sum | sort | uniq -w32 --all-repeated=separate | cut -f3-100 -d ' ' | tr '\n.' '\t.' | sed 's/\t\t/\n/g' | cut -f2-100 | tr '\t' '\n' | perl -i -pe 's/([ (){}-])/\\$1/g' | perl -i -pe 's/'\''/\\'\''/g' | xargs -pr rm -v



    find -not -empty -type f -printf “%s\n” | sort -rn | uniq -d | xargs -I{} -n1 find -type f -size {}c -print0 | xargs -0 md5sum | sort | uniq -w32 –all-repeated=separate Finding duplicates

www.dublicatefilesdeleter.com

dupeGuru - finds duplicate files - Hardcoded Software

## linux Duplicate Files Deleter 

    sudo aptitude install fdupes
    sudo aptitude install fslint
    fslint-gui

