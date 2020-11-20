# bill-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 运行环境：
Node version:v14.15.0

Npm version:6.14.8

## 简介
整个项目采用vue cli构建，引入的相关库如下：

1、Element-ui组件库，用于展示带有基础样式的数据

2、dayjs库，用于处理时间字段的转换和展示

3、csv-loader库，用于读取csv文件并转换为Json

4、vue-router库，用于管理路由

5、vuex库，用于管理状态

## 思路
选择了我最擅长的vue框架进行开发，通过vue-cli脚手架工具快速搭建前后端分离的SPA项目，引入vuex库主要是为了便于项目功能需求增加后进行扩展，UI方面使用了PC端非常常用的Element-ui组件库，其中的table组件提供了非常丰富的功能，非常适合此项目的需求，唯一陌生的是csv文件，我使用了csv-loader进行文件的读取和转换。

## 需求和实现

1. 加载我们所提供的数据；（通过csv-loader读取和转换数据，table展示数据）

2. 以列表的形式展示账单内容，并且提供下拉框选择月份进行筛选，其中列表中所展示的账单为选择月份的账单；（table展示数据，为账单时间字段增加过滤功能）

3. 支持使用者添加账单；（新增按钮打开表单弹窗，新建账单，考虑到只是静态的项目，新增的数据没有做持久保存，并且账单时间都是固定的，实际项目需要通过ajax将数据传到服务器进行保存并且提交时间应为当时的时间）

4. 简单地统计并展示所选月份的收入和支出总金额。(为账单类型字段增加过滤功能，为table增加合计功能)

5. 对账单分类进行二次筛选；(为账单分类字段增加过滤功能)

6. 对选择月份内的所有账单根据账单分类进行支出金额统计，并进行排序。（为账单金额字段增加排序功能）
