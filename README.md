# eslint-config-react [![npm](https://img.shields.io/npm/v/@fineorg/eslint-config-react.svg)](https://npmjs.org/package/@fineorg/eslint-config-react)

## 开发

修改内容完成后新建一个 tag 后提交。

```sh
git tag -a v1.0.0 -m "Tag comment"

git push origin v1.0.0
```

## 安装

```sh
npm
npm install @fineorg/eslint-config-react
# yarn
yarn add @fineorg/eslint-config-react
```

## 使用

本配置文件是针对使用 [Typescript](https://www.typescriptlang.org/) 开发 [React](https://zh-hans.reactjs.org/) 项目的，只能在对应环境下使用，为了确保使用正常，需要先安装好对应的环境以及 [Eslint](https://cn.eslint.org/) 依赖。

```sh
# 以 vite 安装 react-ts 为例
yarn create vite my-vue-app --template react-ts

# 安装 Eslint
yarn add --dev eslint @fineorg/eslint-config-react
```

添加或修改配置文件 `.eslintrc.json` 为:

```json
{
  "extends": "@fineorg/eslint-config-react"
}
```
