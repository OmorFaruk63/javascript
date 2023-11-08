//'-------first javascript class-------'

// let person1 = ['omor', 24];
// let person2 = ['karim', 27];
// person2 = [...person1, 'dhaka'];
// console.log(person2);
// person2 = [...person1, 'dhaka', 'bangladesh'];
// person1[0] = 'faruk';
// console.log(person2);
// console.log(person1);


// let a = [10,20,30]
// let b = [...a]

// b[2] = 40
// console.log(b);
// console.log(a);

//--------------find odd number index------

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let b = []
// let index = []
// for (let i = 0; i < arr.length; i++) {
//     // console.log(a[i]);
//     if (arr[i] % 2 !== 0) {
//         index.push(i)
//         b.push(arr[i])
//     }
// }
// console.log('odd number ' +b + ' = index number' + index);


// --find the even numbers and replace the odd number spaces with zeros-----

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let b = []
// for (let i = 0; i < arr.length; i++) {
//     // console.log(a[i]);
//     if (arr[i] % 2 !== 0) {
//         b.push(0)
//     } else {
//         b.push(arr[i])
//     }
// }
// console.log(b);


// ------------------sum of all elements from Array---------
// let arr = [1, 2, 3, 4]
// function fun(a) {
//     let sum = 0;
//     for (let i = 0; i < a.length; i++) {
//         sum += a[i]
//     }
//     return sum
// }
// console.log(fun(arr));


// ------------------multiplication of all elements from Array---------
// let arr = [1, 2, 3, 4]
// function fun(a) {
//     let sum = 1;
//     for (let i = 1; i < a.length; i++) {
//         sum *= a[i]
//     }
//     return sum
// }
// console.log(fun(arr));

// ---------------------find even/odd number -------------------
// let arr = [3, 6, 9, 1, 8, 16, 14, 13]
// console.log(arr.length);
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i] + ' is  even number');
//     } else {
//         console.log(arr[i] + ' is odd number');
//     }
// }
// ---------------------find even/odd number use for of---------------------
// for (ary of arr) {
//     if (ary % 2 == 0) {
//         console.log(ary + ' is  even number');
//     } else {
//         console.log(ary + ' is odd number');
//     }
// }


// --------------------find the first number ----------------
// let con = prompt('enter 1 to 10 number')
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// for (const a of arr) {
//     if (con < a) {
//         console.log(a);
//         break
//     }
// }
// console.log('given number is ' + con);


// --------------Problem Fizzazz--------------
// for (let i = 1; i <= 50; i++) {
//     if ((i % 3 === 0) && (i % 5 === 0)) {
//         console.log('FizzBazz' + i);
//     }
//     else if (i % 3 === 0) {
//         console.log('Fizz' + i);
//     } else if (i % 5 === 0) {
//         console.log('Bazz' + i);
//     }
// }

// -------------------26/10/2023------------------

//--------------problem solving -------------------
// jodi  10 pro kini tahole per price 50 tk
// jodi 20 pro kini tahole prothom 10 pice 50 tk next 10 pice ta 40tk
// jodi 20 er bashi  pro kini tahole prothom 10 ta 50 tk next 10 ta 40 tk next 30 tk

// let product = 22;
// let totalPrice = 0;
// for (let i = 0; i < product; i++) {
//     if (i < 10) {
//         totalPrice += 50
//     } else if (i < 20) {
//         totalPrice += 40
//     } else {
//         totalPrice += 30
//     }
// }
// console.log(totalPrice);

// -----------reverse----------

// let product = prompt();
// let totalPrice = 0;
// for (let i = product; i > 0; i--) {
//     if (i > 20) {
//         totalPrice +=30
//     } else if (i > 10) {
//         totalPrice += 40
//     } else {
//         totalPrice += 50
//     }
// }
// console.log(totalPrice);


// -------------------27/10/2013--------------

// ------------find the big number -----------

// let bigNum = 0;
// let arr = [1, 2, 1, 3, 43, 5, 544, 67, 6]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > bigNum) {
//         bigNum = arr[i]
//     }
// }
// console.log(bigNum);


// ----------------find the small number from array --------------

// let arr = [5, 22, 23,5,41,16]
// let num = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < num) {
//         num = arr[i]
//     }
// }
// console.log(num);


// ------------Calculate the Sum Of Number 1 To 10--------

// let num = 0
// for (let i = 0; i <= 5; i++) {
//     console.log(num += i);
// }

