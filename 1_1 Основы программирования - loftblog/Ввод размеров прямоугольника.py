M = …
lev = 0; prav = n #Обратим внимание на то,
#что инструкции записаны в одну строку
#Повторение действий
while prav – lev > 1:
#Определяем середину интервала поиска
sered = (lev + prav)//2
#Сравниваем М со значением в середине интервала
if М < a[sered]:
#Меняем правую границу интервала
prav = sered
else:
#Меняем левую границу
lev = sered
#Проверяем
if a[lev] == М:
print('Такое значение в списке есть. Его индекс:', lev)
else:
print('Такого значения в списке нет')
