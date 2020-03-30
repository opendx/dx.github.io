# 部署
在部署之前，我们需要搞清server和agent的关系，如下图所示。由于一台电脑所能连接的手机有限，我们可以通过部署更多的agent在不同电脑上，来达到连接更多手机的目的。
> server和agent可以部署在同一台电脑上

<img :src="$withBase('/assets/server-agent.png')" class="zoom">

## 下载server和agent
qq群: 703392467，群文件下载或源码构建

## 部署server

### 环境
- windows | linux | macos
- java8
- mysql5.7

### 创建表与数据
https://github.com/opendx/server/blob/master/db
1. 创建数据库database.sql
2. 创建表table.sql
3. 导入数据data.sql & [basic_action.sql](https://github.com/opendx/agent/blob/master/src/main/java/com/daxiang/action/sql/basic_action.sql)
> update.sql为升级平台版本要执行的sql，新用户无需关注

### 启动server
java -jar server-{version}.jar --db-url={mysql ip:port/database} --db-username={mysql username} --db-password={mysql password} --server.port={port}
> 示例: java -jar server-0.1.0.jar --db-url=127.0.0.1:3306/daxiang --db-username=root --db-password=root --server.port=8887

* --db-url --db-username --db-password 必须指定
* --server.port可以不指定，默认为8887
* `必须cd到server.jar所处的目录`，执行java -jar启动server，否则将无法访问到前端网页
```
├─server-{version}.jar
└─static
    ├── frontend
```

### 访问opendx
成功启动server后，浏览器访问 http://{server.ip}:{server.port}即可。如: http://192.168.1.2:8887，默认账号密码为admin/admin

## 部署agent

### 环境
* windows | linux | macos
* java8
* appium(>=1.16.0)

### 部署appium

#### 安装appium
* 方式一 npm install -g appium --registry=https://registry.npm.taobao.org
* 方式二 安装appium-desktop桌面版（https://github.com/appium/appium-desktop/releases）

#### 检查appium环境
1. 安装appium-doctor检查appium配置
```sh
npm install -g appium-doctor --registry=https://registry.npm.taobao.org
```
2. 检查android环境（不测试android，可以不用配置）
```sh
$ appium-doctor --android
info AppiumDoctor Appium Doctor v.1.12.1
info AppiumDoctor ### Diagnostic for necessary dependencies starting ###
info AppiumDoctor  ✔ The Node.js binary was found at: /usr/local/bin/node
info AppiumDoctor  ✔ Node version is 12.13.1
info AppiumDoctor  ✔ ANDROID_HOME is set to: /Users/jiangyitao/Library/Android/sdk
info AppiumDoctor  ✔ JAVA_HOME is set to: /Library/Java/JavaVirtualMachines/jdk1.8.0_231.jdk/Contents/Home
info AppiumDoctor  ✔ adb exists at: /Users/jiangyitao/Library/Android/sdk/platform-tools/adb
info AppiumDoctor  ✔ android exists at: /Users/jiangyitao/Library/Android/sdk/tools/android
info AppiumDoctor  ✔ emulator exists at: /Users/jiangyitao/Library/Android/sdk/tools/emulator
info AppiumDoctor  ✔ Bin directory of $JAVA_HOME is set
info AppiumDoctor ### Diagnostic for necessary dependencies completed, no fix needed. ###

info AppiumDoctor ### Diagnostic for optional dependencies starting ###
info AppiumDoctor  ✔ opencv4nodejs is installed at: /usr/local/lib. Installed version is: 5.5.0
info AppiumDoctor  ✔ ffmpeg is installed at: /usr/local/bin/ffmpeg. ffmpeg version 4.2.1 Copyright (c) 2000-2019 the FFmpeg developers
info AppiumDoctor ### Diagnostic for optional dependencies completed ###
```
3. 检查ios环境（不测试ios，可以不用配置）
```sh
$ appium-doctor --ios
info AppiumDoctor Appium Doctor v.1.12.1
info AppiumDoctor ### Diagnostic for necessary dependencies starting ###
info AppiumDoctor  ✔ The Node.js binary was found at: /usr/local/bin/node
info AppiumDoctor  ✔ Node version is 12.13.1
info AppiumDoctor  ✔ Xcode is installed at: /Applications/Xcode.app/Contents/Developer
info AppiumDoctor  ✔ Xcode Command Line Tools are installed in: /Applications/Xcode.app/Contents/Developer
info AppiumDoctor  ✔ DevToolsSecurity is enabled.
info AppiumDoctor  ✔ The Authorization DB is set up properly.
info AppiumDoctor  ✔ Carthage was found at: /usr/local/bin/carthage. Installed version is: 0.34.0
info AppiumDoctor  ✔ HOME is set to: /Users/jiangyitao
info AppiumDoctor ### Diagnostic for necessary dependencies completed, no fix needed. ###

info AppiumDoctor ### Diagnostic for optional dependencies starting ###
info AppiumDoctor  ✔ opencv4nodejs is installed at: /usr/local/lib. Installed version is: 5.5.0
info AppiumDoctor  ✔ ffmpeg is installed at: /usr/local/bin/ffmpeg. ffmpeg version 4.2.1 Copyright (c) 2000-2019 the FFmpeg developers
info AppiumDoctor ### Diagnostic for optional dependencies completed ###

```
>ffmpeg用于合成录制的视频，opencv4nodejs用于图像识别

### 启动agent
java -jar agent-{version}.jar --ip={ip} --server=http://{server_ip:server_port} --android=true
> 示例：java -jar agent-0.1.0.jar --ip=192.168.1.8 --server=http://192.168.1.2:8887 --android=true

* --ip: `必须`。agent ip(当前pc的局域网ip，如: 192.168.1.1)
* --server: `必须`。server的运行地址，如: http://192.168.1.2:8887
* --port: 非必须。agent服务端口，默认10004
* --appiumJs: 非必须
    * npm安装的appium(控制台敲appium能启动appium)，可以不指定。
    * appium desktop(控制台敲appium无法启动appium)，必须指定。
    > 示例: --appiumJs=/Appium.app/Contents/Resources/app/node_modules/appium/build/lib/main.js(注意是`build/lib`目录下的main.js)
* --android: 非必须。是否启用android功能，默认false
* --remoteScrcpyBitRate: 非必须。android5.0及以上手机远程真机画质。默认2000000 (2Mbps)
* --androidRecordVideoBitRate: 非必须。报告录制视频画质。默认2 (2Mbps)
* --minicap-quality: 非必须。android5.0以下手机远程真机画质。默认80，范围: 1-100
* --ios: 非必须。是否启用ios功能，默认false
* --mjpegServerFramerate: 非必须。ios远程真机fps。默认60，范围: 1-60
* --xcodeOrgId --xcodeSigningId --updatedWDABundleId: 非必须
    > ios真机配置，https://github.com/appium/appium-xcuitest-driver/blob/master/docs/real-device-config.md

#### 启动agent注意事项
* agent-{version}.jar, lib, vendor处于同一个目录（解压agent-lib.zip, agent-vendor.zip可获取lib, vendor）
```
├─agent-{version}.jar
├─lib
├─vendor
```
* `必须cd到agent-{version}.jar所处的目录`，执行java -jar启动agent，否则将启动失败

## 设备接入

### 接入android设备
1. 确保启动agent的参数--android=true
2. 打开设备的开发者选项-USB调试
    >有的手机可能还有其他设置要打开，如小米手机的usb安装，usb调试(安全设置)
3. 手机通过usb数据线连接到正在运行agent的电脑上
    >这时候adb devices应该能看到这台设备
    ```sh
    bogon:~ jiangyitao$ adb devices
    List of devices attached
    6acbb39a	device 
    ```
4. agent会自动发现这台设备并进行初次接入的初始化
    >初始化过程中，会自动安装一些apk。若提示是否安装，需要点击允许安装
5. 当你在agent控制台看到日志`[android]][abcdefg]androidDeviceConnected处理完成`时，证明手机abcdefg已成功接入平台，此时可以在平台`设备`这一栏选择使用

### 接入ios设备
1. 确保启动agent的参数--ios=true
2. 配置ios真机http://appium.io/docs/en/drivers/ios-xcuitest-real-devices/
3. ios真机正确配置后，agent会自动发现这台设备并进行初次接入的初始化
4. 当你在agent控制台看到日志`[ios][abcdefg]iosDeviceConnected处理完成`时，证明手机abcdefg已成功接入平台，此时可以在平台`设备`这一栏选择使用

