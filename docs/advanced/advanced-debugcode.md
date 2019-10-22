# 快速调试代码级Action

1. 平台上选择使用一台手机
2. 打开agent工程com.daxiang.action.ActionDebugger.java
3. 将第1步选择使用的deviceId，赋值给main方法的final String deviceId
4. 按需修改final String filePath, final String url
5. @Test内可以编写要调试的代码
6. 运行main方法将会运行@Test里的测试代码