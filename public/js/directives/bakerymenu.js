angular.module('bakeryMenuApp')
.directive('sibling', function () {
    return {
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                element.parent().parent().children().removeClass('category-active');
                element.parent().addClass('category-active');
            })
        },
    }
});

angular.module('bakeryMenuApp')
.directive('list', function () {
    return {
    	restrict: 'A',
        link: function(scope, element, attrs) {
		     scope.$watch(
                function () { return element[0].querySelectorAll('.menu-item').length },
                function(newValue, oldValue) {
                    var activeTab = document.querySelector('category-active');
                    if(newValue != oldValue) {
                        element.parent().parent().toggleClass('searched')
                        if(element[0].querySelectorAll('.menu-item').length === 0) {
                           element.parent().parent().addClass('empty-section')
                        } else {
                            element.parent().parent().removeClass('empty-section')
                        }
                    }  
                }              
            )
        },
    }
});

angular.module('bakeryMenuApp')
.directive('tab', function () {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
             scope.$watch(
                function () { return element[0].attributes[1].nodeValue },
                function(newValue, oldValue) {
                    var activeTab = document.querySelector('category-active');
                    if(newValue != oldValue) {
                         console.log(element[0].attributes[1].nodeValue)
                         var categoryTabSelected = document.querySelectorAll('content-category');
                    }  
                }              
            )
        },
    }
});