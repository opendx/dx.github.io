# Action
action代表一个或多个操作的集合，也可以把action看成是一个组件，实际上action就是java的方法（函数）。一个点击操作是一个action，一个登录业务流程是一个action，一个测试用例也是一个action，整个自动化测试由action组成。
平台包含三种action:
* 基础action，即代码形式的action（agent工程com.daxiang.action）
* 业务封装的action （如：我们在平台添加一个登录action，供其他action调用）
* 测试用例

## 添加Action
<img :src="$withBase('/assets/save_action.png')" class="zoom">

### 方法参数（使用#{}引用）
希望调用方传入的值，如：我们新增一个登录Action，可以把账号和密码作为方法参数，在action的步骤里引用方法参数（调用方传入的账号密码）。其他action想要登录，只需要调用登录action即可。
### 局部变量（使用@{}引用）
局部变量主要有3个作用：
* 维护一些可能会变动的值，比如一个元素的id
* 将步骤的返回值赋值给局部变量，以达到在步骤间传递值的作用
* 作为返回值返回
### 全局变量（使用${}引用）
一些不怎么变化的值可以存储在全局变量里。如一个app的包名。
### 返回值
引用局部变量返回。
### 步骤
步骤即一个action。我们可以将步骤的返回值（如果有返回值的话）赋值给局部变量。

## 绑定Page
<img :src="$withBase('/assets/action_select_page.png')" class="zoom">
<img :src="$withBase('/assets/action_page.png')" class="zoom">

## 动态调试action
在以往的UI自动化测试中，调试自动化脚本往往是最麻烦最耗时的。平台提供的实时调试功能，大大减少了调试时间。
<img :src="$withBase('/assets/debug_action.gif')" class="zoom">