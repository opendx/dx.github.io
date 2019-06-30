'use strict';

module.exports = {
    locales: {
        '/': {
            title: 'Opendx',
            description: '自动化测试平台'
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
                            title: '使用指南',
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