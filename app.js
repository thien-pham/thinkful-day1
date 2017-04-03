
function WhoAmI(name, last,age){
  console.log(`Hi, my  name is ${name} ${last}`);
  console.log(yearOfBirth(age));
}



function yearOfBirth(age){
  try{
    if(age<0){
      throw new Error("Nums can't be negative.  Try again!");
    }
  }catch(err){
    //console.log(`"the error is... ${e} `)
    console.log(err.message);
  }
  return 2017 - age;
}

WhoAmI("George", "Orwell", -100);
