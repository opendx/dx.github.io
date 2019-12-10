# WebView

## dump page
1. 切换context到webview
<img :src="$withBase('/assets/switch_context.png')" class="zoom">

2. 查看元素

<img :src="$withBase('/assets/dump.png')" class="zoom">

3. 右键检查元素即可查看
<img :src="$withBase('/assets/webview_inspector.png')" class="zoom">

## 配置手机对应的chromedriver
若切换context到webview报错，一般是由于手机对应的chromedriver未配置正确。配置方法如下：
1. chrome浏览器访问chrome://inspect/#devices，可以看到手机webview版本，如：WebView in io.appium.android.apis (46.0.2490.76)
2. https://chromedriver.storage.googleapis.com/2.41/notes.txt 找到手机匹配的chromedriver版本，如（46.0.2490.76对应ChromeDriver v2.21）
3. https://npm.taobao.org/mirrors/chromedriver下载相应版本的chromedriver
4. 将下载好的chromedriver上传到server并配置给该手机
<img :src="$withBase('/assets/save_driver.png')" class="zoom">