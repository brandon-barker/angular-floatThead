/**
 * floatThead wrapper for AngularJS
 * @version v0.0.1 - 2014-08-19 
 * @link https://github.com/brandon-barker/ng-floatThead
 * @author Brandon Barker
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function () {
    'use strict';

    angular
        .module('floatThead', [])
        .directive('floatThead', ['$timeout', '$log', floatThead]);
    
    function floatThead ($timeout, $log) {
        // Usage:
        // Specify float-thead on any table element and optionally pass through a floatThead options object to initialize the library.
        // Optionally specify ng-model to have the directive watch any objects for changes and call 'reflow' on floatThead.   
        // You can also manually trigger a reflow by triggering an event on the table element called 'update', eg: jQuery('.table').trigger('update');
        var directive = {
            require: '?ngModel',
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs, ngModel) {
            jQuery(element).floatThead(scope.$eval(attrs.floatThead));

            if (ngModel) {
                // Set $watch to do a deep watch on the ngModel (collection) by specifying true as a 3rd parameter
                scope.$watch(attrs.ngModel, function () {                    
                    jQuery(element).floatThead('reflow');
                }, true);
            } else {
                $log.info('floatThead: ngModel not provided!');
            }

            element.bind('update', function () {                
                $timeout(function() {
                    jQuery(element).floatThead('reflow');
                }, 0);
            });

            element.bind('$destroy', function() {
                jQuery(element).floatThead('destroy');
            });
        }
    }
})();
