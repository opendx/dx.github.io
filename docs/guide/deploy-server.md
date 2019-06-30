# 部署server

操作系统
- windows linux mac
- java1.8
- mysql5.7

## 下载
http://www.baidu.com

## 创建Mysql数据库
create database {db_name}

## 创建表
https://github.com/opendx/server/blob/master/db/table.sql

## 初始化数据
https://github.com/opendx/server/blob/master/db/data.sql

## 启动server
java -jar server-{version}.jar --db-url={mysql ip:port/database} --db-username={mysql username} --db-password={mysql password} --server.port={port}
> 示例: java -jar server-0.9.0.jar --db-url=127.0.0.1:3306/daxiang --db-username=root --db-password=root --server.port=8887


