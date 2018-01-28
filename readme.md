![](https://github.com/Gavin1995/olaf-react-next-pc/blob/master/static/cdn/img/logo-green.png)

# Olaf PC
Olaf(奥拉夫)：企业级前后端集成解决方案

## 特性
### **前后端开箱即用**
### 前端
- 同构应用：实现服务端渲染首屏优化，客户端渲染组件动态加载，按需自由切换
- 状态管理：[Redux](https://github.com/reactjs/redux)、[Redux Saga](https://github.com/redux-saga/redux-saga) 、[Immutable](https://facebook.github.io/immutable-js/)，服务端与客户端共享store，优化性能，action/reducer/saga 统一管理、扩展方便
- 样式管理：为style-jsx集成nested、lost，可以很方便的书写less/sass形式的样式代码与栅格布局
- 调试：热替换
- 其它：使用`gulp next`一键生成非回源式cdn资源地址

### 后端（api层）
- 主体框架：KOA
- 拆分controller/helpers/middleware三层，扩展方便
- helpers/log统一日志格式，加入requestId、reponseHandler中间件
- 集成Next与Koa服务端渲染
- 使用jest测试
- 集成gulp、pm2，方便调试/上线
- 调试：自动重启服务，gulp/pm2

## 使用

### 安装
```bash
> git clone git@github.com:Gavin1995/olaf-react-next-pc.git
> npm install
```
### 也可以使用[olaf-cli](https://github.com/Gavin1995/olaf-cli)
```bash
> olaf i
```

### 前端调试
```bash
> npm run next
```

### 前后端同时调试
```bash
> npm start
```
## 兼容性

Node >= 7.6.0

## 参与贡献

我非常欢迎你的贡献，你可以通过以下方式和我一起共建 :smiley:：

- 在你的公司或个人项目中使用 Olaf PC。
- 通过 [Issue](https://github.com/Gavin1995/olaf-react-next-pc/issues) 报告 bug 或进行咨询。
- 提交 [Pull Request](https://github.com/Gavin1995/olaf-react-next-pc/pulls) 改进 Olaf PC 的代码。

