# !/bin/bash
git fetch
git merge origin/branch-spring-festival2
npm run build 
git add .
git commit -am 'build for test'
git push
set passwd "3a6Y5BwbKFsInPzl"
set user "root"
set host "39.108.94.64"
ssh root@39.108.94.64 "./heplus.dev.git.sh"
