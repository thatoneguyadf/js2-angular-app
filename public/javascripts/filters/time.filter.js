(function () {

    'use strict';

    angular.module('customFilters')
        .filter('timeHours', function () {
            return function (input) {
                var hrs = Math.floor(input / 60);
                var min = input % 60 ? (input % 60) + 'min' : '';

                return (hrs === 1 ? hrs  + 'hr ' : hrs  + 'hrs ') + min;
            };
        }) ;

}());