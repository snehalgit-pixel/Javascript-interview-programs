// Demonstration of closure - accessing the scope of an outer function from an inner function

function fn() {
    let i=0;
    return function() {
        i++;
        console.log(i);
    }
}

const f1 = fn();
f1();
f1();
f1();
f1();
f1();