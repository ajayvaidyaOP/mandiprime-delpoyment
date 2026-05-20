# React/Vite Application Deployment on AWS EC2 using Nginx

## Project Deployment Steps

---

# 1. Launch EC2 Instance

- Launch an Ubuntu EC2 instance on AWS.
- Connect to the instance using SSH.

## Connect to EC2

```bash
ssh -i your-key.pem ubuntu@your-public-ip
```

---

# 2. Update the Server

```bash
sudo apt update && sudo apt upgrade -y
```

---

# 3. Install Node.js and NPM

## Install Node.js 20

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

sudo apt install -y nodejs
```

## Verify Installation

```bash
node -v
npm -v
```

---

# 4. Install Nginx

## Install Nginx

```bash
sudo apt install nginx -y
```

## Start and Enable Nginx

```bash
sudo systemctl start nginx
sudo systemctl enable nginx
```

## Check Nginx Status

```bash
sudo systemctl status nginx
```

---

# 5. Clone the GitHub Repository

```bash
git clone https://github.com/your-username/your-repository.git
```

## Move into Project Directory

```bash
cd your-repository
```

---

# 6. Install Project Dependencies

```bash
npm install
```

---

# 7. Build the React/Vite Application

```bash
npm run build
```

After a successful build, a `dist` folder will be created.

---

# 8. Remove Default Nginx Files

```bash
sudo rm -rf /var/www/html/*
```

---

# 9. Copy Build Files to Nginx Directory

```bash
sudo cp -r dist/* /var/www/html/
```

---

# 10. Configure Nginx for Domain

## Create Nginx Configuration File

```bash
sudo vim /etc/nginx/sites-available/react-app
```

## Add Configuration

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    root /var/www/html;
    index index.html;

    location / {
        try_files $uri /index.html;
    }
}
```

## Enable Configuration

```bash
sudo ln -s /etc/nginx/sites-available/react-app /etc/nginx/sites-enabled/
```

## Test Nginx Configuration

```bash
sudo nginx -t
```

## Restart Nginx

```bash
sudo systemctl restart nginx
```

---

# 11. Configure Domain in Namecheap

Go to your domain provider (Namecheap).

## Add A Record

| Type | Host | Value |
|------|------|------|
| A | @ | Your EC2 Public IP |
| A | www | Your EC2 Public IP |

Wait 5–10 minutes for DNS propagation.

---

# 12. Configure AWS Security Group

Allow the following inbound rules:

| Type | Port | Source |
|------|------|------|
| SSH | 22 | 0.0.0.0/0 |
| HTTP | 80 | 0.0.0.0/0 |
| HTTPS | 443 | 0.0.0.0/0 |

---

# 13. Install SSL Certificate (HTTPS)

## Install Certbot

```bash
sudo apt install certbot python3-certbot-nginx -y
```

## Generate SSL Certificate

```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Verify Auto Renewal

```bash
sudo systemctl status certbot.timer
```

## Test SSL Renewal

```bash
sudo certbot renew --dry-run
```

---

# 14. Restart Nginx

```bash
sudo systemctl restart nginx
```

---

# 15. Access the Application

## HTTP

```text
http://yourdomain.com
```

## HTTPS

```text
https://yourdomain.com
```

---

# Updating the Application

Whenever new changes are pushed to GitHub:

```bash
cd your-repository

git pull

npm install

npm run build

sudo cp -r dist/* /var/www/html/

sudo systemctl restart nginx
```

---

# Useful Commands

## Check Nginx Status

```bash
sudo systemctl status nginx
```

## Restart Nginx

```bash
sudo systemctl restart nginx
```

## View Nginx Logs

```bash
sudo journalctl -u nginx
```

## Check SSL Certificate

```bash
sudo certbot certificates
```

---

# Tech Stack

- AWS EC2
- Ubuntu
- Nginx
- React.js
- Vite
- Node.js
- Namecheap Domain
- SSL Certificate (Let's Encrypt)
