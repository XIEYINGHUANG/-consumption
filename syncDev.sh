# !/bin/bash
npm run build
git add .
git commit -am 'build for test'
git push
set passwd "3a6Y5BwbKFsInPzl"
set user "root"
set host "39.108.94.64"
#spawn表示开启新expect会话进程
spawn ssh $user@$host "./heplus.dev.git.sh"
