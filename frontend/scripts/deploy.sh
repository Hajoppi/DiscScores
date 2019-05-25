rm -rf dist
npm run build
scp -r dist/ pi@192.168.100.103:~/workspace/discscores/frontend/dist
#ssh pi@192.168.0.103 "sudo systemctl restart nginx"