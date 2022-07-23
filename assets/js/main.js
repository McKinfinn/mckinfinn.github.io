$(document).ready(function() {
	$.ajax({
		url: 'https://api.github.com/users/mckinfinn'
	}).done(function(data) {
		$('#avatar').attr('src', data.avatar_url);
		$('#username').text(data.login);
		$('#name').text(data.name);
		$('#location').text(data.location);
		$('#followers').text(data.followers);
		$('#following').text(data.following);
		$('#repositories').text(data.public_repos);
	});
});