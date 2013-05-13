define(function(){
	'use strict';

	function render(o){
		var appDiv = document.getElementById('app');
		var users = o.users;
		var html = '<ul>';

		for (var i = 0, len = users.length; i < len; i++) {
			html += '<li>'+ users[i].name +'</li>';
		}

		html += '</ul>';
		appDiv.innerHTML = html;
	}

	return {
		render: render
	};
});