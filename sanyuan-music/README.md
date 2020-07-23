- router
    react-router
    react-router-dom
    react-router-config

    路由的本质是什么？
    路由级别的页面
    二级路由

    <!-- /path Component 放在相应的地方 -->

    2. react-router 嵌套
    config router 配置一下就清晰了

    当路由比较复杂时，传统的手写router/route配置难以维护，
    企业级的router配置方案 react-router-config，清晰，可维护的 routes/index.js配置
    layout app里总有几套皮肤 ， 匹配那个级别的所有路由

    routes react-router-config的 renderRoutes(route.routes)方法