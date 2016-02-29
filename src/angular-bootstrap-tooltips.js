(function () {
    'use strict';

    angular.module('angularBootstrapTooltips', [])
        .directive('bsTip', [function () {
            return {
                restrict: 'A',
                scope: {bsTip: '@'},
                link: function ($scope, element, attrs) {
                    $scope.redraw = function () {
                        if (!element.tooltip) {
                            element.tooltip({container: 'body', title: $scope.bsTip, html: true, trigger: 'manual'});
                        }

                        element.attr('title', $scope.bsTip).tooltip('fixTitle').parent().find('.tooltip .tooltip-inner').html($scope.bsTip);
                    };

                    $(element).hover(function () {
                        $(element).tooltip('show');
                    }, function () {
                        $(element).tooltip('hide');
                    });

                    $scope.$watch('bsTip', $scope.redraw);
                }
            };
        }]);
})();