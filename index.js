console.log("working...");
let element = document.createElement("div");
element.className = "child";
element.id = "child";
element.setAttribute("for","value");
element.innerText = "hello guys";
console.log(element);
document.querySelector("p.parent").appendChild(element);
 

let element1 = document.createElement("img");
element1.className = "child";
element1.setAttribute("src","./image1.jpg");
console.log(element1);
document.querySelector("p.parent").appendChild(element1);

function edit(){
    const element2 = document.getElementsByClassName("child");
    element2[0].innerHTML = `<img src = "./image2.jpg"/> `;
}

a();
function a(){
    console.log("i am function a");
}
// function support hoisting ,it means we can call a function before define the function.
const b = function(){  //since this is function expression ,it will not support hoisting
    console.log("i am function b");
}
console.log(b);
b();

{
    const d = function(){
        console.log("i am a function");
    }
    d();
}
// d(); did not gives the output as not in the same scope we calling,in scope where we defined.


// arrow function ..introduced in ES6(2015)
let f = () => {
    console.log("i am function f");
}
f();



//First Class Functions (FCF)- The functions can be passed as values(as parameter)into another functions or can be returned from another functions as values. This unique feature of functions makes them call as first classs functions/ First class citizens.
// higher order function (HOF)-the function which accept the FCF or return the value of FCF.
let g = function(param){   //HOF
    console.log("i am fn G");
    console.log(param);
    param();
}

function h (){ //FCF
    console.log("i am fn h");
}
g(h);

let i = function(){
    return function j(){
        console.log("i am fn j");
    }
}
console.log(i());

setTimeout(()=>{
console.log("hi i am a callback function");
}, 4000);


const sayHi = (nameOfFriend) => { //callback function
    console.log("hello",nameOfFriend);
} 

const greating = (friend,callBackFunction) => {
   callBackFunction(friend);
}

greating("Bala",sayHi);




//First Class Functions(FCF) - The functions can be passed as values(as arguments) into another functions or can be returned from another functions as values. This unique feature of functions makes them call as first classs functions/ First class citizens.


//Higher Order functions(HOF) - The functions which accept the FCF's or return them are called as Higher Order Functions

// let g = function(param){//HOF
//     console.log("I am fn G"); 
//     console.log(param); 
//     param();//callback function   
// }

// // function h(){//FCF
// //     console.log("I am fn h");
// // }

// // g(h);//h is a function passed as an argument


// // let param = function(){
// //     console.log("i am fn H");
// // }

// let i = function(){//HOF
//     return function j(){//FCF
//         console.log("I am fn J");
//     }
// }
// let returnVal = i();
// 
// const sayHi = (nameOfFriend) => {//Callback function
//     console.log("Hello",nameOfFriend);
// }

// const greeting = (friend, callBackFUnction) => {
//     callBackFUnction(friend);//sayHi(friend);
// }

// greeting("Bala",sayHi);

//function sayHi(arg3){//arg3=Bala
    // log("hello",arg3)//hello Bala
// }

//function greeting(arg1, arg2){//HOF
    // arg1 = "Bala",
    // arg2 = sayHi,
    // arg2(Bala); => sayHi(Bala);//calling a function
// }

// greeting("Bala",sayHi)
