import $ from 'jquery';
import make from './components/make_link.js'


console.log('start'); //スタート

//promiseです
let puts = (str) => {
	//promiseオブジェクトを作って返す
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(str);
		},10);
	});
};
puts('うんち').then((result) => {
	console.log(result);
});
//promiseの終わり

//なんとなくJavascriptを書いていた人が一歩先に進む本
let Member = function(firstname,lastname,age) {
	this.firstname = firstname;
	this.lastname = lastname;
	this.age = age;
	this.getInfo = () => {
		return this.firstname + this.lastname + '年齢' + this.age; 
	}
};

let igarashi = new Member('五十嵐', 'チヒロ', 21);
let taguchi = new Member('aa', 'bb', 21);
console.log(igarashi.getInfo());
console.log(taguchi.getInfo());



console.log("end"); //終わり