// -------------calculate 1 to 10 table ------------------------------------

// function one_to_ten_table(num) {
//     for (let i = 1; i <= num; i++) {
//         calculateTable(i)
//     }
//     function calculateTable(a) {
//         for (let i = 1; i <= 10; i++) {
//             console.log(`${a} * ${i} = ${a * i}`);
//         }
//     }
//     return calculateTable
// }
// one_to_ten_table(10)
// -------------calculate num to num table ------------------------------------

// function one_to_ten_table(num,tab) {
//     for (let i = num; i <= tab; i++) {
//         calculateTable(i)
//     }
//     function calculateTable(a) {
//         for (let i = 1; i <= 10; i++) {
//             console.log(`${a} * ${i} = ${a * i}`);
//         }
//     }
//     return calculateTable
// }
// one_to_ten_table(6,7)

// ----------------------------------------------------------------------------
// jodi  10 pro kini tahole per price 50 tk
// jodi 20 pro kini tahole prothom 10 pice 50 tk next 10 pice ta 40tk
// jodi 20 er bashi  pro kini tahole prothom 10 ta 50 tk next 10 ta 40 tk next 30 tk

// let product = 22;
// let totalPrice = 0;
// for (let i = 0; i < product; i++) {
//     if (i < 10) {
//         totalPrice += 50
//     } else if (i < 20) {
//         totalPrice += 40
//     } else {
//         totalPrice += 30
//     }
// }
// console.log(totalPrice);


// ---------- find out the sum of even and odd Number from array------

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let sumOffEvenNum = 0 //11
// let sumOffOddNum = 0 //14
// for (let i = 1; i < number.length; i++) {
//     if (i % 2 == 0) {
//         sumOffEvenNum += i
//     } else {
//         sumOffOddNum += i

//     }
// }
// if (sumOffOddNum % 2 == 0) {
//     sumOffOddNum += 1
// }
// console.log(sumOffEvenNum, sumOffOddNum);


// ---------------------calculate 10 ------------

// let sum = 0;
// for (let i = 1; i < 5; i++) {
//     sum += i
// }
// console.log(sum);


// -------------Calculate even Number grater then num to las then  num-------

// function Calculate_num(num, num1) {
//     let sum = 0;
//     for (let i = num; i <= num1; i++) {

//         if (i % 2 == 0) {
//             sum += i
//         }

//     }
//     console.log(sum);
//     return sum
// }
// Calculate_num(5, 10)

// -------------------28/10/2023---------------

// ---------------Celsius to fahrenheit Convart ------------

// let celsius = 37;
// function CelsiusToFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32
// }
// console.log(CelsiusToFahrenheit(celsius));


// ---------------fahrenheit to Celsius Convart ------------

// let fahrenheit = 90.7;
// function convartFahrenheitToCelcius(deg) {
//     return (deg - 32) * 5 / 9
// }
// console.log(convartFahrenheitToCelcius(fahrenheit));


// ------------how many  second  in hour minutes and then sum second-----

// function houreTosec(h, m, s) {
//     let hours = h * 60 * 60
//     let minutes = m * 60
//     let second = s
//     let totalSecond = hours + minutes + second
//     return totalSecond
// }
// // h , m, s
// console.log(houreTosec(5, 30, 1000));


// --------------FizzBazz problem ---------

// fun(50)
// function fun(a) {
//      for (let i = 1; i <= a; i++) {
//           if (i % 5 == 0 && i % 3 === 0) {
//                console.log(i + " FizzBazz");
//           } else if (i % 5 === 0) {
//                console.log(i + " Fizz");
//           } else if (i % 3 === 0) {
//                console.log(i + " Bizz");
//           }
//      }
// }


//--------------Swap--------

// let a = 5;
// let b = 6;
// let temp = a
// a = b
// b = temp
// console.log(b,a);
// --------------second swao------------------
// let a = 5;
// let b = 6;
// [a,b]=[b,a];
// console.log(b);
// console.log(a);


// -----------find the big number----------------------

// let arr = [10, 2, 3]
// let bigNum = arr[0]
// for (let i = 0; i < arr.length; i++) {
//      if (arr[i] > bigNum) {
//           bigNum = arr[i]
//      }
// }
// console.log(bigNum);


//------------Celsius To Fahrenheit Formula---------1111111

// function fun(deg) {
//      return deg * (9 / 5) + 32
// }
// console.log(fun(37));


