# 部署server
- windows | linux | macos
- java1.8
- mysql5.7

## 下载
https://pan.baidu.com/s/11CspmuBy6gZKaYvnIwq8Kg  提取码：e8iw

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
浏览器访问 http://{server.ip}:{server.port}
