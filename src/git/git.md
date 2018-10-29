## create a new repository on the command line

```
cd /home/mike/t/project/Linux-pinyin/
git add .
git status
git commit -m "first commit"
git remote add origin https://github.com/miketwes/Linux-pinyin.git
git push -u origin master

git add LICENSE
git commit -m "add LICENSE"
git push

# hint: to the same ref. You may want to first integrate the remote changes 
# hint: (e.g., 'git pull ...') before pushing again.

git push -f origin master or git pull then git push

git clone https://github.com/miketwes/Documenter-html.git
cd Documenter-html
git add .
git status
git commit -m "first commit"
git push

git add src/git/git.md
git status
git commit --amend -m "add lines "
git log
git push -f origin master


git reset --merge
git rebase
git commit --amend
git pull
git push

```

## git记住用户名和密码

touch .git-credentials

创建完成后，在该文件中输入：

https://username:password@github.com

注：username对应你的用户名，password对应你的密码

git config --global credential.helper store

store为永久存储，当然也可以设置临时的

git config –global credential.helper cache

默认为15分钟，如果想设置保存时间的话，可以输入：

git config credential.helper ‘cache –timeout=3600’

这样就设置了一个小时的有效时间。

执行完后查看%HOME%目录下的.gitconfig文件，会多了一项：

[credential]helper=store
