# Eodash v5 Configuration and Deployment Template
This is a template repository for configuring and deploying [eodash-v5](https://github.com/EOX-A/eodash-v5)

## Prerequisites
* Docker
* Node v18 or higher

## Get Started
1. Create your own brand repository from this template. See [creating a repository from a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

2. Install the required dependencies after cloning or downloading your repo:
```bash
npm run install
```

3. Customize the configurations in `config.js`. check out the [docs](https://github.com/EOX-A/eodash-v5/blob/remodel/docs/interfaces/EodashConfig.md) to learn more.

4. Build the docker image:
```bash
docker build -t="my-brand" .
```

5. Run the docker image:
```bash
docker run -p="8080:8080" my-brand
```
6. Once everything has started up, you should be able to access the dashboard via [http://localhost:8080/](http://localhost:8080/) on your host machine.
```bash
open http://localhost:8080/
```

## Static Assets
files and directories inside the `public` directory will be served statically in the application. They can be refrenced inside the config using their relative path:
```js
new URL('/directory/file',import.meta.url).href
``` 
