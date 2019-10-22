# 部署agent
* windows | linux | macos
* java8 （不能低于java8。其他版本未测试，可能有坑，建议用java8）
* appium （必须。建议使用最新版本）
* aapt （非必须。获取apk包名，启动activity，版本号要用到）
* ffmpeg （非必须。合成录制的视频要用到）

## appium

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
百度网盘不再维护，请进群（qq群：703392467）下载或自主源码构建

## 启动agent
java -jar agent-{version}.jar --server.address={server_address} --master=http://{master_ip:master_port} --android=true
> 示例：java -jar agent-0.9.0.jar --server.address=192.168.1.8 --master=http://192.168.1.2:8887 --android=true

* --server.address: 必须。agent ip（当前pc的局域网ip，如: 192.168.1.1）
* --server.port: 非必须。agent服务端口，默认为10004
* --master: 必须。server的运行地址，如: http://192.168.1.2:8887
* --appiumJs: 非必须。如果是npm安装的appium(控制台敲appium能启动appium)，可以不指定。
如果是用appium desktop（控制台敲appium无法启动appium），必须指定，如：C:/Users/jyt/AppData/Local/Programs/Appium/resources/app/node_modules/appium/build/lib/main.js
* --android: 非必须。是否启用android功能，默认false
* --minicap-quality: 非必须。android远程投屏视频质量，默认25。范围: 1-100
* --ios: 非必须。是否启用ios功能，默认false
* --mjpegServerFramerate: 非必须。ios远程投屏fps，默认60fps。范围: 1-60
* --xcodeOrgId --xcodeSigningId --updatedWDABundleId: 非必须。ios真机配置，https://github.com/appium/appium-xcuitest-driver/blob/master/docs/real-device-config.md