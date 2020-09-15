/*
 * @Author: atdow
 * @Date: 2020-09-14 21:24:24
 * @LastEditTime: 2020-09-15 23:57:14
 * @LastEditors: Please set LastEditors
 * @Description: 创建了基础路由
 */

import React from 'react';

/**
 * 注意：如果路由组件使用动态加载的话，那么下面就不要再引入组件了，否则动态加载就会失效
 * 如果项目结构简单，可以在当前文件中配置所有路由，如果结构复杂，就需要将二级路由及下层的路由单独拆分成一个个路由配置文件
 */

import App from '@src/entry/App';

export interface RouteConfigDeclaration {
    /**
     * 当前路由路径
     */
    path: string;
    /**
     * 当前路由名称
     */
    name?: string;
    /**
     * 是否严格匹配路由
     */
    exact?: boolean;
    /**
     * 是否需要路由鉴权
     */
    isProtected?: boolean;
    /**
     * 是否需要路由重定向
     */
    isRedirect?: boolean;
    /**
     * 是否需要动态加载路由
     */
    isDynamic?: boolean;
    /**
     * 动态加载路由时的提示文案
     */
    loadingFallback?: string;
    /**
     * 路由组件
     */
    component: any;
    /**
     * 子路由
     */
    routes?: RouteConfigDeclaration[];
}

export const routesConfig: RouteConfigDeclaration[] = [
    {
        path: '/',
        name: 'root-route',
        component: App,
        routes: [
            {
                path: '/main',
                // exact: true,
                isDynamic: true,
                isRedirect: true,  // 重定向到首页
                component: React.lazy(() =>
                    import(/* webpackChunkName: "main" */ '@src/layout/mainLayout/MainLayout'),
                ),
                routes: [
                    {
                        path: '/main/home',
                        isDynamic: true,
                        name: "home",
                        component: React.lazy(() =>
                            import(/* webpackChunkName: "home" */ '@src/views/home/Home'),
                        ),
                    },
                    {
                        path: '/main/my',
                        isDynamic: true,
                        name: "my",
                        component: React.lazy(() =>
                            import(/* webpackChunkName: "my" */ '@src/views/my/My'),
                        ),
                    }
                ],
            },
            {
                path: '/home',
                // exact: true,
                isDynamic: true,
                // loadingFallback: '不一样的 loading 内容...',
                // component: Home,
                // component: React.lazy(
                //     () =>
                //         new Promise(resolve =>
                //             setTimeout(
                //                 () =>
                //                     resolve(
                //                       import(/* webpackChunkName: "home"*/ '@src/views/home/Home'),
                //                     ),
                //                 2000,
                //             ),
                //         ),
                // ),
                component: React.lazy(() =>
                    import(/* webpackChunkName: "home"*/ '@src/views/home/Home'),
                ),
                routes: [
                    {
                        path: '/home/child-one',
                        isDynamic: true,
                        component: React.lazy(() =>
                            import(/* webpackChunkName: "child-one" */ '@src/views/home/ChildOne'),
                        ),
                    },
                    {
                        path: '/home/child-two',
                        isRedirect: true,
                        isDynamic: true,
                        component: React.lazy(() =>
                            import(/* webpackChunkName: "child-two" */ '@src/views/home/ChildTwo'),
                        ),
                    },
                ],
            },
            {
                path: '/my',
                isDynamic: true,
                component: React.lazy(() =>
                    import(/* webpackChunkName: "my" */ '@src/views/my/My'),
                ),
            },
            {
                path: '/login',
                isDynamic: true,
                isRedirect: true,
                component: React.lazy(() =>
                    import(
                        /* webpackChunkName: "login" */
                        '@src/views/login/Login'
                    ),
                ),
            },
            {
                path: '/register',
                isDynamic: true,
                component: React.lazy(() =>
                    import(/* webpackChunkName: "register"*/ '@src/views/register/Register'),
                ),
            },
        ],
    },
];
