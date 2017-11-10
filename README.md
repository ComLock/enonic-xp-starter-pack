# starter-pack

## Goals

* Let gradle drive all building (not gulp).
* Use yarn instead of npm.
* Use babel on node configuration files.
* Webpack all controllers, so that node module dependancies gets resolved compile time.
* Webpack assets for the client side.
* Let webpack use babel to transpile Ecmascript 2015 into Javascript CommonJs.

## Todo

* Js linting
* Editorconfig
* Add many examples to test that the build system works.
* Add tests.
* When gradle is watching and a es6 file is touched, all webpack entries are rebuilt, it would be nice if only entries which includes the touched file got rebuilt.
