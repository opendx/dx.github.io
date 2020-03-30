'use strict';

module.exports = {
    base: '/opendx/',
    plugins: {
        '@vuepress/medium-zoom': {
            selector: 'img.zoom'
        }
    },
    locales: {
        '/': {
            title: 'opendx',
            description: '基于Appium的开源UI自动化测试平台'
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
                            title: 'opendx',
                            collapsable: false,
                            children: [
                                '/guide/introduction'
                            ]
                        },
                        {
                            title: '部署',
                            collapsable: false,
                            children: [
                                '/guide/deploy'
                            ]
                        },
                        {
                            title: '使用指南',
                            collapsable: false,
                            children: [
                                '/guide/1',
                                '/guide/2',
                                '/guide/3'
                            ]
                        },
                        {
                            title: 'FAQ',
                            collapsable: false,
                            children: [
                                '/guide/faq'
                            ]
                        }
                    ]
                }
            }
        }
    }
}