# 常见问题
## 调试时提示“Java Compiler not found.JDK is required”
agent java配置问题，以下配置供参考
* 环境变量 -> 系统变量
  * JAVA_HOME -> C:\Program Files\Java\jdk1.8.0_144（路径按照实际情况修改）
  * CLASSPATH -> .;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar
  * Path -> %JAVA_HOME%\bin;%JAVA_HOME%\jre\bin; (最好放在Path的最前面)
  * Path里删除其他和java有关的配置，如: Oracle\Java\javapath
  * 保存后，重新开cmd窗口运行agent
