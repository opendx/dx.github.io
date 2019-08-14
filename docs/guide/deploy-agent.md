# 部署agent
* windows | linux | macos
* java8 （必须）
* appium （必须。建议使用最新版本）
* aapt （非必须。若要dump apk信息获取packageName、启动activity等信息，需要将aapt(androidSdk/build-tools/{version})添加到环境变量）

## appium
```sh
$ appium -v
1.14.0
```

```sh
$ appium-doctor --android
info AppiumDoctor  ✔ The Node.js binary was found at: /usr/local/bin/node
info AppiumDoctor  ✔ Node version is 10.16.0
info AppiumDoctor  ✔ ANDROID_HOME is set to: /Users/jiangyitao/Library/Android/sdk
info AppiumDoctor  ✔ JAVA_HOME is set to: /Library/Java/JavaVirtualMachines/jdk1.8.0_221.jdk/Contents/Home
info AppiumDoctor  ✔ adb exists at: /Users/jiangyitao/Library/Android/sdk/platform-tools/adb
info AppiumDoctor  ✔ android exists at: /Users/jiangyitao/Library/Android/sdk/tools/android
info AppiumDoctor  ✔ emulator exists at: /Users/jiangyitao/Library/Android/sdk/tools/emulator
info AppiumDoctor  ✔ Bin directory of $JAVA_HOME is set
info AppiumDoctor  ✔ ffmpeg is installed at: /usr/local/bin/ffmpeg. ffmpeg version 4.1.4 Copyright (c) 2000-2019 the FFmpeg developers
info AppiumDoctor  ✔ mjpeg-consumer is installed at: /usr/local/lib. Installed version is: 2.0.0
```

```sh
$ appium-doctor --ios
info AppiumDoctor  ✔ The Node.js binary was found at: /usr/local/bin/node
info AppiumDoctor  ✔ Node version is 10.16.0
info AppiumDoctor  ✔ Xcode is installed at: /Applications/Xcode.app/Contents/Developer
info AppiumDoctor  ✔ Xcode Command Line Tools are installed in: /Applications/Xcode.app/Contents/Developer
info AppiumDoctor  ✔ DevToolsSecurity is enabled.
info AppiumDoctor  ✔ The Authorization DB is set up properly.
info AppiumDoctor  ✔ Carthage was found at: /usr/local/bin/carthage. Installed version is: 0.33.0
info AppiumDoctor  ✔ HOME is set to: /Users/jiangyitao
info AppiumDoctor  ✔ ffmpeg is installed at: /usr/local/bin/ffmpeg. ffmpeg version 4.1.4 Copyright (c) 2000-2019 the FFmpeg developers
info AppiumDoctor  ✔ mjpeg-consumer is installed at: /usr/local/lib. Installed version is: 2.0.0
info AppiumDoctor  ✔ ios-deploy is installed at: /usr/local/bin/ios-deploy. Installed version is: 1.9.4
info AppiumDoctor  ✔ ios_webkit_debug_proxy is installed at: /usr/local/bin/ios_webkit_debug_proxy. Installed version is: 1.8.5, Built with libimobiledevice v1.2.0, libplist v2.0.0
```

## 下载
https://pan.baidu.com/s/11CspmuBy6gZKaYvnIwq8Kg  提取码：e8iw

## 启动agent
java -jar agent-{version}.jar --server.address={server_address} --master=http://{master_ip:master_port} --android=true
> 示例：java -jar agent-0.9.0.jar --server.address=192.168.1.8 --master=http://192.168.1.2:8887 --android=true

* --server.address: agent ip，必须指定
* --server.port: agent服务端口，可以不指定，默认为10004
* --master: server的运行地址，必须指定，格式为http://server_ip:server_port
* --appiumJs: appium main.js位置，若控制台输入appium能启动appium server，则可以不指定
* --android: 是否启用android功能，可以不指定，默认false
* --minicap-quality: android远程投屏视频质量，可以不指定，默认25。范围: 0-100
* --ios: 是否启用ios功能，可以不指定，默认false
* --mjpegServerFramerate: ios远程投屏fps，可以不指定，默认60fps。范围: 1-60
