// Задание №1
let name = prompt("Ваше имя"), 
    age = prompt ("Ваш возраст"), 
    city = prompt ("Ваш город проживания"), 
    company = prompt ("Ваше место работы"),
    phone = prompt ("Ваш телефон"), 
    email = prompt ("Ваш e-mail");


document.write (`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.`);

// Задание №2
document.write ( name + " родился в " + (2020-Number(age)) + " году.");


// Задание №3
console.log ('--------------------------')
let n = "123456";
  sum1 = + n[0] + + n[1] + + n[2];
  sum2 = + n[3] + + n[4] + + n[5];
if (sum1 === sum2) { 
    console.log(sum1, "Да, сумма одинаковая");
}
    else { 
    console.log(sum2, "Нет, сумма разная");
}


// Задание №4
console.log ('--------------------------')
var a = -3;
if (a > 0) {
    console.log ("Верно");
}
    else {
    console.log ("Неверно");
    }


// Задание №5
console.log ('--------------------------')
var a=10,
    b=2;
sum = a+b;
dif = a-b;
proiz = a*b;
qout = a/b;

if (sum > 1) {
    console.log (`Сумма ${sum*sum}. Разность: ${dif}. Произведение: ${proiz}. Частное: ${qout}`);
}
    
 else if (sum < 1) { 
        console.log (`Сумма ${sum*sum}. Разность: ${dif}. Произведение: ${proiz}. Частное: ${qout}`);
    }
   
    


// Задание №6
console.log ('--------------------------')
if (a > 2 && a < 11 || b >= 6 && b < 14) {
    console.log ("Верно")}
    else { console.log ("Неверно");
} 


// Задание №7
console.log ('--------------------------')
let z = 28;
    if (z >= 0 && z < 16) {
    console.log ("I  четверть часа");
}

    else if (z >= 16 && z < 31) {
    console.log ("II четверть часа");
}

    else if (z >= 31 && z < 46) {
    console.log ("III четверть часа");
}

    else if (z >= 46 && z < 60) {
    console.log ("IV четверть часа");
}
    


// Задание №8
console.log ('--------------------------')
let day = 18;
    if (day <= 11) {
        console.log ("I декада месяца")
    }
    else if (day <= 21) {
        console.log ("II декада месяца")
    }
    else if (day <= 31) {
        console.log ("III декада месяца")
    }
    else if (day < 31) {
        console.log ("Error");
    }

  
  

// Задание №9
console.log ('--------------------------')

let years =  day / 365,
    monthes = day / 31,
    weeks = day / 7,
    hours = day * 24,
    mins = hours * 60,
    sec = mins *60;

if (years < 1){
    console.log ('Меньше года');
}    
else {
    console.log (years + "года");
}

if (monthes < 1){
    console.log ('Меньше месяца');
}    
else {
    console.log (monthes + "меясц");
}

if (weeks < 1){
    console.log ('Меньше недели');
}    
else {
    console.log (weeks + "недель");
}
console.log (hours + "часов", mins + "минут", sec + "секунд");
