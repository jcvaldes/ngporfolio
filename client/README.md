
## Carpetas: 

core: esta todo el nucleo de la aplicación y es todo lo que es compartido en toda la aplicación e indispensable para que funcione como guards, interceptors y servicios, componentes tipo navbar o footer  etc

shared: es todo lo que se comparte pero puede usarse en al menos 1, 2 o mas componentes pero no en toda la aplicación como pipes, directivas, models, uitilitarios

modules: aqui se encuentran los módulos y se trabajan con lazy load


## Angular CLI

ng g c core/nabvar --skip-tests --dry-run
