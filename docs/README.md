# 快速开始

#### 安装组件库

```bash
npm i fanjy-ui
```

#### 引用组件库
> 在 main.js 中引用组件库

```javascript
// 全部引入
import 'fanjy-ui/dist/css/index.css'
import FUI from 'fanjy-ui'
Vue.use(FUI)

// 按需引用
import 'fanjy-ui/dist/css/demo.css'
import { DemoCard } from 'fanjy-ui'
Vue.use(DemoCard)
```