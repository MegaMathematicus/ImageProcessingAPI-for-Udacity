setTimeout(function () { console.log("Print Fifth") }, 10);

function a() { console.log("Print Third") };

const b = Promise.resolve().then(function () { console.log('Print Second') }).then(a);

console.log('Print First');

setImmediate(function () { console.log("Print Forth") });