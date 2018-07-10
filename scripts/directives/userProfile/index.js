'use strict'
angular.module('reimbursement')
  .directive('profilePic', function() {
    return {
      restrict: 'E',
      scope: {
        imageUrl: '=',
        name: '=',
      },
      template: '<span class="ph-profile-pic" ng-bind="letters"></span>',
      link: function(scope, element, attrs) {
        if (attrs.size) {
          attrs.size = attrs.size + 'px';
          element[0].firstChild.style['height'] = element[0].firstChild.style['width'] = element[0].firstChild.style['line-height'] = attrs.size;
        }
        if (attrs.fontSize) {
          attrs.fontSize = attrs.fontSize + 'px';
          element[0].firstChild.style['font-size'] = attrs.fontSize;
        }
        scope.$watchGroup(['name', 'imageUrl'], function(newValues, oldValues, scope) {
          if (scope.imageUrl) {
            element[0].firstChild.style['background-image'] = 'url(' + scope.imageUrl + ')';
            scope.letters = null;
          } else if (scope.name) {
            element[0].firstChild.style['background-image'] = '';
            var name_array = scope.name.toLowerCase().split(' ');
            var first_letter = name_array[0].charAt(0);
            scope.letters = name_array.length - 1 === 0 ? first_letter : first_letter + name_array[name_array.length - 1].charAt(0);
            var background_colors = ['#66c2df', '#f7c931', '#666ccc', '#34b288', '#f26b6d'];
            var selected_background = background_colors[0];
            if (/^([bjktv])$/.test(first_letter)) {
              selected_background = background_colors[1];
            } else if (/^([alipu])$/.test(first_letter)) {
              selected_background = background_colors[2];
            } else if (/^([dfosy])$/.test(first_letter)) {
              selected_background = background_colors[3];
            } else if (/^([ehnrz])$/.test(first_letter)) {
              selected_background = background_colors[4];
            }
            element[0].firstChild.style['background-color'] = selected_background;
          }
        });
      }
    }
  });