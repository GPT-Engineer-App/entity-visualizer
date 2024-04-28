# entity-visualizer

用中文输出下面功能界面，合并在一个软件界面上：
1. 文档上传界面：
- 功能：
- 允许用户上传文档进行实体关系判断和信息抽取。
- 支持多种文档格式，如TXT、PDF等。

 2. 实体关系判断设置界面：
- 功能：
- 提供用户选择要判断的实体关系类型，如人物之间的交互关系、事件之间的先后关系等。
- 允许用户定义关系判断的规则和条件，如关键词匹配、语法分析等。

 3. 实体关系可视化界面：
- 功能：
- 在图形化界面中展示文档中实体之间的关系图。
- 提供交互功能，如点击实体查看详细信息、调整布局等。

 4. 文本分类界面：
- 功能：
- 实现文本分类功能，将文本归类到不同的类别中。
- 显示文本被分类到的类别标签。

 5. 信息抽取界面：
- 功能：
- 从文本中提取特定信息，如人物姓名、事件时间等。
- 展示抽取的信息并提供编辑和验证功能。

 6. 结果导出界面：
- 功能：
- 支持将实体关系判断、文本分类和信息抽取的结果导出为各种格式，如图像、文本文件等。
- 提供导出选项，如选择导出范围、导出格式等。


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/entity-visualizer.git
cd entity-visualizer
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
