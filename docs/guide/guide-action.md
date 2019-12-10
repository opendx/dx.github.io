# Action
action代表一个或多个操作的集合。一个点击操作是action，一个登录业务流程是action，一个测试用例也是action，整个自动化测试由action组成。

## action即java方法
<img :src="$withBase('/assets/action_java_method.png')" class="zoom">

## 代码渲染
以下将直接渲染到生成的代码中，否则将当做字符串处理
* ${}包裹的内容
* 全局变量类型，全局变量名
* 方法参数类型，方法参数名
* 局部变量类型，局部变量名
* 返回值类型
* import
* action: 执行java代码[executeJavaCode]
* 赋值
* page元素(渲染为page.name_element.name)

## 添加action
以登录为例进行说明
### 添加登录action
<img :src="$withBase('/assets/action_login.png')" class="zoom">

### 添加登录失败用例
<img :src="$withBase('/assets/testcase_loginfail.png')" class="zoom">

## 异常处理
* 中断执行：step执行有异常，停止执行下面的步骤
* 忽略，继续执行：step执行有异常，忽略，继续执行下一个步骤
* 抛出跳过异常：step执行有异常，抛出跳过异常，测试报告将标记该用例的测试结果为skip

## 内置对象
我们可以在"执行java代码"action或${}包裹的内容中直接使用的对象
* AppiumDriver driver
* BasicAction $
* Map<String, Object> vars

如：在执行java代码code中使用driver.getPageSource()获取页面内容，使用$.click("id", "xxx")点击元素（更多action可以点击action detail查看）。
一次action调试或测试任务，所有action都可以直接使用共享的vars，可以通过vars在action之间共享或传递值。

## 返回值类型
请参考[这里](/advanced/advanced-action.html#添加轻量级代码action)

## import
由于action step支持内嵌java代码，import可以帮助我们简化内嵌代码。比如我们需要在内嵌代码里使用org.apache.commons.lang3.StringUtils:
1. import里填入import org.apache.commons.lang3.StringUtils;
2. 在执行java代码action里，可以直接使用StringUtils.isBlank进行调用，否则要用org.apache.commons.lang3.StringUtils.isBlank进行调用才行

## 断言
模板内已经静态导入了assertJ，可以通过assertThat进行断言。
<img :src="$withBase('/assets/assert_equal.png')" class="zoom">
> 断言使用方法，请参考[这里](https://joel-costigliola.github.io/assertj/assertj-core.html)

## 实时调试action原理

### action转换为java代码
<img :src="$withBase('/assets/action_to_javacode.png')" class="zoom">

### 编译运行java代码
<img :src="$withBase('/assets/compile_class_testng_run.png')" class="zoom">

## 调试过程中使用print打印信息
<img :src="$withBase('/assets/action_print.png')" class="zoom">

## 绑定Page
<img :src="$withBase('/assets/action_select_page.png')" class="zoom">