// --------------find from array negative, positive, zero----------22222

// let negative = [];
// let positive = [];
// let zero = [];
// let arr = [9, 1, 2, -4, 0, 5, 6, -7, 8, -1, 0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         negative.push(arr[i])
//     } else if (arr[i] == 0) {
//         zero.push(arr[i])
//     } else if (arr[i] > 0) {
//         positive.push(arr[i])
//     }
// }
// console.log(`${negative}negative `);
// console.log(`${positive} positive`);
// console.log(`${zero} zero`);


// --------------reverse String----------333333
// const str = '102030'
// let reverseStr = '';
// for (let i = str.length - 1; i >= 0; i--) {
//      reverseStr += str[i]
// }
// console.log(reverseStr);

// --------------reverse Array----------33333333
// const arr = [1, 0, 2, 0, 3, 0]
// let reversearr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     reversearr.push(arr[i])
// }
// console.log(reversearr);


// ---------------Calculate 7 table--------44444444
// function calculateTable(num) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${num} X ${i} = ${num * i}`);
//     }
// }
// calculateTable(32)


// -------- Factorial ----------555555

// let sum = 1;
// function factorial(a) {
//     for (let i = a; i > 0; i--) {
//         sum *= i

//     }
//     return sum
// }
// factorial(5)
// console.log(sum);

// -----------Find prime number--------666666666

// let count = 0
// FirstLoop: for (let i = 2; i <= 12; i++) {
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             continue FirstLoop;
//         }
//     }
//     count++
//     console.log(`${i} is a prime number`)
// }
// console.log(count)

//||||||||||||||||||||||||||||||||29/10/2023||||||||||||||||||||||||||||||||||||||||||
// ------------fibonacci-----------77777777

// let arr = [0, 1]
// for (let i = 0; i <= 10; i = i + 1) {
//     arr.push(arr[i] + arr[i + 1])
// }
// console.log(arr);


// -----------Find prime number--------666666666

// FirstLoop: for (let i = 2; i <= 12; i++) {
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             continue FirstLoop;
//         }
//     }
//     count++
//     console.log(`${i} is a prime number`)
// }
// console.log(count)


// ----------------------create filter function------------

// let arr = [1, '', null, undefined, 'name', 0, 2];
// function myfilter(ary, fun) {
//     let newarr = []
//     for (let i = 0; i < ary.length; i++) {
//         if (fun(ary[i])) {
//             newarr.push(ary[i])
//         }
//     }
//     return newarr
// }
// let x = myfilter(arr, function (value) {
//     return value ? false : true
// });
// console.log(x);


// -------Calculate the sum of numbers in an array of numbers--------

// let arr = [1, 2, 3, 4, 5]
// function sumOfarray(arr) {
//     let sumArray = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sumArray += arr[i];
//     }
//     console.log(sumArray);
// }
// sumOfarray(arr)


//-----Calculate the average of the numbers in an array of numbers--------

// let arr = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10,]
// function avgOfarray(arr) {
//     let sumArray = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sumArray += (arr[i] / arr.length)
//     }
//     return sumArray
// }
//  let result = avgOfarray(arr)
//  console.log(result);

// -------Create a function that receives an array of numbers and returns an array containing only the positive numbers-------

// let arr = [0, 11, 10, -10, 7, 4, 10, -10, -3, 1,]
// function positiveArray(arr) {
//     let newPositiveArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             newPositiveArray.push(arr[i])
//         }
//     }
//     console.log(newPositiveArray);
// }
// positiveArray(arr)

// --------Second solution------

// {
// let arr = [0, 11, 10, -10, 7, 4, 10, -10, -3, 1,]
// function positiveArray(arr) {
//     return  arr.filter(value => value > 0)
// }
// console.log(positiveArray(arr));
// }

// -----------fibonacci-------------
// const fibonacci = [0, 1]
// function fun(fibo) {
//     for (let i = 0; i < fibo - 2; i++) {
//         fibonacci.push(fibonacci[i] + fibonacci[i + 1]);
//     }
//     return fibonacci
// }
// fun(10)
// console.log(fibonacci);

// ------------fibonacci second solution-----

// function fibo(f) {
//     let a = 0
//     let b = 1
//     let x = 0;
//     let arr = []
//     for (let i = 2; i < f; i++) {
//         x = a + b
//         arr[arr.length] = x
//         a = b
//         b = x
//     }
//     return arr
// }
// console.log(fibo(12));


