定义别名：
git config --global alias.st "status"
将status的别名定义为st

关联远程地址：git remote add origin  git远程地址
之后就可以push到master分支了 
git remote rm origin 删除本地仓库当前关联的远程仓库；
git remote -v 查看是否关联远程仓库

第一次拉代码，在master分支，切换到Dev分支  git checkout -b dev origin/dev

看已有的本地及远程分支   git branch -a
删除远程分支   git push origin --delete dev
删除本地分支   git branch -d dev



查看本地密钥: ls ~/.ssh/
进入文件获取密钥: cat ~/.ssh/id_rsa.pub