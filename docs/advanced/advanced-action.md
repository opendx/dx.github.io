# 自定义action

很多时候，平台提供的action无法满足所有需求。比如有这样一个需求：在执行自动化测试时，需要校验订单列表最近的一个订单号显示是否正确。
此时你一定在想：要是有个“获取最近一个订单号”的action该多少啊。下面介绍如何自定义一个action，来满足各种需求。

## 添加自定义action
在agent工程action模块添加自定义action。以action模块的com.daxiang.actions.macaca.Click.java为例说明如何自定义action。
```java
public class Click {

    // 如果不需要用到driver可以不用定义
    private MacacaClient driver;

    // 如果不需要用到driver可以不用定义这个构造方法
    public Click(MacacaClient driver) {
        this.driver = driver;
    }

    // 1.必须定义excute方法，异常往上层抛
    // 2.如果有返回值，必须返回Object
    // 3.如果需要外部传入参数，参数类型必须为Object
    public Object(or void) excute(Object findBy, Object value) throws Exception {
        String _findBy = (String) findBy;
        String _value = (String) value;
        Element element = MacacaUtil.waitForElement(driver, _findBy, _value, ImplicitlyWait.DEFAULT_MILLISECOND);
        element.click();
        return element;
    }
}
```

##