// ------------fibonacci third solution with recursion-----

// function findFibonacci(n)
// {
//     if (n == 0)
//         return 0;
//     if (n == 1)
//         return 1;
//     return findFibonacci(n - 1) + findFibonacci(n - 2);
// }
// var n = findFibonacci(10);
// console.log(n);


// ------------Find Prime Number First------------

// function primeNumber(num) {
//     for (let outnum = 2; outnum < num; outnum++) {
//         if (!getNum(outnum)) {
//             continue
//         }
//        return outnum
//     }
// }
// function getNum(outnum) {
//     for (let i = 2; i < outnum; i++) {
//         if (outnum % i === 0) {
//             return false
//         }
//     }
//     return true
// }
// primeNumber(100000)

// ------------Find Prime Number Second------------
// function findPrime(f) {
//     let prime = 0
//     firstLoop: for (let i = 2; i < f + 1; i++) {
//         for (let n = 2; n < i; n++) {
//             if (i % n == 0) {
//                 continue firstLoop;
//             }
//         }
//         prime = i
//     }
//     if (prime === f) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(findPrime(12));

// ------------Find Prime Number Second------------
// function isPrime(n) {
//     if (n < 2)
//         return false;
//     if (n == 2)
//         return true;
//     var maxDiv = Math.sqrt(n);
//     for (var i = 2; i <= maxDiv; i++) {
//         if (n % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(20));



//---- একটি ফাংশন তৈরি করুন যা একটি নির্দিষ্ট সংখ্যা "startAt" এর চেয়ে বড় প্রথম "nPrimes" মৌলিক সংখ্যাগুলিকে অ্যারেতে ফিরিয়ে দেবে------

// function findPrime(a, f) {
//     let x = []
//     let count = 0
//     let limit = f + 2;
//     firstLoop: for (let i = f; i < limit; i++) {
//         for (let n = 2; n < i; n++) {
//             if (i % n == 0) {
//                 limit++
//                 continue firstLoop;
//             }
//         }
//         limit++
//         count++
//         x[x.length] = i
//         if (count >= a) {
//             break
//         }
//     }
//     return x
// }
// console.log(findPrime(10, 100));

// -------------Second Mathod-----------------
// console.log(getPrimes(10, 100));
// function getPrimes(nPrimes, startAt) {
//     var ar = [];
//     var i = startAt;
//     while (ar.length < nPrimes) {
//         if (isPrime(i)) {
//             ar.push(i);
//         }
//         i++;
//     }
//     return ar;
// }
// // Returns true if a number is prime
// function isPrime(n) {
//     if (n < 2)
//         return false;
//     if (n == 2)
//         return true;
//     var maxDiv = Math.sqrt(n);
//     for (var i = 2; i <= maxDiv; i++) {
//         if (n % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }


// -------------Rotate an array to the left 1 position----

// let arr = [10, 20, 30, 40, 50, 60]
// let resurvArray = arr.shift()
// arr.push(resurvArray)
// console.log(arr);

// -------------Rotate an array to the right 1 position----

// let arr = [10, 20, 30, 40, 50, 60]
// let resurvArray = arr.pop()
// arr.unshift(resurvArray)
// console.log(arr);


// -----Create a function that will merge two arrays and return the result as a new array---

// let arr1 = [10, 20, 30, 40, 50, 60]
// let arr2 = [10, 20, 30, 40, 50, 60]
// function maegrArray(arr1, arr2) {
//     let margeary = []
//     margeary.push(arr1 + arr2)
//     return margeary
// }
// console.log(maegrArray(arr1, arr2));

// // ----------solution second----------
// var ar1 = [1, 2, 3];
// var ar2 = [4, 5, 6];

// var ar = mergeArrays(ar1, ar2);
// console.log(ar)

// function mergeArrays(ar1, ar2) {
//     var ar = [];

//     for (let el of ar1) {
//         ar.push(el);
//     }

//     for (let el of ar2) {
//         ar.push(el);
//     }

//     return ar;
// }


// --------------Practice Task return  positive value-----------
// function add(a, b) {
//     return a + b
// }
// function main(a, b, cb) {
//     let c = a + b;
//     let d
//     if (a > b) {
//         d = a - b
//     } else {
//         d = b - a
//     }
//     let p = cb(a, b);
//     return function () {
//         return c * d * p
//     }
// }
// let x = main(1, 5, add)
// console.log(x());


