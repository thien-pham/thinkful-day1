
function WhoAmI(name, last,age){
  console.log(`Hi, my  name is ${name} ${last}`);

  console.log(yearOfBirth(12));
}

function yearOfBirth(age){
  return 2017 - age;
}

WhoAmI("George", "Orwell", 100);
