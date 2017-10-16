![](https://img.shields.io/badge/language-Angular-orange.svg)
![](https://img.shields.io/badge/framework-Ionic-blue.svg)

## IonicApp - 网易云音乐


<div style="display: flex; margin-top: 12px;">
成果截图
</div>

## Ionic
[Ionic官网](http://ionicframework.com/getting-started/)<br>
```bash
// 使用命令查看当前配置信息
ionic info

// 全局配置环境
npm install -g cordova ionic
```

## 项目运行
```bash
// 克隆项目
git clone https://github.com/FateZeros/ionic-app.git

cd ionic-app 

npm install

// 启动app
ionic serve
```



## Ionic生命周期
1.ionViewDidLoad:页面加载完毕触发.该事件发生在页面被创建成 DOM 的时候，且仅仅执行一次。如果页面被缓存（Ionic默认是缓存的）就不会再次触发该事件。该事件中可以放置初始化页面的一些事件.<br>
2.ionViewWillEnter:即将进入一个页面变成当前激活页面的时候执行的事件。<br>
3.ionViewDidEnter:进入了一个页面且变成了当前的激活页面，该事件不管是第一次进入还是缓存后进入都将执行。<br>
4.ionViewWillLeave:将要离开了该页面之后变成了不是当前激活页面的时候执行的事件。<br>
5.ionViewDidLeave:在页面完成了离开该页面并变成了不是当前激活页面的时候执行的事件。<br>
6.ionViewWillUnload:在页面销毁和页面中有元素移除之前执行的事件.<br>
7.ionViewCanEnter: <br>
8.ionViewCanLeave: <br>

## 开源API调用
[网易云音乐 API](https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi)
```bash
git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git

npm install

PORT=4000 node app.js

// type说明
{
    "5": "MV",
    "6": "文章",
    "19": "🔗"
}
```

## 音乐播放模块



## 功能
- [ ] 发现音乐模块
- [ ] 我的音乐模块
- [ ] 我的账号模块

## 目录结构


## 知识点
1.[sass-map](https://www.w3cplus.com/preprocessor/sass-maps.html)<br>

## 国外论坛
[forum论坛](https://forum.ionicframework.com)

## 遇到的问题
Q:进入详情页面(二级页面)，去掉tabs？<br>
A:
```bash
this.navCtrl.push(NewPage) => this.appCtrl.getRootNav().push(NewPage)

this.appCtrl.getRootNav() deprecated => getRootNavById()
```