// ||||||||||||||||||||||||||||31/10/2023|||||||||||||||||||||


// -------------------marge two array remove duplicate---------------11111111
// let arr1 = [10, 20, 30, 40, 50, 60]
// let arr2 = [10, 20, 60, 70, 80, 90]
// function maegrArray(arr1, arr2) {
//     let margeary = []
//     for( i in arr1){
//             margeary.push(arr1[i])
//     }
//     for( i in arr2){
//         if (!arr1.includes(arr2[i])) {
//             margeary.push(arr2[i])
//         }
//     }
//     return margeary
// }
// console.log(maegrArray(arr1, arr2));

// ----------------closure function------------------------

// function parent() {
//     let a = 20;
//     let b = 10;
//     let closur = function () {
//         return a + b;
//     };
//     return closur;
// };
// let obj = parent()
// console.log(obj());

// ---------------------Object Practice--------------
// const obj = {
//     name: "omor",
//     age: 24,
//     skill: {
//         js: 'good',
//     },
//     address: {
//         dis: 'dhaka'
//     }
// }
// for (key in obj) {
//     if (typeof obj[key] === 'object') {
//         let a = obj[key]
//         for (b in obj[key]) {
//             console.log(a[b]);
//         }
//     }else{
//         console.log(obj[key]);
//     }
// }


// const obj = {
//     name: "omor",
//     age: 24,
//     skill: {
//         js: 'good',
//     },
//     address: {
//         dis: 'dhaka'
//     }
// }

// let x = Object.keys(obj)
// let y = Object.values(obj)
// let e = Object.entries(obj)
// console.log(e);


// for (key in obj) {
//     if (typeof obj[key] === 'object') {
//         let a = obj[key]
//         for (b in obj[key]) {
//             console.log(a[b]);
//         }
//     }else{
//         console.log(obj[key]);
//     }
// }


// -----------------return unique value ----------222222
// let arr1 = [10, 20, 30, 50, 60, 70]
// let arr2 = [40, 50, 60, 70, 80, 90]
// function maegrArray(arr1, arr2) {
//     let margeary = []
//     for (i in arr1) {
//         if (!arr2.includes(arr1[i])) {
//             margeary.push(arr1[i])
//         }
//     }
//     return margeary
// }
// console.log(maegrArray(arr1, arr2));


// ------------------distinct Array retura---------------Array ভ্যালু গুলোর মধ্য থেকে ইউনিক ভ্যালু গুলো রিটার্ন করুন আর ডুপ্লিকেট গুলো বাদ দিন-3333333333333



// let arr1 = [10, 20, 30, 40, 50, 60,10, 20, 60, 70, 80, 90]
// function maegrArray(arr1) {
//     let margeary = []
//     for (i in arr1) {
//         if (!margeary.includes(arr1[i])) {
//             margeary.push(arr1[i])
//         }
//     }
//     return margeary
// }
// console.log(maegrArray(arr1));

// ---------------------second soulition----------33333333333

// --------------Calculate sum of 100 first Prime Number----------
// Calculate the sum of first 100 prime numbers
// function sumOfPrime(a) {
//     let sumPrime = 0
//     firstLoop: for (let i = 2; i < a; i++) {
//         for (let n = 2; n < i; n++) {
//             if (i % n === 0) {
//                 continue firstLoop
//             }
//         }
//         sumPrime += i
//     }
//     return sumPrime
// }
// console.log(sumOfPrime(100));

// ----------------------class Practice------------------------

// const arr = [
//     { name: 'a', age: 30 }, { name: 'b', age: 25 }, { name: 'c', age: 35 },
//     { name: 'd', age: 15 }, { name: 'e', age: 10 }
// ]
// let x = arr.reduce(function (acc, ca) {
//     acc.push({...ca, n: 7})
//     return acc
// },[])
// console.log(x);

// ----------------class practice reduce Object----------

// const arr = [
//     { name: 'a', age: 30 }, { name: 'b', age: 25 }, { name: 'c', age: 35 },
//     { name: 'd', age: 15 }, { name: 'e', age: 10 }
// ]
// let x = arr.reduce(function (accumulator, currentValue) {
//     accumulator.push({ ...currentValue, p: 1 })
//     return accumulator
// }, [])
// console.log(x);

// ----------------class practice reduce map----------
// const arr = [1, 2, 3, 4, 5]
// let x = arr.reduce(function (accumulator, currentValue) {
//     accumulator.push(currentValue * 2)
//     return accumulator
// }, [])
// console.log(x);

