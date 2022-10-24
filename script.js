// // Простая страница
// alert('Я Java cript!');
// let name = prompt('Как тебя зовут?');
// confirm(`тебя зовут ${name}?`);
// console.log('Я Java cript!');
// console.log(name);

// // Постфиксная и префиксная формы
// let a = 1,b = 1;
// let c = ++a; // выводит 1 + 1
// let d = b++; // выводит 1, а потом прибавляет 1
// console.log(c); // 2
// console.log(d); // 1

// // Присваивание
// a = 2;
// let x = 1 + (a *= 2); // 1 + (2 * 2)
// console.log(a); // 4
// console.log(x); // 5

// // преобразование типов
// alert("" + 1 + 0);
// console.log("" + 1 + 0);

// alert("" - 1 + 0);
// console.log("" - 1 + 0);

// alert(true + false);
// console.log(true + false);

// alert(6 / "3");
// console.log(6 / "3");

// alert("2" * "3");
// console.log("2" * "3");

// alert(4 + 5 + "px");
// console.log(4 + 5 + "px");

// alert("$" + 4 + 5);
// console.log("$" + 4 + 5);

// alert("4" - 2);
// console.log("4" - 2);

// alert("4px" - 2);
// console.log("4px" - 2);

// alert("  -9  " + 5);
// console.log("  -9  " + 5);

// alert("  -9  " - 5);
// console.log("  -9  " - 5);

// alert(null + 1);
// console.log(null + 1);

// alert(undefined + 1);
// console.log(undefined + 1);

// alert(" \t \n" - 2);
// console.log(" \t \n" - 2);

// // Исправьте Сложение

// let a = prompt('first numb',1);
// let b = prompt('second numb',2);

// alert(+a + +b);
// console.log(+a + +b);


////Работа с переменными

// // №1

// let num = 3;
// alert(num);

// // №2

// let a = 10;
// let b = 2;

// f = alert(+a + +b);
// s = alert(+a - +b);
// t = alert(+a / +b);
// fo = alert(+a * +b);
// console.log(f,s,t,fo)

// //  №3

// let c = 15;
// let d = 2;

// let result = (c + d);

// //  №4

// a = 10;
// b = 2;
// c = 5;

// alert(a + b + c);
// console.log(a + b + c);

// // №5

// a = 17;
// b = 10;

// c = a - b;
// d = 7;
// result = c + d;
// alert(result);
// console.log(result);

// // Работа со строками

// // №1

// let str ='hello world!';
// alert(str);
// console.log(str);
// // №2

// let str1 = 'hello';
// let str2 = ' world!';
// alert(str1 + str2);
// console.log(str1 + str2);
// // №3

// let name = 'Айрат';
// alert(`привет ${name}`);
// console.log(`привет ${name}`);
// // №4

// let age = 16;
// alert(`мне ${age} лет!`);
// console.log(`мне ${age} лет!`);
// // Функция Prompt

// // №1

// name = prompt("Введите ваше имя");
// alert(`Ваше имя ${name}`);
// // №2

// let numb = prompt('введи любое число');
// alert(+numb * +numb);
// // Обращение к символам строки
// // №1

// str = 'abcde';
// alert(str[0] + ' ' + str[2] + ' ' + str[4]);

// // Практика

// // №1 

// let hour = (`в часе ${60 * 60} секунд`);
// let day = (`в сутках ${(24 * 60) * 60} секунд`);
// let mesyac = (`в месяце ${30 * 24* 60 * 60} секунд`);
// alert(hour);
// alert(day);
// alert(mesyac);
// // №2

// hour = 13;
// let minuts = 16;
// let secund = 30;
// alert(hour + ':' + minuts + ':' + secund);
// // №3

// let sqrt = 10;
// alert(sqrt ** 2);
// Работа с присваиванием к декркментами
// №1

// var num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// alert(num);
// // №2

// var num = 10;
// num++;
// num++;
// num--;
// alert(num);