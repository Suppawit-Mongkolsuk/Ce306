function testVar(){
    var v = 10;
    if (true) {
        var v = 20;
        console.log(v);
    }
    console.log(v);
}

function testLet(){
    let l = 10;
    if(true){
        let l =20;
        console.log(l);
    }
    console.log(l);
}

function tesConst(){
    const c = 10;
    if (true){
        const c = 20;
        console.log(c);
    }
    console.log(c);
}

testVar();
console.log();
testLet();
console.log();
tesConst();
console.log();

// val สามารถเขียนทับได้เลย 
// let สามารถเขียนทับได้เฉพาะใน block 
// const สามารถเขียนทับได้ใน block นอก block ไม่ได้


let message = "hello world";
let score = 95;
let isPassed = true;
let emptyValue = null;
let notDefined;
let person = {name: "title", age:21};
let numbers = [1 , 2 , 3];

console.log(typeof message); //typeof  คือ เช็คtypeข้อตัวเเปร
console.log(typeof score);

let age = 20;
let isAdult = (age >= 18) && (age < 65); // and
let isChild = (age < 18) || (age > 65); //or
let notAdult = !isAdult;
console.log(isAdult);
console.log(isChild);
console.log(notAdult);

let point = 75;
let grade = (point >= 80) ? "A" : "B";
console.log("Grade:" , grade)

if(point >= 80){
    console.log("grade A");
} else if(point >= 70 ){
    console.log("grade B");
} else if(point >= 60){
    console.log("grade C");
} else {
    console.log("grade F");
}

let j = 1;
while (j<=5){
    console.log(j);
    j++;
}

let fruits = ["a","b","c"];
// วน loop array
for (let i = 0; i < fruits.length; i++){
    console.log(`fruit ${i + 1}: ${fruit[i]}`)
} 