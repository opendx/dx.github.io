# 自定义action

## 添加自定义action

### 编写action代码
在agent工程com.daxiang.action添加自定义action。以com.daxiang.action.FindElement.java为例说明如何自定义action。
```java
package com.daxiang.action.appium;

import com.daxiang.action.utils.ByUtil;
import io.appium.java_client.AppiumDriver;
import org.openqa.selenium.WebElement;
import org.springframework.util.Assert;

public class FindElement {

    // 如果不需要用到driver可以不用定义
    private AppiumDriver driver;

    // 如果不需要用到driver可以不用定义这个构造方法
    public FindElement(AppiumDriver driver) {
        this.driver = driver;
    }

    // 1.必须定义excute方法
    // 2.如果需要外部传入参数，参数类型必须为Object
    public WebElement excute(Object findBy, Object value) {
        Assert.notNull(findBy, "findBy不能为空");
        Assert.notNull(value, "value不能为空");

        String _findBy = (String) findBy;
        String _value = (String) value;

        return driver.findElement(ByUtil.getBy(_findBy,_value));
    }
}
```

### 添加到action表
```
INSERT INTO `action` (
	`id`,                      -- 主键id，必填
	`name`,                    -- action名称，必填
	`description`,             -- 描述，非必填
	`class_name`,              -- 包名 + 类名
	`need_driver`,             -- 0:不需要传入driver  1:需要传入driver，必填
	`has_return_value`,        -- 0:无返回值  1:有返回值，必填
	`return_value_desc`,       -- 返回值描述，非必填
	`platform`,                -- 1:Android  2:iOS  null:通用，非必填
	`params`,                  -- 参数，非必填
    `page_id`,                 -- 绑定page，非必填
    `project_id`,              -- 绑定project，非必填
)
VALUES
(
    1,
    '查找元素',
    'AppiumDriver.findElement',
    'com.daxiang.action.appium.FindElement',
    1,
    1,
    'WebElement',
    null,
    '[{"name":"findBy","description":"查找方式","possibleValues":[{"value":"id","description":"MobileBy.id"},{"value":"AccessibilityId","description":"MobileBy.AccessibilityId"},{"value":"xpath","description":"MobileBy.xpath"},{"value":"AndroidUIAutomator","description":"MobileBy.AndroidUIAutomator"},{"value":"iOSClassChain","description":"MobileBy.iOSClassChain"},{"value":"iOSNsPredicateString","description":"MobileBy.iOSNsPredicateString"},{"value":"image","description":"MobileBy.image"}]},{"name":"value","description":"查找值"}]'
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
		"description": "MobileBy.id"
	}, {
		"value": "AccessibilityId",
		"description": "MobileBy.AccessibilityId"
	}, {
		"value": "xpath",
		"description": "MobileBy.xpath"
	}, {
		"value": "AndroidUIAutomator",
		"description": "MobileBy.AndroidUIAutomator"
	}, {
		"value": "iOSClassChain",
		"description": "MobileBy.iOSClassChain"
	}, {
		"value": "iOSNsPredicateString",
		"description": "MobileBy.iOSNsPredicateString"
	}, {
		"value": "image",
		"description": "MobileBy.image"
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