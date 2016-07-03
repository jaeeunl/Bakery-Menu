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

