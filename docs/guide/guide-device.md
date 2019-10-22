# 设备

## Android
1. 打开手机的开发者选项-USB调试（有的手机可能还有其他设置要打开）
2. 手机屏幕解锁并处于显示状态
3. usb数据线连接运行了agent的pc（agent会自动完成该手机的初始化）
4. 初始化过程中，会自动安装一些apk，若提示是否安装，请点击允许安装
5. 手机初始化完成后即可在平台使用

<img :src="$withBase('/assets/device_android.png')" class="zoom">

## iOS
1. 打开手机的开发者选项Enable UI Automation
2. 手机屏幕解锁并处于显示状态
3. usb数据线连接运行了agent的mac（agent会自动完成该手机的初始化）
4. 若初始化失败，请参考http://appium.io/docs/en/drivers/ios-xcuitest-real-devices/配置好真机
5. 手机初始化完成后即可在平台使用

<img :src="$withBase('/assets/device_ios.png')" class="zoom">