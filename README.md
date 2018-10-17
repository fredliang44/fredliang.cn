# fredliang.cn

> Source Code of [www.fredliang.cn](https://www.fredliang.cn)

## 1. Project setup

```
yarn install
```

### 1.1 Create oss.js in root path with alibabacloud oss config

``` javascript
module.exports = {
  accessKeyId: '',
  accessKeySecret: '',
  region: '',
  bucket: ''
}
```

### 1.2 Compiles and hot-reloads for development
```
yarn dev
```

### 1.3 Compiles and minifies for production then upload `dist` folder to oss
```
yarn build
```

### 1.4 Lints and fixes files
```
yarn lint
```
