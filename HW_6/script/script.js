// Задание №1

let str = 'aaa@bbb@ccc';
console.log(str.replace(/@/gi,'!'));

// Задание №2

let date = '2025-12-31';
let a = date.replace (/[-]/g, '/')
let b = a.replace(/(2025)(12)(31)/, '$3$2$1')
console.log (a.replace(/(2025)(\/)(12)(\/)(31)/,'$5/$3/$1'))

// Задание №3

let str1 = 'Я учу javascript!';
console.log(str1.substring(2,16));
console.log(str1.slice(2,16));
console.log(str1.substr(2,16));

// Задание №4

let str2 = [4, 2, 5, 19, 13, 0, 10],
    sum = 0;
for (i = 0; i < str2.length; i++){
    sum += Math.pow(str2[i], 3);
}
console.log (`Сумма кубов элементов ${sum}`);
console.log (Math.sqrt(sum));

// Задание №5
function value(a,b){
    let c = a - b;
    return Math.abs(c);
}
console.log(value(6,1));
console.log(value(3,5));

// Задание №6

let alldata = new Date();
function dateneed(n){
    if(n > 0 && n < 10){
        return '0' + n; 
    }else return n;

}
console.log(`${alldata.getHours()}:${alldata.getMinutes()}:${alldata.getSeconds()} ${dateneed(alldata.getDate())}.${dateneed(alldata.getMonth()+1)}.${alldata.getFullYear()} `);


// Задание №7

let str3 = 'aa aba abba abbba abca abea';
console.log(str3.match(/ab+a/gi));

// Задание №8

function check(number){
    if (/^[+]\d{3}\s?-?\(?\d{2}\)?\s?-?\d{3}\s?-?\d{2}\s?-?d{2}$/){
        return true
    }else {
        return false
    }
}
console.log(check('+375 29 264 55 70'))

// Задание №10

function urlPars(url){
    let arr5 =  [];
        regexp = /(https?:\/\/[\w.-]*)(\/.*\/)?(\?[a-z_=&0-9]*)?(#.*\/?)?/;
        
        let newUrl = url.match(regexp);
        for (let i = 1 ; i < newUrl.length ; i++){
            arr5.push(newUrl[i]);
        }
        
    return arr5

}

console.log(urlPars('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_title&utm_medium=smartdo200#zag3'))