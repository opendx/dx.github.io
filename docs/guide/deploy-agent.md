# 部署agent
* windows | linux | mac
* java8 （必须）
* adb （必须。必须配置ANDROID_HOME，且adb需要添加到环境变量）
* aapt （非必须。若要dump apk信息获取packageName、启动activity等信息，需要将aapt(sdk/build-tools/{version})添加到环境变量）
* nodejs （非必须。若要使用adb connect连接android手机，需要安装nodejs，并配置到环境变量）

## 下载
https://pan.baidu.com/s/11CspmuBy6gZKaYvnIwq8Kg  提取码：e8iw

## 启动agent
java -jar core-{version}.jar --server.address={server_address} --server.port={server_port} --master=http://{master_ip:master_port}
> 示例：java -jar core-0.9.0.jar --server.address=192.168.1.8 --server.port=10005 --master=http://192.168.1.2:8887

* --server.address --master 必须指定
* --server.port可以不指定，默认为10004