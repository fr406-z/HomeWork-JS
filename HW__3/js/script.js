// Задание №1
console.log('-------------------')

let a = 1;
while (a <=50){
    console.log(a);
    a++;
}

let b = 35;
while (b >= 8){
    console.log(b);
    b--;
}

// Задание №2
console.log('-------------------')

let c = 89;
while (c >=11){
    document.write (c, '<br>');
    c--;
}

// Задание №3
console.log('-------------------')

let sum = 0;
    for (let i = 0; i <= 100; i++){
        sum += i;
        console.log(sum);  
    }
  

// Задание №4
console.log('-------------------')
 let sum_1 = 0;
    for(let i=1; i <= 5; i++){
        sum_1 += i;
        console.log(sum_1);  
    }

    // Задание №5
console.log('-------------------')
  a = 28;
  while (a <= 56){
      a++;
      if (a%2 == 0)(
      console.log(a)
      )
  }

  console.log('-------------------')
  for (a=17; a<=56; a++){
      if (a%2 == 0)(
          console.log(a)
      )
  }

  // Задание №6
  console.log('-------------------')

c=10;
for (let a =2; a<=c; a++) {
    sum = 0;
    console.log (`${a}`);
    for (let b=1; b<=c; b++){
        sum = a*b;
        console.log (`${a}*${b} = ${sum}`);
    }
}


// Задание №7
console.log('-------------------')

let count = 0;
let n = 1000;
for (; n > 50; n=n/2){
    count++;
}

console.log(`Результат деления: ${n}`);
console.log(`Результат итерации: ${count}`);

// Задание №8
console.log('-------------------')

let summ = 0,
    coount = 0,
    avg = 0;


while (true){
    let value = prompt ('Введите число');
    if (value == 0 || value == ''){
        break;
    }else if (!+value){
        console.log("Ошибка!!!");
        break;
    }else{
        count++;
        summ += +value;
        console.log(`сумма на шаге ${coount} = ${summ}`)
    }



}
avg = summ / count;
console.log (`Итог ${summ} и среднне ${avg}`);

// Задание №9
console.log('-------------------')

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57',
    number='',
    max,
    min,
    countt = 0;

for (let i = 0 ;; i++ ){
   if(str[i] !='' && str[i] != undefined){
   number += str[i];
}else {
console.log (number);
if (countt == 0){
    max = +number;
    min = +number;
}

countt++;

max = (max < +number) ? +number : max;
min = (min > +number) ? +number : min;

number='';}

 if(str[i] == undefined)break;
}

console.log(max);
console.log(min);