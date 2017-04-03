function jediName (firstName, lastName) {
	let jediFirst = lastName.substring(0, 3);
	let jediLast = firstName.substring(0, 2);
	return jediFirst + jediLast;
}

jediName('Beyonce', 'Knowles');

function beyond(num) {
	if (!isFinite(num)) {
		console.log('And beyond');
	}
	else if (num > 0) {
		console.log('To infinity');
	}
	else if (num < 0) {
		console.log('To negative infinity');
	}
	else {
		console.log('Staying home');
	}
}

beyond(100);
beyond(-100);
beyond(Infinity);
beyond(0);

function decode(word) {
	let firstLetter = word.charAt(0);
	if (firstLetter === 'a') {
		return word.charAt(1);
	}
	else if (firstLetter === 'b') {
		return word.charAt(2);
	}
	else if (firstLetter === 'c') {
		return word.charAt(3);
	}
	else if (firstLetter === 'd') {
		return word.charAt(4);
	}
	else {
		return ' ';
	}
} 

function parseSentence(sentence) {
	sentence = sentence.split(' ');
	let result = '';
	for (var i = 0; i < sentence.length; i++) {
		result += decode(sentence[i]);
	}
	return result;
}

function daysInMonth(month) {
	switch (month)
	{
		case 'January':
		case 'March':
		case 'May':
		case 'July':
		case 'August':
		case 'October':
		case 'December':
		return `${month} has 31 days`;
		break;
		case 'February':
		return 'February has 28 days';
		break;
		case 'April':
		case 'June':
		case 'September':
		case 'November':
		return `${month} has 30 days`;
		break;
	}
}



function RockPaperScissors(userChoice){
	// 1 is rock, 2 is paper, 3 is scissors
	var computer = 1 + Math.floor((Math.random()*3));
	if (userChoice === computer) {
		return "It's a tie!";
	}
	else if ((userChoice===1 && computer===3) || 
		     (userChoice===3 && computer===2) ||
		     (userChoice===2 && computer===1)) {
		return "Player wins!";
	}
	else {
		return "Computer wins.";
	}s
}

RockPaperScissors(2);

function repeatStr(num, sentence) {
	let result = '';
	if (isNaN(num) || num < 1) {
		throw new Error('Not a good number');
	}
	for (let i=0; i<num; i++) {
		result += sentence + '\n';
	}
	return result;
}

try {
    repeatStr(-32, 'not a good number');
    repeatStr(5, 'a valid number');
} 
catch(e) {
	console.log(e.message);
}
