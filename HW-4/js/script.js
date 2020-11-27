// Задание №1

let arr = [1, 2, 3, 4, 5];
for (i = 0; i <= arr.length; i++) {
console.log([i]);
}

// Задание №2

let arr1 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]
for (i = 0; i < arr1.length; i++) {
    if (arr1[i] < 0 && arr1[i] < -3 && arr1[i] > -10);
    console.log (arr1[1]); 
}

// Задание №3

let start = 23,
    arr2 = [],
    result = 0;

for (start = 23; start >=23 && start <= 57; start++){
    arr2.push(start);
    result += start;
}  
console.log (arr2);
console.log (`${result}`)    

while (start >= 23 && start <=57){
    start++
    arr2.push(start);

}
console.log(arr2);


// Задание №4

let arr3 = ['10', '20', '30', '50', '235', '3000'];

for (i = 0; i < arr3.length; i++){
    let k = arr3[i];
    if (k[0] == 1 || k[0] == 2 || k[0] == 5){
        console.log(`${k}`);
    }else {
        console.log('Error');
    }
}

// Задание №5

let arr4 = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

for (i = 0; i < arr4.length; i++){
    let day = arr4[i];
    if (day == 'Сб' || day == 'Вс'){
        document.write(`<strong>${day}</strong>`)
    } else {
        console.log(day);
    }
}

// Задание №6

let arr5 = ['011223', '850104', '5510770', '26233','71203155'];
arr5.push('Стелс');
console.log(arr5.length);

// Задание №7

let arr6 = [];
while (true) {
    let a = prompt ('Введите число');
    arr6.push(a);
    if (a == '' || a == isNaN || a == ''){
        break;
    }
}
console.log(arr6);
console.log(arr6.sort());

// Задание №8

let arr7 = [ 12, false, 'text', 4, 2, -5, 0];
arr7.reverse;
console.log(arr7);


// Задание №9

// Задание №10

let arr8 = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];

let sum = 0,
    indexStart = 0,
    indexEnd = 0;

for (i = 0; i < arr.length; i++){
    let z = arr8[i];
    if (z == 0){
        indexStart = arr8.indexOf(z);
        indexEnd = arr8.lastIndexOf(z);
    
    }
}    

for (let g = indexStart; g <= indexEnd; g++){
    sum += arr8[g];
}

console.log ("Сумма"+sum);

// Задание №11

let height = 5

for (let i = 1; i <= height; i++){
     for(let k = 1; k <= height - i; k++){
         document.write('&ensp;');
     }   
     for (let j = 1; j<=2*i-1; j++){
         document.write('^');
     }document.write('<br>');
}