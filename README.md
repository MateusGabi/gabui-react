# Instalation

```
npm install
cd bootstrap-4.3.1
npm install
cd ..
docker build -t bootstrap .
docker run -it --rm -v $(pwd):/code bootstrap bash
> cd bootstrap-4.3.1/
> npm install
> npm run dist
```
