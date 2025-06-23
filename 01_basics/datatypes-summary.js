//# Primitive datatypes..

// 7 types : String, Number ,Boolean, Symbol, BigInt..

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null 
let userEmail;

const id = Symbol('1234')
const anotherId = Symbol('1234')

console.log(id===anotherId);

const bigNumber = 34343252353623256321n

//Reference (Non Primitive)
//Array , Objects, Functions

const heros = ["shaktiman","naagraj","doga"]//Array

//This is called object...
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);



