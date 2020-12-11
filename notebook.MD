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


git tag v1.0.0  给当前提交打上tag
git tag -d v1.0.0   删除当前tag
git tag --list 查看所有的tags
git push origin :refs/tags/v1.0.0 删除远程tag


git push origin :dev  删除远程的dev分支
git branch -D dev 删除本地的dev分支

把缓存区域的文件退回: git reset --hard head

删除指定文件的修改内容: git checkout -- test.tx


查看本地密钥: ls ~/.ssh/
进入文件获取密钥: cat ~/.ssh/id_rsa.pub
命令行修改文件名字: mv xx.txt xxx.txt
命令行进入文件编辑: vi xx.txt
命令行列出文件夹下面的所有文件: ls
命令行新建文件: touch xxx.html
命令行访问html文件: curl xxxxxxxx.html  


微信小程序笔记:
想要看视图层在console输入openIspect()




