
function WhoAmI(name, last,age){
  try{
    if(name === typeof('undefined') ||
      last === typeof('undefined') ||
      typeof(name) !== 'string' ||
      typeof(last) !== 'string' ||
      typeof(age) !== 'number')
      {
        
        throw new Error("Arguments not valid");
    }
    else{
      console.log(`Hi, my  name is ${name} ${last}`);
      console.log(yearOfBirth(age));
    }
  }catch(err){
    console.log(err.message);
  }



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
console.log("1");
WhoAmI("sdf","sdff", 20);
console.log("2");
WhoAmI("asdf",20, 20);
console.log("3");
WhoAmI(20,"d",20);
console.log("4");
WhoAmI("20","d","test");
