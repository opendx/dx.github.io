# Action
action代表一个或多个操作的集合，也可以把action看成是一个组件，实际上action就是java的方法（函数）。一个点击操作是一个action，一个登录业务流程是一个action，一个测试用例也是一个action，整个自动化测试由action组成。
平台包含三种action:
* 基础action，即代码形式的action（agent工程action模块）
* 业务封装的action （如：我们在平台添加一个登录action，供其他action调用）
* 测试用例

action如下:
```java
    public Object(or void) action1(Object... params) {
        Object var1 = "var1_value";
        Object var2;
        // 1.step1
        var2 = action2(var1);
        // 2.step2
        action3();
        // if no return value,method is void
        return var2;
    }
```

## 添加Action
