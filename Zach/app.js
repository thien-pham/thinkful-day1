
function WhoAmI(name, last,age){
  if(
    typeof(name) !== 'string' ||
    typeof(last) !== 'string' ||
    typeof(age) !== 'number')
    {
      throw new Error("Arguments not valid, format is string, string, number.");
  }
  else{
    console.log(`Hi, my  name is ${name} ${last}`);
    console.log(yearOfBirth(age));
  }
}

function yearOfBirth(age){

    if(age<0){
      throw new Error("Nums can't be negative.  Try again!");
    }else{
        return 2017 - age;
    }


}

//Test 1
try{
  console.log("1");
  WhoAmI("sdf","sdff", -20);
}catch(err){
  console.log(err.message);
}

//test 2
try{
  console.log("2");
  WhoAmI("asdf",20, 20);
}catch(err){
  console.log(err.message);
}
