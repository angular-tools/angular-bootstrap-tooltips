(function () {
    'use strict';

    angular.module('angularBootstrapTooltips', [])
        .directive('bsTip', [function () {
            return {
                restrict: 'A',
                scope: {},
                link: function (scope, element, attrs) {
                    $(element).tooltip({container: 'body'});

                    $(element).hover(function () {
                        $(element).tooltip('show');
                    }, function () {
                        $(element).tooltip('hide');
                    });
                }
            };
        }]);
})();