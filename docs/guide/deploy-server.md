# 部署server
- windows | linux | macos
- java8 （不能低于java8。其他版本未测试，可能有坑，建议用java8）
- mysql5.7 （不能低于5.7）

## 下载
百度网盘不再维护，请进群（qq群：703392467）下载或自主源码构建

## 创建Mysql数据库
create database {db_name}

## 创建表
https://github.com/opendx/server/blob/master/db/table.sql

## 初始化数据
https://github.com/opendx/agent/tree/master/src/main/java/com/daxiang/action/sql

## 启动server
java -jar server-{version}.jar --db-url={mysql ip:port/database} --db-username={mysql username} --db-password={mysql password} --server.port={port}
> 示例: java -jar server-0.9.0.jar --db-url=127.0.0.1:3306/daxiang --db-username=root --db-password=root --server.port=8887

* --db-url --db-username --db-password 必须指定
* --server.port可以不指定，默认为8887

## 访问Opendx
浏览器访问 http://{server.ip}:{server.port}。最好用局域网ip进行访问，如：http://192.168.1.2:8887
