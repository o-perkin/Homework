'use strict';

let startbtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],       
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],      
    levelValue = document.getElementsByClassName('level-value')[0],      
    expensesValue = document.getElementsByClassName('expenses-value')[0],      
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],      
    incomeValue = document.getElementsByClassName('income-value')[0],      
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],      
	yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],
	
	expensesItem = document.getElementsByClassName('expenses-item'),
	btn0 = document.getElementsByTagName('button')[0],
	btn1 = document.getElementsByTagName('button')[1],
	btn2 = document.getElementsByTagName('button')[2],
	optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	chooseIncome = document.querySelector('.choose-income'),
	savingsItem = document.querySelector('#savings'),
	chooseSum = document.querySelector('.choose-sum'),
	choosePercent = document.querySelector('.choose-percent'),
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');
	
	btn0.disabled = true;
	btn1.disabled = true;
	btn2.disabled = true;
	
	
let  money, time;

startbtn.addEventListener('click', function(){
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
	money = +prompt('Ваш бюджет на месяц', '');
	

	while (isNaN(money) || money == '' || money == null) {
		money = +prompt('Ваш бюджет на месяц', '');
	} 

	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	yearValue.value = new Date (Date.parse(time)).getFullYear ();
	monthValue.value = new Date (Date.parse(time)).getMonth () +1;
	dayValue.value = new Date (Date.parse(time)).getDate ();
	btn0.disabled = false;
	btn1.disabled = false;
	btn2.disabled = false;
});

btn0.addEventListener('click', function() {

	let sum = 0;

	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value,
			b = expensesItem[++i].value;
			
		if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
			  && a != ' ' && b != '' && a.length < 50) {
			 console.log('done');
			appData.expenses[a] = b;
			sum  += +b;
		}	else {
		   i = i - 1;
		}
		
	}
	expensesValue.textContent = sum;
});

btn1.addEventListener('click', function() {
	for (let i = 0; i < optionalexpensesItem.length; i++){ 
		let opt = optionalexpensesItem[i].value;
		   appData.optionalExpenses[i] = opt;
		   optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
	   }
});



btn2.addEventListener('click', function(){

	if (appData.budget != undefined) {
		
		// for (let i = 0; i < appData.expensesItem.length; i++) {
		// 	let sum1 = 0;
		// 	let ab = appData.expenses[i];
		// 	sum1 += +ab;
		// }
		
	appData.moneyPerDay = (appData.budget / 30).toFixed();
	daybudgetValue.textContent = appData.moneyPerDay;
		

	if (appData.moneyPerDay < 100) {
		levelValue.textContent = 'Минимальный уровень достатка';
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		levelValue.textContent = 'Средний уровень достатка';
	} else if (appData.moneyPerDay > 2000) {
		levelValue.textContent = 'Высокий уровень достатка';
	} else {
		levelValue.textContent = 'Произошла ошибка';
	};
} else {
	daybudgetValue.textContent = 'Произошла ошибка';
}
});

chooseIncome.addEventListener('input', function(){
	let items = chooseIncome.value;
	appData.income = items.split(', ');
	incomeValue.textContent = items;
});

savingsItem.addEventListener('click', function() {
	if(appData.savings == true){
       appData.savings = false;
	} else {
		appData.savings = true;
	}
});

chooseSum.addEventListener('input', function(){
	if (appData.savings == true) {
	let sum = +chooseSum.value,
	    percent = +choosePercent.value;
	appData.monthInCome = sum/100/12*percent;
	appData.yearInCome = sum/100*percent;
	monthsavingsValue.textContent = appData.monthInCome.toFixed(1);
	yearsavingsValue.textContent = appData.yearInCome.toFixed(1);
	}
});

choosePercent.addEventListener('input', function(){
	if (appData.savings == true) {
		let sum = +chooseSum.value,
			percent = +choosePercent.value;
		appData.monthInCome = sum/100/12*percent;
		appData.yearInCome = sum/100*percent;
		monthsavingsValue.textContent = appData.monthInCome.toFixed(1);
		yearsavingsValue.textContent = appData.yearInCome.toFixed(1);
	}
});

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};






