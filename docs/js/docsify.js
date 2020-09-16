window.$docsify = {
    loadNavbar: true,
    loadSidebar: true,
    coverpage: false,//激活封面功能。如果为true，则会从中加载_coverpage.md。
    auto2top: true, //当路线改变时，滚动到屏幕的顶部。
    autoHeader: true,
    mergeNavbar: true,
    //relativePath: true,
    maxLevel: 3,
    subMaxLevel: 3,
    name: 'Shimakaze Docs',
    repo: 'ShimakazeProj/ShimakazeProj.github.io',
    homepage: "index.md",
    themeColor: '#9900EE',
    basePath: "/docs/",
    plugins: [
        function (hook, vm) {
            hook.beforeEach(function (html) {
                return html
                    + '\n\n----  \n'
                    + '`Shimakaze Docs` Powered by [`docsify`](//docsify.js.org)  \n\n'
                    + '----';
            });
            hook.afterEach(function (html) {
                if (vm.route.path === '/') {
                    return html;
                }
                return html;
            });
        }
    ]
};
//window.$docsify.homepage = getI18n() + '/' + "index.md";
