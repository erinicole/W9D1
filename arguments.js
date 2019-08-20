
function sum1() {
  let argsArray = Array.from(arguments);

  let anything = 0; 

  for (let i = 0; i < argsArray.length; i++) {
      anything += argsArray[i];
  }
  return anything;
}


function sum2(...args) { // this is rest. as spread we would extract individual elements from args.
  let sumThing = 0; 

  for (let i = 0; i < args.length; i++) {
    sumThing += args[i];
  }
  return sumThing;
}


console.log(sum2(1, 2, 3, 4));
console.log(sum2(1, 2, 3, 4, 5)); 


Function.prototype.myBind = function(context) {
  let receivingFn = this; //says
  let args = Array.from(arguments).slice(1);

  return function bound () {
    let args2 = Array.from(arguments);
    return receivingFn.apply(context, args.concat(args2)); //here we're calling a function and returning the result of that call. 
  };
};


Function.prototype.myBind2 = function(...args){
  let receivingFn = this;
  context = args[0];
  newArgs = args.slice(1);

  return function bound(...args2) {
    return receivingFn.apply(context, newArgs.concat(args2)); //here we're calling a function and returning the result of that call. 
  };
};

function curriedSum(numArgs) {
  let numbers = [];
  let sum = 0; 

  const _curriedSum = function(num) { 
   
    numbers.push(num);

    if (numbers.length === numArgs) {
      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum; 
    } else {
      return _curriedSum;
    }
  };
}


Function.prototype.curry = function(numArgs) {
  let collectArr = [];
  let receivingFn = this; 

  let collectorFunc = function(...args){ 
    for (let i = 0; i < args.length; i++) {
      collectArr.push(args[i]);
      if (collectArr.length === numArgs) {
        return receivingFn.apply(null, collectArr); //using apply
        //return receivingFn(...collectArr);
      }
    }
    return collectorFunc;
  };
  return collectorFunc;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

console.log(sumThree.curry(3)(4)(20)(6)); // == 30