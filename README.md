# fredliang.cn

> Source Code of [www.fredliang.cn](https://www.fredliang.cn)

## 1. Project setup

```
yarn install
```

### 1.1 Set env variables in your environment with alibabacloud oss config

``` shell
# OSs config
export WebsiteOSSRegion=""
export WebsiteOSSBucket=""


# Ali config
export AliAccessKeyID=""
export AliAccessKeySecret=""
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
