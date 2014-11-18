angular-floatThead [![Build Status](https://travis-ci.org/brandon-barker/angular-floatThead.svg?branch=master)](https://travis-ci.org/brandon-barker/angular-floatThead)
=============

**angular-floatThead** is a very simple wrapper around the awesome floatThead library by [@mkoryak](https://github.com/mkoryak/floatThead/)


## Installation

#### via bower:
```
$ bower install angular-float-thead
```

## Usage

1. Include angular-float-thead as a dependency for your app

  ```js
  angular.module('myApp', ['floatThead'])
  ```
  
2. Specify ```float-thead``` on your table element and optionally pass through a floatThead object as a parameter, eg: ```<table float-thead="floatTheadOptions">```

3. If you want the directive to reinitialize when your tables data changes then specify an ```ng-model``` on your table and it will watch the collection/object and call 'reflow' when the data changes.
