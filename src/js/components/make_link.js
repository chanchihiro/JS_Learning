window.onload = function() {
	console.log("始まり");
	//タイトルの取得
	let title = document.querySelector('h1');
	let titletext = title.textContent;
	console.log(titletext);

	//urlを取得
	let url = window.location.href;
	console.log(url);

	//表示部分の作成
	var all = document.createElement('div');
	all.innerHTML = '<textarea color="red">' + '<a href="' + url + '">' + titletext + '</a>' + '</textarea>';
	all.style.fontSize = '30px';
	all.style.color = '#000';
	all.style.zIndex = '1000';
	all.style.width = '100%';
	all.style.height = '100%';
	all.style.backgroundColor = 'rgba(0,0,0,0.9)';
	all.style.position = 'fixed';
	let insert = [];
	insert = document.getElementsByTagName('div');
	document.body.insertBefore(all, insert[0]);
};