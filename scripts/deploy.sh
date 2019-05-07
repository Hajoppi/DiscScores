rm -rf dist
npm run build
scp -r dist/ pi@192.168.0.103:~/workspace/discscores/dist
ssh pi@192.168.0.103 "sudo systemctl restart nginx"