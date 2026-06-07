# 小福龙搭子世界

基于三福“小福龙”IP打造的互动型品牌网页 Demo。用户可以选择生活场景，获得智能穿搭推荐，在换装实验室调整单品，并生成可分享的潮趣海报。

## 核心体验

- 8 个生活场景与场景任务
- 天气、库存、活动节点驱动的智能搭案
- 小福龙成品穿搭与轻量换装实验室
- 场景匹配、潮趣、实用、分享等维度评分
- AI 潮趣大片模拟生成
- 海报预览与 PNG 保存
- 三阶段品牌活动转化闭环展示

## 技术栈

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- html2canvas

## 本地运行

需要安装 Node.js 20 或更高版本。

```bash
npm install
npm run dev
```

浏览器访问：

```text
http://localhost:3000
```

生产构建：

```bash
npm run build
npm run start
```

## 项目结构

```text
xiaofulong-dazi-world/
├── public/
│   └── assets/              # 小福龙人物、服装、场景、海报与活动素材
├── src/
│   ├── app/                 # Next.js 页面与全局样式
│   ├── components/          # 页面模块与互动组件
│   ├── data/                # 素材、场景、匹配规则与模拟业务数据
│   └── lib/                 # 智能推荐与 AI 生成模拟逻辑
├── package.json
└── README.md
```

## 关键文件

- `src/app/page.tsx`：首页模块与核心状态
- `src/data/assets.ts`：统一素材资产清单
- `src/data/scenes.ts`：8 个生活场景
- `src/data/matchRules.ts`：标签匹配与评分规则
- `src/lib/smartRecommend.ts`：天气、库存和活动节点驱动的动态推荐
- `src/components/WardrobePanel.tsx`：换装实验室
- `src/components/PosterGenerator.tsx`：海报生成
- `src/components/AIGenerationModal.tsx`：AI 大片生成 Demo

## 如何新增素材

1. 将图片放入 `public/assets` 对应分类目录。
2. 在 `src/data/assets.ts` 中增加素材记录。
3. 填写素材的 `category`、`tags`、`scenes`、`trendScore` 与 `shareScore`。
4. 自动搭配引擎会根据场景关键词重新计算推荐。

## 如何新增场景

1. 在 `public/assets/backgrounds` 中添加场景背景。
2. 在 `src/data/scenes.ts` 中新增场景配置。
3. 在 `src/data/assets.ts` 中登记背景、海报和成品穿搭素材。

## GitHub 上传

在当前目录打开终端后运行：

```bash
git init
git add .
git commit -m "feat: add Xiaofulong interactive brand demo"
git branch -M main
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

项目公共素材约 71 MB，单个文件均低于 GitHub 100 MB 文件限制。
