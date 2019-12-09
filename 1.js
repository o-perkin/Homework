let  money, time;

function start () {
    money = +prompt('Ваш бюджет на месяц', '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while (isNaN(money) || money == '' || money == null) {
		money = +prompt('Ваш бюджет на месяц', '');
	} 
}

start ();


let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true, 
	chooseExpenses: function () {
		for (let i = 0; i < 2; i++) {
			let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
				b = prompt('Во сколько обойдется', '');
				
			if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
				  && a != '' && b != '' && length < 50)  {
				 console.log('done');
				appData.expenses[a] = b;
			}	else {
			   alert('Некоректно вказані дані, спробуйте ще раз');
			   i--;
			}
			
		}; 
	},
	detectDayBudget: function () {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		alert('Ежедневный бюджет ' + appData.moneyPerDay);
	}, 
    detectLevel: function () {
		if (appData.moneyPerDay < 100) {
			console.log('Минимальный уровень достатка');
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			 console.log('Средний уровень достатка');
		} else if (appData.moneyPerDay > 2000) {
			console.log('Высокий уровень достатка');	 
		} else {
			console.log('Произошла ошибка');
		};
	}, 
	checkSavings: function () {
		if (appData.savings == true) {
			let save = +prompt('Какова сумма наколпений?'),
				percent = +prompt('Под какой процент?');
				
				appData.monthInCome = save/100/12*percent;
				alert('Доход в месяц с вашего депозита: ' + appData.monthInCome);
		}
	}, 
	chooseOptExpenses: function () {
		for (let i = 1; i < 4; i++){ 
			let c = prompt('Статья необязательных расходов?');
			   appData.optionalExpenses[i] = c;
		   }
	},
	chooseIncome: function () {
		let items = prompt('Что принесет дополнительный доход? (Перечислете через запятую)', '');
		
		if ( (typeof(items)) != 'string' || (typeof(items)) == null || items == '') {
			appData.chooseIncome ();			
		} else {
			appData.income = items.split(', ');
		    appData.income.push(prompt('Может что-то ещё?'));
		    appData.income.sort();
		}

		appData.income.forEach(function(itemmassive, i) {
			alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
		});
	} 
};

for(let key in appData) {
	console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}





