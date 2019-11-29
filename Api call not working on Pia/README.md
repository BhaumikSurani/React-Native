## When Api call not working on Pia version  
Copy “network_security_config.xml” file to “ProjectWorkspace/android/app/src/main/res/xml”  
Open “AndroidManifest” file and write code  
```
<manifest ... >  
    <application android:networkSecurityConfig="@xml/network_security_config"  
                    ... >  
        ...  
    </application>  
</manifest>  
```
