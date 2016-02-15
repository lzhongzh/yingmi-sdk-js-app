盈米接入商户模拟js app - Yingmi SDK Js App
=====================

在运行此项目之前请确认已部署[盈米接入商户模拟server](https://github.com/yingmi/openapi-sdk-broker-server)
在浏览器中运行会有跨域问题（SDK作为web app在手机中运行没有跨域问题），可自行使用插件关闭浏览器跨域设置，如[chrome的CORS toggle插件](https://chrome.google.com/webstore/detail/cors-toggle/omcncfnpmcabckcddookmnajignpffnh?hl=en-US)
# 安装和运行

## clone代码到本地

```
git clone https://github.com/lzhongzh/yingmi-sdk-js-app.git
```

## 安装
在clone代码后，首先安装npm所有依赖包

```bash
cd yingmi-sdk-js-app
npm install
```

## 运行

```
npm start
```

使用浏览器打开http://localhost:8080
建议使用chrome浏览器，并且实用chrome浏览器的移动设备模拟工具来访问（右键点击审查元素，然后按shift + command + M（MAC）shift + ctrl + M(WIN)）

