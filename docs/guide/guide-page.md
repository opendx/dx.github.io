# Page
page代表一个页面，保存了页面布局等信息。主要作用：
* 持久化了页面信息，避免反复的dump布局带来的麻烦
* 帮助我们管理测试的页面
* 我们可以基于page，在page里封装业务。如：我们可以在LoginPage里封装login方法，供其他action或testcase调用

## 添加Page
1. 在设备里，使用一台设备
2. 获取当前页面信息，添加Page
<img src="/assets/page_dump.png" class="zoom">
3. 保存Page
<img src="/assets/page_save.png" class="zoom">

## 添加Page分类
添加Page分类，用于Page分类管理
<img src="/assets/add_page_category.png" class="zoom">

