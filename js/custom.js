var custom_header_template = "<div>CUSTOM HEADER GOES HERE</div>";

(function () {
	"use strict";
	'use strict';

	var app = angular.module('viewCustom', ['angularLoad']);
	
	app.component('prmTopBarBefore', {
		bindings: {parentCtrl: '<'},
		controller: function () {
			this.$onInit = function () {
				angular.element(document).ready(function(){
					var header_container = angular.element(document.getElementsByClassName('custom-header'));
					if(header_container.length == 0)
						add_custom_header(header_container);
				});
			};
		},
		template: ''
	});
	
})();

function add_custom_header(header_container)
{
	if(header_container.length == 0)
	{
		// move custom header to top of standard page
		var custom_header_html = '<div class="custom-header">'+custom_header_template+'</div>'
		var prm_explore_main = angular.element(document.querySelector('prm-explore-main'));
		if(prm_explore_main.length == 1)
		{
			prm_explore_main.after(custom_header_html);
			var header_container = angular.element(document.getElementsByClassName('custom-header'));
			angular.element(header_container).after(prm_explore_main);
		}
		
		// move custom header to top of full record page
		var prm_full_view_page = angular.element(document.querySelector('prm-full-view-page'));
		if(prm_full_view_page.length == 1)
		{
			prm_full_view_page.after(custom_header_html);
			var header_container = angular.element(document.getElementsByClassName('custom-header'));
			header_container.after(prm_full_view_page);
		}
	}
}