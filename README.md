# AngularBestPracticesDemo
A demo of Angular best practices including:

- VSCode config for fix on saving and organize imports
- Spinners
- Auto formating and styling using TSLint and Prettier
- A server to serve Todos and translations
- ngx-translate for dynamic translations

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Shared git subtree folder

Pull:
git subtree pull --prefix src/shared-lib https://github.com/lydemann/angular-shared --squash

Push:
git subtree push --prefix src/shared-lib https://github.com/lydemann/angular-shared --rejoin --squash

Split:
git subtree split --prefix src/shared-lib -b split --rejoin --squash

and push the split:
git push https://github.com/lydemann/angular-shared split:master


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
