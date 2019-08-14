# 部署agent
* windows | linux | macos
* java8 （必须）
* appium （必须。建议使用最新版本）
* aapt （非必须。若要dump apk信息获取packageName、启动activity等信息，需要将aapt(androidSdk/build-tools/{version})添加到环境变量）

// todo appium deploy
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
