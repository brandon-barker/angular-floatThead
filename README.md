angular-floatThead 
=============

**angular-floatThead** is a very simple wrapper around the awesome floatThead library by [@mkoryak](https://github.com/mkoryak/floatThead/)


## Installation

#### via bower:

```
$ bower install angular-float-thead
```

## Usage

1. This is just a wrapper over the original jQuery floatThead library, so first make sure you have the main library installed as per https://github.com/mkoryak/floatThead 

2. Include angular-float-thead as a dependency for your app after running `bower install`

  ```js
  angular.module('myApp', ['floatThead'])
  ```
  
3. Specify ```float-thead``` on your table element and optionally pass through a floatThead object as a parameter, eg: ```<table float-thead="floatTheadOptions">```

4. Add floatTheadOptions to `$scope` on your controller
 
  ```js
  $scope.floatTheadOptions = {
      scrollingTop: 60,
      useAbsolutePositioning: false
    };
  ```    

5. If you want the directive to reinitialize when your tables data changes then specify an ```ng-model``` on your table and it will watch the collection/object and call 'reflow' when the data changes.

for eg:
  
```<table float-thead="floatTheadOptions" ng-model="collectionOrObjectToWatch">```

## Configuration

You can pass through additional attributes to the directive to modify the behaviour:

### `float-thead-enabled`

Pass through a boolean value or scope object to enable/disable the floatThead library

> You can use this to implement a toggle button or to delay the initialization of the library

```html
<table float-thead-enabled="test.enabled" ... >
```
