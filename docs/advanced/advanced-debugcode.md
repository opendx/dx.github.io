# 快速调试代码级Action

<video :src="$withBase('/assets/debug_code.mov')" width="720px" controls="controls">浏览器不支持video标签</video>

* 平台上选择使用一台设备
* agent工程com.daxiang.action.ActionDebugger.java main方法
  * final String deviceId = 平台使用的设备id
  * final String filePath final String url 根据实际情况重新赋值
* @Test内可以编写要调试的代码