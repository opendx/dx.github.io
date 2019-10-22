# Page
page代表一个页面，保存了页面布局等信息。主要作用：
* 持久化页面信息，避免反复dump布局带来的麻烦
* 帮助我们管理测试的页面
* 我们可以基于page，在page里封装业务，便于维护。如：我们可以在LoginPage里封装login方法，供其他action或testcase调用

## 添加Page
1. 在设备里，使用一台设备
2. 获取当前页面信息，添加Page
<img :src="$withBase('/assets/page_dump.png')" class="zoom">
3. 保存Page

## 给Page分类
添加分类