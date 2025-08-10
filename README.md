
this is loned from github using 
git clone https://github.com/onemanarmy1032-code/n8n-nodes-sms.git
#add the following commands to command line one by one

npm i

npm install n8n -g             # install n8n globally

cd %USERPROFILE%  
mkdir .n8n\custom              # create folder for custom nodes  

cd n8n-nodes-sms  

npm install                   # install dependencies  
npm run build                 # build your node code  
npm link                      # register your node package globally  

cd %USERPROFILE%\.n8n\custom  # go to n8n custom nodes folder  
npm link n8n-nodes-sms         # link your node package here  

n8n start                     # start n8n to test your custom node  
