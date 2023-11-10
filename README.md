# eslint-config-react [![npm](https://img.shields.io/npm/v/@fineorg/eslint-config-react.svg)](https://npmjs.org/package/@fineorg/eslint-config-react)

## 开发

修改内容完成后新建一个 tag 后提交，在 Github 发布 release 后会自动发布到 npm 上。

```sh
git tag -a v1.0.0 -m "Tag comment"

git push origin v1.0.0
```

## 安装

```sh
# npm
npm install @fineorg/eslint-config-react

# yarn
yarn add @fineorg/eslint-config-react
```

## 使用

本配置文件是针对使用 [Typescript](https://www.typescriptlang.org/) 开发 [React](https://zh-hans.reactjs.org/) 项目的，只能在对应环境下使用。同时使用了 [Prettier](https://prettier.io/) 作为代码风格工具，为了确保使用正常，需要先安装好对应的环境以及相关依赖。

```sh
# 以 vite 安装 react-ts 为例
npm create vite@latest my-vue-app -- --template react-ts
# yarn
yarn create vite my-vue-app --template react-ts

# 安装 Eslint
npm install -D eslint prettier @fineorg/eslint-config-react
# yarn
yarn add --dev eslint prettier @fineorg/eslint-config-react
```

新建或修改配置文件 `.eslintrc.json` 为:

```json
{
  "extends": "@fineorg/eslint-config-react"
}
```

## 内置插件

- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports)
