# eodash Configuration and Deployment Template

This is a template repository for configuring and deploying [eodash](https://github.com/eodash/eodash)

## Prerequisites

- Node v18 or higher

## Static Assets

files and directories inside the `public` directory will be served statically in the application. They can be refrenced inside the config using their relative path:

```js
new URL("/directory/file", import.meta.url).href;
```
