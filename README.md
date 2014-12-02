angular-floatThead 
=============

**angular-floatThead** is a very simple wrapper around the awesome floatThead library by [@mkoryak](https://github.com/mkoryak/floatThead/)


## Installation

#### via bower:
```
$ bower install angular-float-thead
```

## Usage

1. Load the jquery.floatThead library as per instructed in that repo in your app. This angularized version is just a wrapper around the actual library which you still need.

2. Include angular-float-thead as a dependency for your app

  ```js
  angular.module('myApp', ['floatThead'])
  ```
  
3. Specify ```float-thead``` on your table element and optionally pass through a floatThead object as a parameter, eg: ```<table float-thead="floatTheadOptions">```

4. Scope floatTheadOtions in your controller
 
  ```js
  $scope.floatTheadOptions = {
      scrollingTop: 60
      useAbsolutePositioning: false
    }
  ```    

5. If you want the directive to reinitialize when your tables data changes then specify an ```ng-model``` on your table and it will watch the collection/object and call 'reflow' when the data changes.
  Like this:
  ```<table float-thead="floatTheadOptions" ng-model="theControllerWhereYouPlacedYourfloatTheadOptionsScopeinStep4">
