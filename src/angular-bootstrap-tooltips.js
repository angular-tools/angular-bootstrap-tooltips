(function () {
    'use strict';

    angular.module('angularBootstrapTooltips', [])
        .directive('bsTip', [function () {
            return {
                restrict: 'A',
                scope: {bsTip: '@'},
                link: function (scope, element, attrs) {
                    $(element).tooltip({container: 'body', title: scope.bsTip, html:true});

                    $(element).hover(function () {
                        $(element).tooltip('show');
                    }, function () {
                        $(element).tooltip('hide');
                    });
                }
            };
        }]);
})();