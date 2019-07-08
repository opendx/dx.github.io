# 自定义action

很多时候，平台提供的action无法满足所有需求。比如有这样一个需求：在执行自动化测试时，需要校验订单列表最近的一个订单号显示是否正确。
此时你一定在想：要是有个“获取最近一个订单号”的action该多少啊。下面介绍如何自定义一个action，来满足各种需求。

## 添加自定义action

### 编写action代码
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

### 添加到action表
```
INSERT INTO `action` (
	`id`,                      -- 主键id（范围1 - 1000，预留了1-1000用来添加基础action），必填
	`name`,                    -- action名称，必填
	`description`,             -- 描述，非必填
	`type`,                    -- 1（基础action），必填
	`class_name`,              -- 包名 + 类名，基础action必填
	`need_driver`,             -- 0：不需要传入driver 1:需要传入driver，必填
	`has_return_value`,        -- 0：无返回值 1：有返回值，必填
	`return_value_desc`,       -- 返回值描述，非必填
	`platform`,                -- 1：Android 2：iOS null：通用，非必填
	`params`,                  -- 参数，非必填
    `page_id`,                 -- 绑定page，非必填
    `project_id`,              -- 绑定project，非必填
)
VALUES
(
    1,
    '点击',
    '点击元素',
    1,
    'com.daxiang.actions.macaca.Click',
    1,
    1,
    'Element对象',
    1,
    '[{"name": "findBy", "description": "查找方式", "possibleValues": [{"value": "id", "description": "[uiautomator2] By.res"}, {"value": "xpath", "description": "通过xpath查找元素"}, {"value": "class name", "description": "[uiautomator2] By.clazz"}, {"value": "name", "description": "[uiautomator2] By.desc or By.text"}, {"value": "text contains", "description": "[uiautomator2] By.textContains"}, {"value": "desc contains", "description": "[uiautomator2] By.descContains"}]}, {"name": "value", "description": "查找值"}]',
    null,
    null
);
```

### params字段说明

```json
[{
	"name": "findBy",
	"description": "查找方式",
	"possibleValues": [{
		"value": "id",
		"description": "[uiautomator2] By.res"
	}, {
		"value": "xpath",
		"description": "通过xpath查找元素"
	}, {
		"value": "class name",
		"description": "[uiautomator2] By.clazz"
	}, {
		"value": "name",
		"description": "[uiautomator2] By.desc or By.text"
	}, {
		"value": "text contains",
		"description": "[uiautomator2] By.textContains"
	}, {
		"value": "desc contains",
		"description": "[uiautomator2] By.descContains"
	}]
}, {
	"name": "value",
	"description": "查找值"
}]
```

* name
<img :src="$withBase('/assets/param_name.png')" class="zoom">

* possibleValues
<img :src="$withBase('/assets/param_possible_values.png')" class="zoom">