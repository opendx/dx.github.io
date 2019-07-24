# 测试计划

## 制定测试计划
<img :src="$withBase('/assets/add_testplan.png')" class="zoom">

* BeforeClass：在执行测试用例前执行的操作。推荐将一些初始化的操作设定为BeforeClass，比如安装APP。
* BeforeMethod：在执行每条测试用例前执行的操作。为了保证每条测试用例能够独立运行，不相互依赖，我们可以在BeforeMethod里设定一个Action，比如重启APP到首页。
* AfterMethod：在每条测试用例执行后执行的操作。
* AfterClass：在执行完所有测试用例后执行的操作。比如：kill APP，卸载APP等。
* 测试集：待测试的测试集，可以多选。

## 提交测试任务
制定好测试计划后，我们可以随时提交测试，测试结束后会形成相应的测试报告。
<img :src="$withBase('/assets/commit_test.png')" class="zoom">
<img :src="$withBase('/assets/commit_test_dialog.png')" class="zoom">

* 设备：指定在哪些设备上测试
* 用例分发策略
  * 兼容模式：所选设备并行执行同一份用例
  * 高效模式：用例平均分配给所选设备执行