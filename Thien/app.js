function jediName (firstName, lastName) {
	let jediFirst = lastName.substring(0, 3);
	let jediLast = firstName.substring(0, 2);
	return jediFirst + jediLast;
}

jediName('Beyonce', 'Knowles');