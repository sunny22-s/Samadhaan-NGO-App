#!/bin/bash

sudo apt-get update -y
sudo apt-get upgrade -y

curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

sudo apt  install awscli -y
aws configure set aws_access_key_id 
aws configure set aws_secret_access_key 
aws configure set default.region ap-south-1

# Install PM2 to manage the Node.js process
sudo npm install -g pm2

aws s3 cp s3://ngo-payment/ /home/ubuntu/ --recursive
cd PAYMENT

# Install Nginx
sudo apt-get install nginx -y
npm install

pm2 start app.js --name "ngo-app"  
# Set PM2 to start on system startup
pm2 startup systemd
pm2 save

sudo bash -c 'cat > /etc/nginx/sites-available/default <<EOF
server {
    listen 80;
    server_name 13.235.241.106;  
    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF'

sudo nginx -t
sudo systemctl restart nginx
