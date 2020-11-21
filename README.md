# CatalystRepositoryBrowser

![](https://img.shields.io/badge/Angular-~10.1.1-yellow) ![](https://img.shields.io/badge/Rxjs-%5E6.6.0-red) ![](https://img.shields.io/badge/Bootstrap-%5E4.5.3-green) ![](https://img.shields.io/badge/apexcharts-%5E3.22.2-blue) ![](https://img.shields.io/badge/material-%5E10.0.0-ff69b4) 

Catalyst IT currently has over 300 repositories under the umbrella of the Catalyst organisation on GitHub (`https://github.com/catalyst`).

This web-based repository browser for user can take a look at some of the great work that Catalyst has been doing.



## Setup

```
   $ git clone https://github.com/FayeZ820/Catalyst-Repository-Browser.git
   $ cd Catalyst-Repository-Browser
   $ npm install
   $ npm start or ng serve
```

## Project folder structure
I tried to keep the Project folder structure as flat as possible, this makes possible to locate the files faster.
 
```
|-- app
    |-- app-routing.module.ts
    |-- app.component.html
    |-- app.component.scss
    |-- app.component.spec.ts
    |-- app.component.ts
    |-- app.module.ts
    |-- [+]core
    |   |-- [+]service
    |       |-- logger.service.ts
    |       |-- organisation-resolver.service.ts 
    |       |-- organisation.service.ts
    |       |-- repositories-grid-resolver.service.ts
    |       |-- repositories-grid.service.ts
    |       |-- repository-detail.service.ts
    |   |-- [+]strategies
    |       |-- preload-modules.strategy.ts
    |   |-- core.module.ts
    |   |-- ensure-module-loaded-once.guard.ts
    |-- [+]shared
    |   |-- shared.module.ts
    |   |-- [+]entities
    |       |-- contributor.ts
    |       |-- grid-displayed-columns.ts
    |       |-- grid-filter.ts
    |       |-- grid-item.ts
    |       |-- http-error.ts
    |       |-- organisation.ts
    |   |-- [+]utilities
    |       |-- contributor.ts
    |       |-- contributor.ts
    |-- [+]repositories
    |   |-- repositories-routing.module.ts
    |   |-- repositories.module.ts
    |   |-- repositories.component.html
    |   |-- repositories.component.scss
    |   |-- repositories.component.spec.ts
    |   |-- repositories.component.ts
    |   |-- [+]repositories-grid
    |       |-- repositories-grid.component.html
    |       |-- repositories-grid.component.scss
    |       |-- repositories-grid.component.spec.ts
    |       |-- repositories-grid.component.ts
    |   |-- [+]repositories-grid-sider
    |       |-- repositories-grid-sider.component.html
    |       |-- repositories-grid-sider.component.scss
    |       |-- repositories-grid-sider.component.spec.ts
    |       |-- repositories-grid-sider.component.ts
    |-- [+]repository
    |   |-- repository-routing.module.ts
    |   |-- repository.module
    |   |-- [+]repository-detail
    |       |-- repository-detail.component.html
    |       |-- repository-detail.component.scss
    |       |-- repository-detail.component.spec.ts
    |       |-- repository-detail.component.ts
```

## Code structure
Core module   
The Core Module is a module I create to define common services. The services defined in the Core Module are instantiated once, and imported from the root module only

Shared module   
The Shared Module is a module I create to keeo common components, functions and other modules that I need to import inside every other module of the application

Feature modules   
I created following Feature Modules.   
Repositories Module   
Repository Module   
Each feature module delivers a cohesive set of functionality which helps apply clear boundaries for features
As our application grows, we can clearly organize code relevant for a specific feature.

Routing modules   
App-routing Module   
Repository-routing Module   
Repositories-routing Module   


URL : `http://localhost:4200/repositories`   
URL : `http://localhost:4200/repositories/repositories-grid`   
URL : `http://localhost:4200/repositories/{repositoryName}`









