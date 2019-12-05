// 1 -
console.log("Task 1");
var name = "Yura";
const date = 2000;
function show(n){
    console.log("Hello, ",n);
}
show("Yura");
show(name);
show(date);

// 2 -
console.log("Task 2");
function range(start, end) {
    for(var i = start; i <= end; i=i+2){
        console.log(i);
    }
}
range(15,30);

// 3 -
console.log("Task 3");
function average(a,b){
    return (a+b)/2;
}
function square(x){
    return x*x;
}
function cube(x){
    return x*x*x;
}
for(var i = 0; i <= 10; i++){
    console.log(average(square(i),cube(i)));
}

// 4 -
console.log("Task 4");
//let user = new Object();
const object1 = {name: "Yura"};
var  object2 = {name: "Khmelivskyi"};
console.log(object1);
console.log(object2);
object1.name = "Yurchik";
object2.name = "Khmel";
console.log(object1);
console.log(object2);
var object3 = {year: 2000};
object2 = object3;
console.log(object1);
console.log(object2);

function createUser(name, city) {
    var user = {name, city  };
    return user;

}
console.log(createUser("Yuriy", "Vinnitsa"))
 // 5 -
console.log("Task 5");
var array = [ {name: "Yura Khmelivskiy", phone: "+380445566777"},
    {name: "Ivan Ivanov", phone: "+380969999999"},
    {name: "Petya Petrov", phone: "+380966696669"}];
function findPhoneByName(name) {
    for (var i=0; i<array.length;i++) {

        if (name === array[i].name)
            var rez = array[i].phone;
    }
    return rez
}
console.log(findPhoneByName("Yura Khmelivskiy"));

// 6 -
function hash(string) {
    var h =0;
    for(var  i=0; i<string.length;i++){
        h = ((h << 5) - h) + string.charCodeAt(i);
        h |= 0;
    }
    return h;
}
console.log(hash("123456"))



