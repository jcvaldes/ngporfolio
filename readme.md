## Driver de postgres

npm i -S -E  pg pg-hstore

## Borra los directorios de manera recursiva y forzada 
rm -rf node_modules/

## Configuraciones de rutas absolutas

en el tsconfig.app.ts poner en compilerOptions: 
```
    "moduleResolution": "node",
    "paths": {
      "@app/*": ["src/app/*"],
      "@env": ["src/environments/environment"],
      "@core/*": ["src/app/core/*"],
      "@shared/*": ["src/app/shared/*"],
      "@ls": ["src/app/core/services/local-storage.service.ts"]
    },
```

## Commonjs dependencies

Puede haber advertencias de que una libreria use commonjs y se puede apagar en el angular.json con allowedCommonJsDependencies ejemplo:

```
"architect": {
  "build": {
    "builder": "@angular-devkit/build-angular:browser",
    "options": {
      "outputPath": "dist/admin",
      "index": "src/index.html",
      "main": "src/main.ts",
      "polyfills": "src/polyfills.ts",
      "tsConfig": "tsconfig.app.json",
      "aot": true,
      "allowedCommonJsDependencies": [
        "lodash",
        "url-join",
        "uuid/v4"
      ],

```

## Instalar angular material
npm i -S -E @angular/material @angular/cdk