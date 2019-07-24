Пример 2
var age = 15;
if (age == 15) {
     console.log ("Да, тебе уже 15!");               
};

var age = 15;
if (age >= 18) {
     console.log ("Достигнут возраст совершеннолетия");
} else {
     console.log ('Ещё нет восемнадцати');
};

var age = 15;
if (age<16) {
     console.log ('Скорее всего вы учитесь в школе');
} else if (age>18) {
     console.log ('Скорее всего вы - студент универа ');
} else {
     console.log ('Скорее всего вы - студент колледжа, ил учитесь в школе');
};

var age = 15;
switch (age)  {
     case 18:
          console.log ('Ты недавно стал совершеннолетним!');
          break;
     case 17:
          console.log ('Воу, да тебе скоро 18!');
          break;
     case 16:
          console.log ('Вали в колледж! Нефиг в школе делать!');
};

a = "Python не учу"
If ( (a == 'Python не учу') or (a == 'python не учу') or (a == 'пайтон не учу') or (a == 'Пайтон не учу')  ) :
     print ('Ну и не надо')
elif (a == 'Учу питона') :
     print ("Молодец")
else :
     print ('Учи js')?

Пример 2 (неработает!!!!)
var n=prompt('Отгадайте число от 0 до 99, проверьте свою интуицию!');
if (n==7) {
  console.log('У вас замечательная интуиция, 7 - счастливое число, желаю вам удачи!');
} else if(0<=n<7) {
  console.log('Вам чего-то не хватает!Желаем вам удачи!');
} else if(7<n<13) {
  console.log('Сбавьте обороты, юный экстрасенс!');
} else if(n==13) {
  console.log('Неудачное число, вы не угадали;(');
} else if(13<n<=99) {
  console.log('Мимо!');
} else if(99<n) {
  console.log('Кажется вы еще не прошли даже буквы, а хотя вы все равно не поймете!');
} else if(n<0) {
  console.log('Кажется вы еще не прошли даже буквы, а хотя вы все равно не поймете!');
} else {
  console.log('Вы уникум!')
};

Пример 3
var growth = 170;

if (growth == 195) {
    alert ("Вы очень высокий");
} else if (growth == 180) {
    alert ("Ещё немного и вы будите очень высоким! ");
} else if (growth <= 170) {
    alert("Ваш рост-средний");
} else {
    alert("Какой у вас рост?");
}

С swith

