// let counter = 1

// while (counter <= 20) {
//     console.log('while loop ran');
//     counter = counter + 1;
// }
// console.log('while loop finished running')

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }
// question #!

// for (let i = 1; i <= 15 ;i++) {
//      console.log(`${i}`);
//     i % 2 !== 0 ? console.log('odd ASAP'): console.log('even Frontend');
//     i % 5 === 0 ? console.log('divicible by 5,  ASAP Frontend') : console.log('not divivible by 5');

// };
// console.log('This is a for loop that loop through 1 to 15');

// for (let i = 1; i <= 15; i++) {
//     if ( i % 5 === 0) {
//         console.log(`${i} -- ASAP Frontend`)
//     }
//     else if ( i % 2 === 0 ) {
//         console.log(`${i} -- e Frontend`)
//     }
//     else {
//         console.log(`${i} -- o ASAP`)
//     }

// };

// Q: print all characters from the string
// let str = "ASAP Frontend";

// for (let i = 0; i <= str.length; i++) {
//     console.log(str[i]);
// }

// Pass
// Function Declaration

// function greetuser(name, time) {
//     console.log(`Greetings ${time}, ${name}`);
// }

// // call function
// greetuser('erik', 'morning');
// greetuser('alex', 'evening');

// function main() {
//     return 10;
//     console.log('hello world');
// }

// console.log(main())

/** Create a Function that converts $USD into $AUD
 *
 * $AUD to $USD Formula:
 * AUD = USD X 1.5
 */

// Regular Function
// function covertUsdToAud(usd) {
//     return usd * 1.5;

// }

// console.log(covertUsdToAud(1000));
// console.log(covertUsdToAud(1000));

// Arrow Functiom

// const covertUsdToAud = (usd) => {
//   return usd * 1.5;
// };

// console.log(covertUsdToAud(1000))

// let array = ["Apples", "Bananas", "Eggs", "Milk"]
// // First Element in array
// console.log(array[0])
// // Last Element of array
// console.log(array[array.length - 1])

// array.push("Bread")

// console.log(array)

//let array = [20, 15, 10, 20]
// array methods

//array.filter(() => {});
// long way
// let filterArray = array.filter((element) => {
//     console.log(element);
//     if (element <= 15) {
//         return true;
//     }
// })
// console.log(filterArray);

// let filterArray = array.filter((element) => {
//     return element <= 15;
// });

// console.log(filterArray)

// even shorter
// let filterArray = array.filter((element) => element <= 15);

// console.log(filterArray)

/**
 * Night Club Exercise
 * 
 * Filter out all people who are not 18+ yeara old
 */
// let age = [18, 20, 16, 15, 21]

// let ageFilterArray = age.filter((element) => {
//     if (element >= 18) {
//         return true;
//     }
// }) 

// console.log(ageFilterArray)

// let ageFilterArray = age.filter((e) => e >= 18);

// console.log(ageFilterArray)

/**
 * Night Club Exercise
 * 
 * Filter out all people who are not 18+ years old
 * w/out using the .filter method 
 */
let age = [18, 20, 16, 15, 21];
let pass = []
// loop through array using for loop 
//simple array of element 
for (let i = 0; i < age.length; i++) {
    console.log(age[i])
    if (age[i] >= 18) {
        
        pass.push(age[i])
    }
    // check if age is 18+
    //true, add to new empty array
    

} 
console.log(pass)