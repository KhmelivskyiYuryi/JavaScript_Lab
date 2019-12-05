// 1
var z = 1;
function y() {
    z = 10;
    return ;
    function z() {}
}
y();
console.log(z);
// 2


const a = 5;

function inc(n) {
    return --n;
}

const b = inc(a);
console.dir({a,b});


const obj = {
    n : 5
};

function inc2(Num) {
    return Num.n--;
}

inc2(obj);
console.dir({obj});
//////////

// 3
let arr = [true, 'hello', 5, 12, -200, false, false, 'word',8.3,"loo"];

let types = {
    number: 0,
    string: 0,
    boolean: 0
};

let emptyTypes = {};

for (let item of arr) {
    types[typeof item]++;
}

for (let item of arr) {
    emptyTypes[typeof item] = 0;
}


console.log(types);

console.log(emptyTypes);