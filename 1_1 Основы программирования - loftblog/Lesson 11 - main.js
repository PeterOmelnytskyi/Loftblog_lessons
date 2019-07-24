//присвоение кнопок переменным
var numbers = document.querySelectorAll('.number'),
	operations = document.querySelectorAll('.operation'),
	decimalBtn = document.getElementById('decimal'),
	clearBtns = document.querySelectorAll('.clear_btn'),
	result = document.getElementById('result'),
	nowWorkBtn = document.getElementById('nowWorkBtn'),
	display = document.getElementById('display'),
	MemoryCurrentNumber = 0,
	MemoryNewNumber = false, //новая переменная чтобы определять два разных числа
	MemoryPendingOperation = ''; //сохранение значения последней операции
	operationsList = document.getElementById('operationsList')


//повесим работчики событий на данные кнопки,
// чтобы запускать соответствующую функцию когда
// на одну из кнопок было совершено нажатие

for (var i = 0; i<numbers.length,i++) {
	var number = numbers[i];
	number.addEventListener('click', function (e) {
		numberPress(e.target.textContent);
});
};


for (var i = 0; i<operations.length,i++) {
	var operationBtn = operations[i];
	operationBtn.addEventListener('click', function(e) {
		console.log(e.target.textContent);
		operation();
	});
};


for (var i = 0; i<clearBtns.length,i++) {
	var clearBtn = clearBtns[i];
	clearBtn.addEventListener('click', function(e) {
		clear(e.srcElement.id);
	});
};


decimalBtn.addEventListener('click', decimal);

resultBtn.addEventListener('click', result);

howWorkBtn.addEventListener('click', howWork);


function numberPress(number) {
	if (MemoryNewNumber) {
		display.value = number;
		MemoryNewNumber = false;
	} else {
		if (display.value === '0') {
			display.value = number;
		} else {
			display.value += number; //+= - значит складывать в виде строки значения
		};
	};
};


function operation(op) {
	var localOperationMemory = display.value;

	if (memoryNewNumber && MemoryPendingOperation !== '=') {
		display.value = MemoryCurrentNumber;
	} else {
		MemoryNewNumber = true;
		if (MemoryPendingOperation === '+') {
			MemoryCurrentNumber += parseFloat(localOperationMemory);
		} else if (MemoryPendingOperation === '-') {
			MemoryCurrentNumber -= parseFloat(localOperationMemory);
		} else if (MemoryPendingOperation === '*') {
			MemoryCurrentNumber *= parseFloat(localOperationMemory);
		} else if (MemoryPendingOperation === '/') {
			MemoryCurrentNumber /= parseFloat(localOperationMemory);
		} else {
			MemoryCurrentNumber = parseFloat(ocalOperationMemory);
		};

		display.value = MemoryCurrentNumber;

	}
};

function decimal(argument) {
	var localDecimalMemory = display.value;

	if (MemoryNewNumber) {
		localDecimalMemory = '0.';
		MemoryNewNumber = false;
	} else {
		if (localDecimalMemory.indexOf('.') === -1) {
			localDecimalMemory += '.';
		}
	};

display.value = localDecimalMemory;

};


function clear(id) {
	if (id === 'ce') {
		display.value = '0';
		MemoryNewNumber = true;
	} else if (id === 'c') {
		display.value = '0';
		MemoryNewNumber = true;
		MemoryCurrentNumber = 0;
		MemoryPendingOperation = '';
	}

console.log('Клик по кнопке ' + id + '!');

};


function howWork(argument) {
	for (var i=0; i<operations.length; i++) {
		var newLi = document.createElement('li');
		var operationText = operations[i].value;
		newLi.innerText = operationText;
		operationsList.appendChild(newLi);
	};

console.log('Клик по кнопке как это работает!');
};
