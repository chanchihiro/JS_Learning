import $ from 'jquery';


console.log('start'); //スタート

//promiseです
let puts = (str) => {
	//promiseオブジェクトを作って返す
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(str);
		},1000);
	});
};
puts('うんち').then((result) => {
	console.log(result);
});
//promiseの終わり




console.log("end"); //終わり