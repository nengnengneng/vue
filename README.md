## 717项目总结
<a name="gettingstarted"></a>
![hello](https://github.com/murlokswarm/app/wiki/assets/hello.png)
1. [项目背景](#req)
2. [项目技术点](#install)
3. [问题](#gettingstarted)



<a name="install"></a>
#### 项目背景
* 三鑫智慧社区是津南区智慧城市建设的18个项目之一，一库、两网、四平台便民、利民、服务民。
* 项目承担单位为民政局，致力于将过去被动应对问题的管理模式转变为主动发现、解决问题的新模式。

<a name="req"></a>
#### 项目技术点
1. 以view框架为主，用vuex管理数据，进行全局操作。用vue-router实现页面跳转
2. 工程目录清晰，且为webpack的simple版本，router自行配置。
3. 页面排版使用rem+弹性盒布局，达到自适应的要求，以实现高质感的页面投视。
4. 登录、注册的隐私设置采用token及cookie方式进行加密，全方位考虑用户体验。保护用户的私人信息。
5. 采用axios请求数据，在此处使用，相比原生的ajax更方便，直接挂载在vue原型上，省去作用域考量、引文件等步骤。
6. 突出体现vue的组件化应用，其中购物车使用的组件化传值，bus为局部应用，全局使用vuex，时光穿梭的体验，更方便管理数据。

<a name="gettingstarted"></a>
#### 问题
1. margin-top和margin-bottom不能正常显示。
* 父盒子中的子盒子使用margin-top不管用，需要在子盒子上加{height:0;overflow:hidden} 
2. 如何使固定定位的元素（position:fixed）的元素垂直水平居中在浏览器可视窗口中央？
* 此时，使用margin:0 auto;已经没有效果，只能使用CSS的top和left属性进行定位
3. 箭头函数里边的this指向window，所以要用普通函数function
4. 使用better-scroll插件时，css样式很难做出调整
* 在app.vue中进行调整，当成全局样式进行修改即可