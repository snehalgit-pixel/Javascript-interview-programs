// Implementation of Currying

function add(...args) {
    function b(...arg) {
        if (arg.length > 0) {
            return add(...[...arg, ...args]);
        }
        return [...args, ...arg].reduce((prev, next) => prev + next);
    }
    b.toString = function() {
        return [...args].reduce((prev, next) => prev + next);
    }
    return b;
}

console.log(add(1)(2)(3, 3)());
console.log(+add(1)(2)(3));
console.log(+add(2, 3, 4, 5)(1)());
console.log(+add(1)(2,3)(4)(5,6,7));