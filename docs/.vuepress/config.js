'use strict';

module.exports = {
    locales: {
        '/': {
            title: 'Opendx',
            description: '开源自动化测试平台'
        }
    },
    themeConfig: {
        locales: {
            '/': {
                nav: [
                    {
                        text: 'Github',
                        link: 'https://github.com/opendx'
                    }
                ],
                sidebar: {
                    '/guide/': [
                        {
                            title: '介绍',
                            collapsable: false,
                            children: [
                                'introduction'
                            ]
                        },
                        {
                            title: '部署',
                            collapsable: false,
                            children: [
                                'deploy-server',
                                'deploy-agent'
                            ]
                        }
                    ]
                }
            }
        }
    }
}