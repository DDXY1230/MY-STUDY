sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}

有人想问这条命令的意思那么我来给你做一下介绍

chown -R 是设置所属用户和用户组

whoami 是查询当前用户是谁

npm config get prefix 是查看npm路径安装在哪里

/{lib/node_modules,bin,share} 是将/lib/node_modules、/bin、/share 这三个的目录权限设置为whoami