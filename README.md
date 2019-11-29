# React-Native

Step 1 - Install Homebrew  
Open your terminal and run the following code to install Homebrew −  
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"  

Step 2 - Install Watchman  
Run the following code to install Watchman.  
brew install watchman  

Step 3 - Install React Native  
Now, run the following code to install React Native.  
npm install -g react-native-cli  

Step 4 Android - Install Android Studio  
You can install Android studio by following this link.  
Step 4 IOS - Install XCode  
For IOS development you will need XCode.  

Step 5 - Create First App  
We will initialize our first app by running the code given below in the terminal from the folder where we want to create the app (in our case Desktop).  
react-native init reactTutorialApp  

if confing.h not found in newer version then try this  

react-native init --version="0.42.0" AwesomeProject  

set pakage name  
react-native init MyAwesomeProject -package "com.example.app"  


Step 6 - Run React Native Packager  
First, we need to open the app folder in terminal.  
cd reactTutorialApp  
Now, we can run the packager.  
react-native start  
You should keep this terminal window running while developing your app.  

Step 7 - Run the App on IOS simulator  
This step will open your app in the IOS simulator. Run the following command in another terminal.  
react-native run-ios  
react-native run-ios —-simulator “iPhone 5”  

**Note:-**  
if running command fail and give “build path” error and "Analyze node_modules/react-native/ReactCommon/yoga/yoga/Yoga.c (2 commands with analyzer issues)" Error  
so delete “./ios/build” Directory because path is changed and it try to find old path  
then reRun the above command  


## React native another Commands:-  
(For Save Reactnative another library in project)  
npm install --save react-navigation  
(For Link React native. to project if after above comment throw error)  
react-native link  
react-native link react-navigation  
  
## install package and automatically link (above Process)  
react-native install react-native-package-name  


## solving Config.h issue  
cd /node_modules/react-native/third-party/glog-0.3.4  
./configure  



## Get npm package all available list  
npm view react-native-package-name versions  --json  



## Install all package after deleted as per “package.json” listed  
npm install  



## Android in real device open developer menu without shack using cmd  
adb shell input keyevent 82  



## When Api call not working on Pia version  
Copy “network_security_config.xml” file to “Project/Workspace/rtrLab/android/app/src/main/res/xml”  
Open “AndroidManifest” file and write code  
```
<manifest ... >  
    <application android:networkSecurityConfig="@xml/network_security_config"  
                    ... >  
        ...  
    </application>  
</manifest>  
```


## Reduce Application size  
Open “android/app/build.gradle” file  
Set def enableProguardInReleaseBuilds = true  
Set “shrinkResources true” inside the (buildTypes {release {}})  
Set def enableSeparateBuildPerCPUArchitecture = true  
**Note:-** if you set “universalApk true” inside splits { abi {}}. It create global api file and upload it. appstore device into split automatically.  
Reference:- https://medium.com/@aswinmohanme/how-i-reduced-the-size-of-my-react-native-app-by-86-27be72bba640  
