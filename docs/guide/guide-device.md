# 设备

## Android
确保手机的开发者选项-USB调试已打开（有的手机可能还有其他设置要打开），屏幕解锁并处于显示状态，使用usb数据线连接运行了agent的pc，agent会自动完成该手机的初始化。初始化过程中，会自动安装一些apk，若提示是否安装，请点击允许安装，初始化完成后即可在平台使用。

<img :src="$withBase('/assets/device_android.png')" class="zoom">

## iOS
开发者选项打开Enable UI Automation，确保屏幕解锁并处于显示状态，使用usb数据线连接运行了agent的mac，agent会自动完成初始化。若未初始化成功，请参考http://appium.io/docs/en/drivers/ios-xcuitest-real-devices/配置好环境。

<img :src="$withBase('/assets/device_ios.png')" class="zoom">