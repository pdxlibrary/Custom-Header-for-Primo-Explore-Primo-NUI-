var custom_header_template = "<div>CUSTOM HEADER GOES HERE</div>";

(function () {
    "use strict";
    'use strict';

    var app = angular.module('viewCustom', ['angularLoad']);
	
	
	// load jquery - needed for custom header ubermenu
	app.component('prmTopBarBefore', {
		bindings: {parentCtrl: '<'},
		controller: function () {
			this.$onInit = function () {
				var header_container = angular.element(document.getElementsByClassName('custom-header'));
				if(header_container.length > 0)
					console.log(" ### header exists when prmTopBarBefore controller initialized");
				else
					add_custom_header(header_container);
			};
		},
		template: ''
	});

	// debug info for custom header
	app.run(['$rootScope', '$location', '$window', function($rootScope, $location, $window){
	  $rootScope.$on('$locationChangeSuccess', function(event){
			console.log(" @@@ page: " + $location.url());
			var header_container = angular.element(document.getElementsByClassName('custom-header'));
			if(header_container.length > 0)
				console.log(" @@@ header exists when locationChangeSuccess triggered");
			console.log(" @@@ path name: " + window.location.pathname);
	  });
	}]);
	
})();

angular.element(document).ready(function(){
	var header_container = angular.element(document.getElementsByClassName('custom-header'));
	if(header_container.length > 0)
		console.log(" ### header exists when jquery loaded");
	else
		add_custom_header(header_container);
	console.log(" ### path name: " + window.location.pathname);
})

function add_custom_header(header_container)
{
	var header_container = angular.element(document.getElementsByClassName('custom-header'));
	if(header_container.length == 0)
	{
		
		var custom_header_html = '<div class="custom-header" style="height:240px;">'+custom_header_template+'</div>'
		var prm_explore_main = angular.element(document.querySelector('prm-explore-main'));
		if(prm_explore_main.length == 1)
		{
			prm_explore_main.after(custom_header_html);
			var header_container = angular.element(document.getElementsByClassName('custom-header'));
			angular.element(header_container).after(prm_explore_main);
		}
		
		var prm_full_view_page = angular.element(document.querySelector('prm-full-view-page'));
		if(prm_full_view_page.length == 1)
		{
			prm_full_view_page.after(custom_header_html);
			var header_container = angular.element(document.getElementsByClassName('custom-header'));
			header_container.after(prm_full_view_page);
		}
	}
	else
	{
		console.log("ERROR: header already exists - this function shouldn't have been called");
		console.log("ERROR: path name: " + window.location.pathname);
	}
}



