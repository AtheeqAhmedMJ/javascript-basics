//Non premitive datatypes, objects-(store key valued pair, also known as building blocks of js)
let person ={
    name: "MJ",
    age: 19,
}
console.log(person);
console.log(typeof(person));
console.log(person.name); //dot notation
console.log(typeof(person.name));

// Arrays, used to store the variables of same datatypes, its works same as other languages, indexing starts from 0 and so on
let arr= [1,2,3,4];
console.log(arr);

//Date datatype
//You can also print date, like current date using js

const date= new Date(); //used const becuase, date is always going to be constant and same
console.log(date);

//O/P
// { name: 'MJ', age: 19 }
// object
// MJ
// string
// [ 1, 2, 3, 4 ]
// 2025-06-12T12:17:21.246Z
