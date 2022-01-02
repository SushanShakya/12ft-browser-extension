chrome.browserAction.onClicked.addListener(() => {
	chrome.tabs.query(
		{ currentWindow: true, active: true },
		function (tab) {
			chrome.tabs.update({
				url: `https://12ft.io/${tab[0].url}`,
			});
		}
	);
});
