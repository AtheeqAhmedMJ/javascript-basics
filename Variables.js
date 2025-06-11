//Variables in JS
/* rules
Cannot use identifiers that JS already has, eg var, const, function
Should start with lower case letter
$,_ are allowed, no there specail characters are allowed */

let $name= "MJ";
console.log($name);

//let is used because we can easily reassign the value if we want, for eg
$name="Atheeq";
console.log($name);

//in const, we cannot change once a value is assigned to a variable
const pi=22/7;
console.log(pi);

pi=3.16;
console.log(pi);//error TypeError: Assignment to constant variable.
/* Output
MJ
Atheeq
3.142857142857143
ERROR!
/tmp/sm0lX8YBEc/main.js:18
pi=3.16; */
