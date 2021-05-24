Open Filezilla application and connect to the server  
URL:- ftp://192.168.1.1  
Port:- 12345  
User name:- username  
Password:- password  




For start server open terminal (or ssh application):-  
Type following command  

```
ssh username@192.168.1.1 -p12345
```

Now enter password


## For first time project upload to server run following command   
```
npm install
npm install -g serve
npm install pm2 --save
```


### For make build
```
sudo npm run build
```



### For Background run command (bcz when terminal close server is stop so need to run in background)
```
#make list running command
sudo pm2 list

#delete specific command
sudo pm2 delete task-name

#run build in prod mode
sudo pm2 start npm --name “new-task-name" -- run "web:prod"
```



### For run application in production mode add following line in package.json file inside the script. (GENERATE_SOURCEMAP use for turnoff source map of code )
```
{
	"scripts": {
		...
		"web:prod": "PORT=3013 NODE_ENV=production serve -s build",
		"build": "GENERATE_SOURCEMAP=false react-scripts build",
	}
}
```



## Use full command:-

Specific port running checker
```
sudo netstat -lpn |grep :8080
```

Kill Process/port
```
kill 6782
```

Remove specific Directory with subfolder and files
```
rm -r ./src/*
```

Kill Specific port process
```
lsof -i tcp:3013
kill -9 PID
```