// ----------------class practice reduce filter----------

// const arr = [1, 2, 3, 4, 5]
// let x = arr.reduce(function (accumulator, currentValue) {
//     if (currentValue > 3) {
//         accumulator.push(currentValue)
//     }
//     return accumulator
// }, [])
// console.log(x);

// ----------------class practice reduce find----------

// const arr = [6, 2, 3, 4, 5,7]
// let x = arr.reduce(function (accumulator, currentValue) {
//     if (currentValue > 3 && accumulator === undefined) {
//         accumulator = currentValue
//     }
//     return accumulator
// },undefined)
// console.log(x)

// |||||||||||||||||||||||||||||||||||||1/11/2023||||||||||||||||||||||||||||||||||||||||||||/\
// -------------------make map mathod how work behind the scene-------------                 \/

// let arr = [1,2,3,4,5]
// function map(arr,callback) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(callback(arr[i]))
//     }
//     return newArr
// }
// let result =  map(arr,function (value) {
//     return value * 2
// })
// console.log(result);

// -------------Make Filter Mathod How Work Behind The scene----------

// let arr = [1, 2, 3, 4, 5]
// let newFilter = []
// function filterMathod(arr, callBack) {
//     for (let i = 0; i < arr.length; i++) {
//         if (callBack(arr[i])) {
//             newFilter.push(arr[i])
//         }
//     }
//     return newFilter
// }
// filterMathod(arr, function (value) {
//     return value > 3 ? true : false
// })
// console.log(newFilter);

