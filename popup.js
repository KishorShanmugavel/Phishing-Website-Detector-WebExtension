chrome.tabs.getSelected(null, function (tab) {
	var x = document.getElementById("loading-screen");
	var y = document.getElementById("result");
	x.style.display = "block";
	y.style.display = "none";
	var flag = 0;
	var urls = ['https://mail.google.com/mail/u/0/#inbox','chrome://extensions/','chrome://newtab/','brave://extensions/','brave://newtab/','https://accounts.simplilearn.com/user/login?redirect_url=https%3A%2F%2Flms.simplilearn.com%2F', 'https://zoom.us/', 'https://outlook.live.com/owa/', 'https://yandex.ru/', 'mail.google.com/mail/u/0/#inbox', 'https://acoe.annauniv.edu/sems/login/student', 'https://web.whatsapp.com/', 'web.whatsapp.com/']
	var tablink = tab.url;
	$("#url").text(tablink);
	if (urls.includes(tablink)) {
		setTimeout(() => {
			x.style.display = "none";
			y.style.display = "block";
		}, 5000);
		$("#result").html("SECURE");
		flag = 1;
	}

	if (flag == 0) {
		$.post('http://localhost/Phishing-Detection/clientserver.php', {
				url: tablink
			},
			function (data) {
				x.style.display = "none";
				y.style.display = "block";
				$("#result").html(data);
				// if (data == "NOT SECURE") {
				// 	window.location.href = 'alert.html';
				// }
			});
	}
});