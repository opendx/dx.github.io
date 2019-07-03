'use strict';

module.exports = {
    plugins: {
        '@vuepress/medium-zoom': {
            selector: 'img.zoom'
        }
    },
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
                    '/': [
                        {
                            title: 'Opendx',
                            collapsable: false,
                            children: [
                                '/guide/introduction'
                            ]
                        },
                        {
                            title: '部署',
                            collapsable: false,
                            children: [
                                '/guide/deploy-server',
                                '/guide/deploy-agent'
                            ]
                        },
                        {
                            title: '使用指南',
                            collapsable: false,
                            children: [
                                '/guide/guide-device',
                                '/guide/guide-project',
                                '/guide/guide-page',
                                '/guide/guide-action'
                            ]
                        },
                        {
                            title: '进阶',
                            collapsable: false,
                            children: [
                                ''
                            ]
                        }
                    ]
                }
            }
        }
    }
}