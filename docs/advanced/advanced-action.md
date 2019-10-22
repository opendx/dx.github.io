# 自定义代码级action

## agent工程添加代码级action

1. 编写action代码
```java
package com.daxiang.action.myaction;

import org.springframework.util.Assert;

public class MyAction {

    public static String findBalanceByUsername(String username) {
        Assert.hasText(username, "username不能为空");
        String balance = findBalance(username);
        return balance;
    }
}
```

2. 添加到action表
```
INSERT INTO `action` (
	`id`,                      -- 主键id，必填
	`name`,                    -- action名称，必填
	`description`,             -- 描述，非必填
	`invoke`,                  -- 如何调用
	`return_value`,            -- 返回值: void / 其他
	`params`,                  -- 参数，非必填
	`platform`,                -- 1:Android  2:iOS  null:通用，非必填
    `page_id`,                 -- 绑定page，非必填
    `project_id`,              -- 绑定project，非必填
)
VALUES
(
    8888,
    '根据用户名查询账户余额',
    '',
    'com.daxiang.action.myaction.MyAction.findBalanceByUsername',
    'String',
    '[{"name":"username","type":"String","description":"用户名"}]'
    null,
    null,
    null
);
```

> sql参考[这里](https://github.com/opendx/agent/blob/master/src/main/java/com/daxiang/action/sql/basic_action.sql)

## 添加轻量级代码action

1. 添加action
<img :src="$withBase('/assets/add_lite_action.png')" class="zoom">
2. 测试action
<img :src="$withBase('/assets/test_lite_action.png')" class="zoom">