// -------------Make Find Mathod How Work Behind The scene----------

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function findMathod(arr, query, callBack) {
//     for (let i = 0; i < arr.length; i++) {
//         if (callBack(query, arr[i])) {
//             return arr[i]
//         }
//     }
// }
// let result = findMathod(arr, 3, function name(query, array) {
//     if (array > query) {
//         return array
//     }
// });
// console.log(result);


// ------------------task object destracharing----------------
// spred oparetor
// const obj = {
//     name: 'omor',
//     age: 'age',
//     skill: {
//         exel: 'good',
//         graphic: 'normal',
//         programing: {
//             slytes: {
//                 bootstrap: 'one',
//                 tailwind: 'two',
//                 daisy: 'three'
//             },
//             html: 'good',
//             css: 'not bad',
//             js: 'learning'
//         }
//     },
//     cloth: ['t-shirt', 'jubba']
// }

// const {
//     name,
//     age,
//     skill: {
//         exel,
//         graphic,
//         programing: {
//             slytes: {
//                 bootstrap,
//                 tailwind,
//                 daisy
//             },
//             html,
//             css,
//             js
//         }
//     },
//     cloth: [a, b] } = obj //Destructuring a nested Object in one place by the property key
// console.log(name, age, exel, graphic, bootstrap, tailwind, daisy, html, css, js, a, b);
// --------------------------------
// let obj = {
//     n: 1,
//     b: 2,
//     a: {
//         c: {
//             d: {
//                 e: {
//                     f: {
//                         name: 'omor'
//                     }
//                 }
//             }
//         }
//     }
// }

// const { n, b, a: { c: { d: { e: { f: { name } } } } } } = obj
// console.log(name);
// ------------------------------
// let obj = {
//     name :'atik',
//     skill : {
//         html : 'bad',
//         js : {
//             variable: ' boy',
//         }
//     }
// }
// const {name ,skill:{html,js:{variable}}}= obj
// console.log(name,html,variable);

// let arr = [1, 2, 3, 4, 5]
// function reduce(a, b, cb) {

// }

// reduce(arr, function (value) {
//     if (value) {
//         return value
//     }
// })


// ---------------task make findindex----------

// const arr = [6, 2, 3, 4, 5, 7]
// let count = 0
// let x = arr.reduce(function (accumulator, currentValue) {
//     if (currentValue === 5 && accumulator === undefined) {
//         accumulator = count
//     } else if (typeof accumulator !== 'number') {
//         count++
//     }
//     return accumulator
// }, undefined)
// console.log(count)

// -------------------------------------------
// const arr = [6, 2, 3, 4, 5, 7]
// let count = []
// let check = undefined
// let x = arr.map(function (value) {
//     if (value > 4 && check === undefined) {
//         count.push(value)
//         check++
//     }
// })
// console.log(count);

// -------------------------find leap year-----------------
// function fun(year) {
//     if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//         console.log(`${year} is leap year`);
//     } else {
//         console.log(`${year} is leap not year`);
//     }
// }
// fun(2004)


// Create a function that will capitalize the first letter of each word in a text

// let str = 'Create a function that will capitalize the first letter of each word in a text'
// let a = str.split(' ')
// for (let i = 0; i < a.length; i++) {
//     a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
// }
// console.log(a);

// ----------------------------------nasted array and nasted loop----------------------

// let arr = [[1, 2, [3, 4, 5], 6], [6,6,[6,6,[6,6,6,],6,6,6,],6,6,6, 7, [8, 9, 10], 11, 12], [13, 14, 15]]
// for (i of arr) {
// for (j of i) {
//     if (typeof j !== 'number') {
//         for (n of j) {
//             if (typeof n !== 'number'){
//                 for (a of n) {
//                     console.log(a);
//                 }
//             }else{
//                 console.log(n);
//             }
//         }
//     } else {
//         console.log(j);
//     }
// }
// }

// ------------------------this -------------

// const school = {
//     name: 'highSchool',
//     classRoom: {
//         name: 'class 10',
//         teacher: {
//             name: 'omor faruk',
//             introduce() {
//                 console.log(`i am ${this.classRoom.teacher.name},i teach ${this.classRoom.name} at ${this.name}`);
//             }
//         }
//     }
// }
// // const { name: sch, classRoom: { name: clsname, teacher: { name: teaName } } } = school
// let x = school.classRoom.teacher.introduce.call(school)



// let names = ['tanvir, ahmad, partho'];
// let a = names.toString();
// console.log(a);
// let x = a.split(' ');
// let arr = []
// let y = arr.join()
// console.log(y);
// for (let i = x.length - 1; i >= 0; i--) {
//     arr.push(x[i]);
// }
// console.log(arr);



// let arr = [20, null, undefined, 'hello', 2, 'omor', 3, 4, 5];
// function fun(arr) {
//     let resurv = [];
//     if (typeof arr === 'number') {
//         resurv.push(arr)
//     }
//     return resurv
// }
// console.log(fun());

// -------------------Length Conversion----Kilometer to Mile-----------
// function kilomiterToMile(kilo) {
//     return kilo * 0.62;
// }
// console.log(kilomiterToMile(5));

// ------------------Lengtg Conversion Mile To Kilometer----------------
// function kilomiterToMile(mile) {
//     return mile * 1.6;
// }
// console.log(mileTokilometer(5));

// --------------------------DOM Document Object Model--------------------

// let menu_ul = document.getElementById('menu')
// let ul_list = menu_ul.children
// for (let li of ul_list) {
//     if (li.tagName !== 'DIV') {
//         console.log(li.innerHTML);
//     }
// }
// for (let element_of_ul of ul_list) {
//     if (element_of_ul.tagName == 'DIV') {
//         let div = element_of_ul.children
//         for (let i of div) {
//             let li = i.children;
//             for (let v of li) {
//                 console.log(v.innerHTML);
//             }
//         }
//     }
// }


// -----------------------------------------------Second -----------
// let ul = document.getElementById('menu')
// let li = ul.children
// for (let i = 0; i < li.length; i++) {
//     if (li[i].tagName !== 'DIV') {
//         console.log(li[i].innerText);
//     }
// }
// for (let i = 0; i < li.length; i++) {
//     if (li[i].tagName == 'DIV') {
//         let div = li[i].children
//         let li_of_ul = div[0].children
//         for (let a = 0; a < li_of_ul.length; a++) {
//             console.log(li_of_ul[a].innerText);
//         }
//     }
// }
// -------------------------------------------------8/11/23---------

// const takeOrder = (customer, callcack) => {
//     console.log(`take Order From ${customer}`);
//     callcack(customer)
// }
// const procesOrder = (name, callback) => {
//     setTimeout(() => {
//         console.log(`Processing Order for ${name}`);
//         callback(name)
//     }, 3000)
// }
// const complateOrder = (customer) => {
//     console.log(`Complate Order From ${customer}`);
// }

// takeOrder('omor faruk', (name) => {
//     procesOrder(name, () => {
//         complateOrder(name)
//     })
// })


// let a = ['omor faruk', 'korim', 'mansur']

// for (let i = 0; i < a.length; i++) {
//     let s = Math.floor(Math.random() * a.length)
// }


