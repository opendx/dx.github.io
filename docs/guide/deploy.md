# 部署
> server和agent可以部署在同一台电脑上

<img :src="$withBase('/assets/server-agent.png')" class="zoom">

## 下载
打包好的server与agent在qq群(`703392467`)文件共享，你也可以通过源码构建

## 部署server

### 环境
- windows | linux | macos
- java8
- mysql5.7

### 创建数据库
CREATE DATABASE `your-database-name` CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_general_ci';

### 启动server
server目录结构如下: 
```
├─server-{version}.jar
└─static
    ├── frontend // qq群文件解压frontend-{version}.zip即可获得该目录
```
1. <font color='red'>必须cd到server-{version}.jar所在目录</font>
2. java -jar server-{version}.jar
> 示例: java -jar server-0.1.0.jar --db-url=127.0.0.1:3306/daxiang --db-username=root --db-password=root

|启动参数|是否必须|描述|
|----|----|----|
|db-url|Y|数据库地址，示例: 127.0.0.1:3306/daxiang|
|db-username|Y|数据库账号，示例: root|   
|db-password|Y|数据库密码，示例: root|
|server.port|N|服务端口，默认: 8887|

### 访问opendx
成功启动server后，浏览器访问http://{server.ip}:{server.port}即可。如: http://192.168.1.2:8887，默认账号密码为`admin/admin`

## 部署agent

### 环境
* windows | linux | macos
* java8
* appium
    * `移动端必须部署，PC WEB不需要`
    * 版本`>=1.16.0`

### 移动端
agent目录结构如下:
```
├─agent-{version}.jar
├─lib          // qq群文件解压agent-lib.zip即可获得该目录
├─vendor       // qq群文件解压agent-vendor.zip即可获得该目录
```
#### 部署appium

##### 安装appium
* 方式1: npm install -g appium --registry=https://registry.npm.taobao.org
* 方式2: 安装appium-desktop桌面版（https://github.com/appium/appium-desktop/releases）

##### 检查appium环境
1. 安装appium-doctor检查appium配置
```sh
npm install -g appium-doctor --registry=https://registry.npm.taobao.org
```
2. 检查android环境（不测试android，可以不用配置android环境）
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
3. 检查ios环境（不测试ios，可以不用配置ios环境）
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
> ffmpeg用于合成录制的视频，opencv4nodejs用于图像识别

### PC WEB端
agent目录结构如下:
```
├─agent-{version}.jar
├─lib          // qq群文件解压agent-lib.zip即可获得该目录
├─browser.json
```
#### browser.json说明 (`文件编码utf-8`) 
```json
[
    {
        "driverPath":"d:/driver/firefox/0.26.0.geckodriver.exe",
        "path":"",
        "type":"firefox",
        "version":"76.0.1"
    },
    {
        "driverPath":"d:/driver/firefox/0.26.0.geckodriver.exe",
        "path":"",
        "type":"firefox",
        "version":"76.0.1"
    },
    {
        "driverPath":"d:/driver/chrome/84.0.4147.89.chromedriver.exe",
        "path":"",
        "type":"chrome",
        "version":"84.0.4147.89"
    },
    {
        "driverPath":"d:/driver/chrome/70.0.3538.16.chromedriver.exe",
        "path":"d:/browser/chrome/70.0.3538.16/chrome.exe",
        "type":"chrome",
        "version":"70.0.3538.16"
    }
]
```
|browser属性|是否必填|描述|
|----|----|----|
|driverPath|Y|浏览器驱动全路径|
|path|N|浏览器路径|   
|type|Y|浏览器类型，可选值: chrome firefox|
|version|Y|浏览器版本|
|id|Y|由agent自动生成，`请勿手动填写`|

> browser.json可以配置多个相同的浏览器实例

### 启动agent
1. <font color='red'>必须cd到agent-{version}.jar所在目录</font>
2. java -jar agent-{version}.jar
> 示例：java -jar agent-0.1.0.jar --ip=192.168.1.8 --server=http://192.168.1.2:8887 --android=true

|启动参数|是否必须|描述|
|----|----|----|
|ip|N|当前pc的ip地址，默认127.0.0.1。`建议指定为局域网ip，如192.168.1.8`|
|port|N|agent服务端口，默认10004|
|server|Y|server地址，示例: `http://192.168.1.2:8887`|   
|android|N|是否启用android功能，默认`false`。可选值: true false|
|ios|N|是否启用ios功能，默认`false`。可选值: true false|
|pc-web|N|是否启用pc web功能，默认`false`。可选值: true false|
|remoteScrcpyBitRate|N|>=android5.0手机远程真机画质。默认2000000 (2Mbps)|
|minicap-quality|N|<android5.0手机远程真机画质。默认80，范围: 1-100|
|androidRecordVideoBitRate|N|测试报告录制视频画质。默认2 (2Mbps)|
|xcodeOrgId|N|参考[此处](https://github.com/appium/appium-xcuitest-driver/blob/master/docs/real-device-config.md)|
|xcodeSigningId|N|参考[此处](https://github.com/appium/appium-xcuitest-driver/blob/master/docs/real-device-config.md)|
|updatedWDABundleId|N|参考[此处](https://github.com/appium/appium-xcuitest-driver/blob/master/docs/real-device-config.md)|
|appiumJs|N|指定agent使用哪个appium，详细说明在下面|

#### appiumJs详细说明
* npm安装的appium(控制台敲appium能启动appium)，可以不指定appiumJs
* appium desktop(控制台敲appium无法启动appium，提示找不到命令)，必须指定appiumJs
> 示例: --appiumJs=/Appium.app/Contents/Resources/app/node_modules/appium/`build/lib`/main.js


## 设备接入

### 接入android(真机 & 模拟器)
1. 确保agent启动参数`--android=true`
2. 打开设备的开发者选项-USB调试
    > 有的手机可能还有其他设置要打开，如小米手机的usb安装，usb调试(安全设置)
3. 真机通过usb数据线连接到正在运行agent的电脑上
    > 这时候adb devices应该能看到这台设备
    ```sh
    bogon:~ jiangyitao$ adb devices
    List of devices attached
    6acbb39a	device 
    ```
4. agent会自动发现这台设备并进行初次接入的初始化
    > 初始化过程中，会自动安装一些apk。若提示是否安装，需要点击允许安装
5. 当你在agent控制台看到日志`[{deviceId}]MobileConnected处理完成`时，证明设备已成功接入平台，此时可以在平台`Mobile`这一栏选择使用

### 接入ios设备（真机 & 模拟器）
1. 确保agent启动参数`--ios=true`
2. （模拟器忽略该步骤）配置ios真机http://appium.io/docs/en/drivers/ios-xcuitest-real-devices/
3. agent会自动发现这台设备并进行初次接入的初始化
4. 当你在agent控制台看到日志`[{deviceId}]MobileConnected处理完成`时，证明设备已成功接入平台，此时可以在平台`Mobile`这一栏选择使用

