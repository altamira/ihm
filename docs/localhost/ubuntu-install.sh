#!/bin/bash

# install environment in ubuntu 16.04
echo " "
echo "========================================"
echo "INSTALL IHM ENVIRONMENT FOR UBUNTU 16.04"
echo "========================================"
echo " "
echo "1-) JAVA DEFAULT-JDK"
echo "2-) Build-Essential + htop + gimp + git + dialog + pyrenamer + ipscan"
echo "3-) PYTHON "
echo "4-) NODE-JS 8.x"
echo "5-) ACTIVEMQ 5.14.5 "
echo "6-) CREATE-REACT-APP "
echo "7-) NODE-RED "
echo "8-) MongoDB 3.2.14 <--Start on boot "
echo "9-) Mongobooster"
echo "10) Download GitHub IHM "
echo "11) CHROME "
echo "12) GIMP"
echo "13) Sublime txt"
echo " "
read -n1 -r -p "Click to start!!!" key
sudo add-apt-repository ppa:otto-kesselgulasch/gimp -y && sudo add-apt-repository ppa:upubuntu-com/network -y &&sudo apt-get update

echo " "
#read -n1 -r -p "JAVA + build-essential" key
sudo apt-get install -yy default-jdk build-essential libssl-dev curl gdebi python-software-properties htop gimp git dialog pyrenamer arp-scan nmap

echo " "
#read -n1 -r -p "NODE-JS 8.x" key
curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh
chmod +x nodesource_setup.sh
sudo sh ./nodesource_setup.sh
sudo apt-get install -yy nodejs
rm nodesource_setup.sh 

echo " "
read -n1 -r -p "ACTIVEMQ" key
wget http://mirror.nbtelecom.com.br/apache//activemq/5.14.5/apache-activemq-5.14.5-bin.tar.gz
tar -vzxf apache-activemq-5.14.5-bin.tar.gz
rm apache-activemq-5.14.5-bin.tar.gz
sudo chown -R marcelo:marcelo apache-activemq-5.14.5

echo " "
#read -n1 -r -p "CREATE-REACT-APP" key
sudo npm install -i create-react-app -g
sudo npm install -i bcryptjs -g

echo " "
#read -n1 -r -p "NODE-RED" key
sudo npm install -g --unsafe-perm node-red
sudo npm install -g node-red-node-mongodb
sudo npm install -g node-red-contrib-modbustcp-no-pooling
sudo npm install -g node-red-dashboard
sudo npm install -g node-red-contrib-google-firebase
sudo npm install -g node-red-contrib-mail-parse
sudo npm install -g node-red-contrib-email-out
sudo npm install -g node-red-contrib-md5
sudo npm install -g node-red-node-wol

echo " "
echo "MongoDB 3.2.14"
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
sudo apt-get update && sudo apt-get install -y mongodb-org
read -n1 -r -p "Mongobooster" key
wget http://s3.mongobooster.com/download/3.5/mongobooster-3.5.6-x86_64.AppImage
chmod a+x mongobooster-3.5.6-x86_64.AppImage
chmod a+x mongobooster-3.5.6-x86_64.AppImage

#read -n1 -r -p "Download GitHub IHM" key
mkdir git
cd git
git clone https://github.com/altamira/ihm.git
git clone https://github.com/MarceloProjetos/react-node-red.git
cd ~
sudo chown -R marcelo:marcelo git
sudo chown -R marcelo:marcelo .npm
sudo chown -R marcelo:marcelo .node-gyp
sudo chown -R marcelo:marcelo .config
sudo chown marcelo:marcelo mongobooster-3.5.6-x86_64.AppImage
cd git/ihm/docs/localhost/

read -n1 -r -p "mongo service" key
sudo cp mongodb.service /etc/systemd/system/
sudo systemctl start mongodb
sudo systemctl enable mongodb
cd ~
read -n1 -r -p "MongoBooster" key
./mongobooster-3.5.6-x86_64.AppImage

read -n1 -r -p "Node-red settings" key
cd .node-red/
rm settings.js
cp ../git/ihm/docs/localhost/settings.js .
cd ~
read -n1 -r -p "veja se funciona" key

echo " "
read -n1 -r -p "CHROME" key
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo gdebi -n google-chrome-stable_current_amd64.deb
sudo rm -rf google-chrome-stable_current_amd64.deb

echo " "
sudo ufw allow 1880

echo " "
echo "NODEJS version"
node -v
echo " "
echo "NPM version"
npm --version

sleep 10
clear
