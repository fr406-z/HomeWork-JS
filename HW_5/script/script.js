// Задание №1

/*function calc(a, b, c){
    let z = (a - b) / c;
    console.log(c);
}

calc (28, 11 ,7);

// Задание №2

function calc1(a){
    let sqr = a * a;
    let cube = a * a * a;
    return console.log('Квадрат -' + sqr), console.log('Куб -' + cube);
}

calc1(7)

// Задание №3

function calc2(a, b) {
    min = (a < b)? a: b;
    max = (a > b)? a: b;
    return console.log ('Максимальное' + max), console.log ('Минимальное' + min)
}
calc2 (343, 1)


// Задание №4

let arr = [];
function getArray(a, b){
    for(let i =a; i <= b; i++){
        arr.push(i);
    }
    for (let i = a; i >= b; i--){
        arr.push(i);
    }
    return arr
}

getArray(23,87);

function writeArray(){
    console.log(arr)
}
writeArray()

// Задание №5

function isEven (a){
    if(a % 2 == 0){
        return true;
    }else{
        return false;
    }
}
isEven (3)
console.log(isEven(13));

// Задание №7

function box(a,b){
    let str= '';
    for (let i = 1; i <= a; i++){
        for(let z = 1; z <= i; z++){
            if(b === undefined){
                str += i;
            }else{
                str += b;
            }
        }
        console.log(str)
        str = '';
    }
}
box(9)

//-------zadanie 9

function fibonachi(n){

    if (n == 0 || n == 1){
        return n;
    }else {
        let a = fibonachi (n - 1) + fibonachi (n - 2)
        return a;
    }
    
}

function creatArray (){
    let arr = []
    for (let i=0;; i++){
        if (fibonachi(i) < 1000)
        arr.push (fibonachi (i))
        else return arr
    }
}

console.log (creatArray());

//-------zadanie 10

let number = 12345;
function getNumber(arg){
    arg = String(arg);
    let sum = 0;
    for (let i = 0; i < arg.length; i++){
        sum += +arg[i];
    }
   if (sum > 9) return getNumber(sum)
   else {
       return sum;
   }
}
console.log(getNumber(number))

//-------zadanie 11

let arr1 = [1, 2, 5, 6, false];

function printArray(array){
    if(array.length >= 1){
        document.write(array.shift());
        return printArray(array);
    }

}
printArray(arr1);*/

//-------zadanie 12

function info (firstname, lastname, middlename, number){
    let str = `*Домашняя работа: "Функция"` ,
        str1 = `* Выполнил: студент гр. ${number}` ,
        str2 = `${lastname} ${firstname} ${middlename} `,
        arr = [str,str1,str2],
        max = 0;

        for (let i = 0; i < arr.length; i++){
            max = (max < arr[i].length)? arr[i].length : max;
        }
        for (let i = 0; i < arr.length; i++){
            for (let j = 0; j < max; j++){
                if(arr[i].length < max){
                    arr[i] += '' 
                }else if (arr[i].length == max){
                    arr[i] += '*'
                }
            }}

        for (let i = 0; i <= max; i++){
            star +="*"
        }

        console.log(star);
        console.log(arr[0]);
        console.log(arr[1]);
        console.log(arr[2]);
        console.log(star);
     
    }

    info ('Иванов', 'Иван', 'Иванович', '041302')