var growth = 120;
   switch(growth) {
        case 190:
          alert("Вы высокий!");
   break;
       case 180:
          alert ("Ещё немного и вы будите очень высоким! ");
   break;
      case 170:
         alert("Ваш рост-средний");
   break;
     case  120:
       alert("Вы маленький");
   break;
 default:
      alert("Какой у вас рост?);
}?

Пример 4
var weight = 85;

if (weight != 100){
 console.log("У вас ожирение") };
else {console.log (" У вас нормальный вес") }?

Пример 5
var value = 11
switch(value){
  case 10:
    console.log('верно');
  break;
  case 11:
    console.log('Сумма была 11 ,ответ....ВЕРНЫЙ');
  break;
  case 12:
    console.log('да Сумма ровна 12');
  break;
  default:
    console.log('нет это слишком дорого!');
    
}?

Пример 6
Beer = 10
if (Beer == 5) :
 print('Maaan! You\'re ok!')
elif (Beer == 4) :
 print('Bro! Drink one more Beer!')
elif (Beer == 3) :
 print('Drink two more Beers, Homie!')
elif (Beer <= 2) :
 print('Dude! You drink like a girl!')
elif (Beer >= 6) :
 print('You drunk, buddy! But it\'s better than be sober!')?

Пример 7
var sum = 58;
if (sum <= 45){
  console.log ("Is it cheap");
} 
else if (sum == 45){
  console.log ("Is it expensive");
} else if (sum > 45){
  console.log ("Is it very expensive");
};?

Пример 8
var year=2018;
if(year != 2018){
  console.log('Меньше пей')
}else
  console.log('Красава');
console.log ('Андрюха !!');?

Пример 9
var JoJO = 3
if(JoJO == 1){
  console.log("Johnatan Joster")
} else if (JoJO === 0){
  console.log("Anti Rjomba Pobedula_P.S Anti Rjomber")
} else if (JoJO == 2){
  console.log("Jotaro Joster")
} else if (JoJO !==2 || JoJO == 6){
  console.log("НЕМЕЦКАЯ РЖОМБА ЛУЧШАЯ В МИРЕ")
}
console.log("СКРЫТЫЙ ПУЛ СУЩЕСТВУЕТ!!! P.S Сука Папич был прав")?

Пример 10
weight = 70
if (weight <=70) :
    print("Поздравляю! У вас нормальный вес.")
else :
    print("Ой!Ой! Похоже у вас проблемы с весом!")?

Пример 11
growth = 200
if(growth == 180):
 print("Будешь под кольцом!")
elif(growth == 188):
 print("Будешь центровым!")
elif(growth == 190):
 print("Будешь разводящий!")
elif(growth == 200):
 print("Будешь Атакующий!")
elif(growth == 185):
 print("Будешь защитником")
else:
 print("Будешь запасной!")?

Пример 12
city = 'Gdansk'
if (city == 'Gdansk') : 
 print('Дааа, море!!!')
elif (city == 'Gdynia') : 
 print('Дааа, море!!!')
elif (city == 'Sopot') : 
 print('Дааа, море!!!')
elif (city == 'Grodno') : 
 print('Домоооой!')
else : 
 print ('В другой раз :(')?

Пример 13
var  weight = 67;

if (weight != 100 ) {
  console.log("Иди качайся,парень!")
  
} else { 
 console.log('А у кого то сало свисает:D');
};?

Пример 14
age = 18
height = 175
if (age < 18 and height < 175): print('Малолетки-карлики нам не нужны')
elif (age > 18 and height > 175):
 print('Пошел нахер, старпер-переросток')
elif (age == 18 and height == 175):
 print('Вы идеально подходите в нашу компанию') 

else : print('Вы потерялись? Это компания "Наштампованные"!')

Пример 15
time = 800
if (time == 800):
    print("it's ok")
elif (time == 810):
       print("still ok")
elif (time == 830):
       print("hurry up, budddy")
elif (time == 840):
       print("IT'S TIME TO GO!")
elif (time >= 900):
       print("oops, ur late")

Пример 16
var sss=2048;
if(sss==2048){
  console.log('да,это правильно!')
} else if (sss<2048){
  console.log('ты че вздурел?')
} else if (sss==2){
  console.log('почти...')
} else {
  console.log('ты конченный идиот...')
}?

Пример 17
value = 18
if(value== 14):
 print("Ты получаешь паспорт!")
elif (value==16):
 print("Ты становишся ответственней!")
elif (value==18):
 print("Ты уже не малыш!")
else:
 print("Ты еще маловат!")?

Пример 18
price = 350
if (price == 350):
 print("You can buy flowers!")
elif(price == 400):
 print("You can buy candies!")
elif(price == 450):
 print("You can buy chocolate!")
elif(price >= 500):
 print("You can buy drinks!")
else:
 print("Sorry! We don't have anything with this price")?

Пример 19
Мини калькулятор

a = int(input('Введите первое число: '))
b = int(input('Введите второе число: '))
znak = input('Введите математическую операцию: ')

def summa(a, b):
 s = a + b
 return s

def minus(a, b):
 s = a - b
 return s

def delenie(a, b):
 if a or b == 0:
  print('Ошибка! Деление на ноль.')
 else:
  s = a / b
 return s

def umnozenie(a, b):
 s = a * b
 return s

if znak == '+':
 print(summa(a, b))
elif znak == '-':
 print(minus(a, b))
elif znak == '/':
 print(delenie(a, b))
elif znak == '*':
 print(umnozenie(a, b))
else: print('Ошибка операции')?

Пример 20
food = 3kg
if (food == 3kg) : print("Молодец, удержался!")
elif (food==2 kg) : print("Хоть чуть-чуть сдержался!В угл!")
elif(food==1kg) : print("Не хорошо!Наказан!")
elif(food==0kg) : print("А что мы есть будем?Наказан!")?

Пример 21
C++ (может кому-то интересно)

#include"stdafx.h"
#include <iostream>

using namespace std;


int main() {

 setlocale(LC_ALL, "rus");

 int grade; // оценка за урок
 cin >> grade;
 switch (grade) {
     case 1: {
     cout << "Очень плохо!\n";
  break;
    }
           case 2: {
  cout << "Очень плохо!\n";
  break;
    }
    case 3: {
   cout << "Очень плохо!\n";
  break;
    }
    case 4: {
  cout << "Очень плохо!\n";
  break;
    }
    case 5: {
  cout << "Удовлетворительно\n";
  break;
    }
    case 6: {
  cout << "Удовлетворительно\n";
  break;
    }
    case 7: {
  cout << "Удовлетворительно\n";
  break;
    }
    case 8: {
  cout << "Удовлетворительно\n";
  break;
    }
    case 9: {
  cout << "Хорошо\n";
  break;
    }
    case 10: {
      cout << "Хорошо\n";
  break;
    }
    case 11: {
  cout << "Отлично!\n";
  break;
    }
    case 12: {
  cout << "Отлично!\n";
  break;
    }
    default: {
  cout << "Введено некорректное число\n";
  break; //можно не писать, ведь дальше в ветке switch ничего нет.
    }
        }
 system("pause");
 return 0;
}?

Пример 22
var amount = 100;
if(amount == 50){
  console.log("Right! You win refregerator!")
} else if (amount == 45){
  console.log("Exallent! You win mixer!")
} else if (amount <= 40){
  console.log("Nice! You win spoon!")
} else{
  console.log("I think you lose!")
}?

Пример 23
var age = 20
if(year == 20) {
console.log('Вам Уже стукнуло 20");
} else if (year == 21) {
console.log('Не заглядывайте в будущие'); }
else if (year == 19) {
console.log ('Вы уже прожили это!'); }
else (year == 124); {
console.log("Некорректный возраст"); } 
var age = 20 ;
switch (age) {
case 20
  console.log("Вам уже стукнуло 20");
break;
case 19
  console.log("ВЫ уже прожили этот возраст");
break;
case 21
 сonsole.log("Вы не заглядывайте в будущие");
break;
default:
 console.log("WTF") };
JAVA SCRIPT?

Пример 24
2 кода с примерами оценок)

1.
mark = 2
if (mark==5) :
 print("Uhuuu! 5 it's great mark!")
elif(mark==4) :
 print("Good, very good!")
elif(mark==3) :
    print("Can be better!")
elif(mark==2) :
 print("Bad mark, it's very sadly:(")

2.
mark = 2
if(mark>2) :
 print("You passed!!")
else:
 print("You didn't pass:(")?

Пример 25
value = 100
if (value > 100):
    print('More!')  
elif (value < 100):
    print('Less!')
else :
    print('Equal!')?

Пример 26
print("Сколько должен кушать кот?")
print("Всё зависит от возраста и веса кота.")
cat_weight=3
cat_age=2
print("Вариант 1. Возраст:",cat_age,"год. Вес:",cat_weight,"кг.")
if(cat_weight<1,cat_age<1):#ПОЧЕМУ СРАБАТЫВАЕТ ЭТО УСЛОВИЕ?
 print("40 грамм")
elif((1<=cat_weight),(cat_age<1)):
 print(cat_weight*25)
elif((1<=cat_weight),(cat_age>=1)):
 print(cat_weight*20)
else:
 print("Ooops, something went wrong.")

Пример 27
Спектр видимого излучения, 
Диапазон длин волн, нм

value = 500

if (value < 400):
 print('Outside the violet')
elif (400<= value < 450):
 print('purple')
elif (450<= value < 480):
 print('blue')
elif (480<= value < 510):
 print('Blue-green')
elif (510<= value < 550):
 print('green')
elif (550<= value < 570):
 print('Yellow-reen')
elif (570<= value < 590):
 print('Yellow')
elif (590<= value < 630):
 print('Orange')
elif (630<= value < 760):
 print('Red')
else:
 print('Outside the Red')?

Пример 28
yearsme = 7
if (yearsme == 7) :
    print("Go to school, baby!!!")
elif (yearsme == 15) :
    print("Yoy can see the fireworks!")
else :
    print("You are for everything!!!")?

Пример 29
