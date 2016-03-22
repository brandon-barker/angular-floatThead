/**
 * floatThead wrapper for AngularJS
 * @version v0.1.0 - 2015-10-25
 * @link https://github.com/brandon-barker/angular-floatThead
 * @author Brandon Barker
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function () {
  'use strict';

  angular
    .module('floatThead', [])
    .directive('floatThead', ['$timeout', '$log', floatThead]);

  function floatThead($timeout, $log) {
    // Usage:
    // Specify float-thead on any table element and optionally pass through a floatThead options object to initialize the library.
    // Optionally specify ng-model to have the directive watch any objects for changes and call 'reflow' on floatThead.
    // You can also manually trigger a reflow by triggering an event on the table element called 'update', eg: jQuery('.table').trigger('update');
    var directive = {
      require: '?ngModel',
      scope: {
        floatTheadEnabled: '='
      },
      link: link,
      restrict: 'A'
    };
    return directive;

    function link(scope, element, attrs, ngModel) {
      var isEnabled = (scope.floatTheadEnabled === true);

      if (isEnabled) {
        jQuery(element).floatThead(scope.$eval(attrs.floatThead));
      }

      scope.$watch('floatTheadEnabled', function (newVal) {
        if (newVal === true) {
          jQuery(element).floatThead(scope.$eval(attrs.floatThead));
        } else {
          jQuery(element).floatThead('destroy');
        }
      });

      if (ngModel) {
        // Set $watch to do a deep watch on the ngModel (collection) by specifying true as a 3rd parameter
        scope.$watch(attrs.ngModel, function () {
          //give time for rerender before reflow
          $timeout(function() {
            jQuery(element).floatThead('reflow');
          }, 100);
        }, true);
      } else {
        $log.info('floatThead: ngModel not provided!');
      }

      element.bind('update', function () {
        $timeout(function () {
          jQuery(element).floatThead('reflow');
        }, 0);
      });

      element.bind('$destroy', function () {
        jQuery(element).floatThead('destroy');
      });
    }
  }
})();
