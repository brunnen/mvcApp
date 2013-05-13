define(['Views/ListView'], function(ListView){
	'use strict';

	function start(){
		var users = JSON.parse(localStorage.users);
		ListView.render({users: users});
	}

	return {
		start: start
	};
});