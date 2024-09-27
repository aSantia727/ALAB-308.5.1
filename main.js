// // Part 1: Thinking Functionally

// // const num = [1,2,3,4,5,6,7,8,9,10]
// // let sum = 0
// // let avg = 0
// // for (i = 0; i< num.length; i++){
// //     sum += num[i];
// //     avg = sum/num.length;
// // }
// //  console.log(sum);
// //  console.log(avg);

// let strArry = ['AAAA', 'AAAABBBB', 'AAAABBBBCCCC'];

// function longestWord() {
//     return strArry.reduce(function (a, b) {
//         return a.length > b.length ? a : b;
//     });
// }

// console.log(longestWord());

// function printNumbers(n) {
//     if (n <= 0) {
//       return; 
//     }
  
//     printNumbers(n - 1); 
//     console.log(n); 
//   }
  
//   printNumbers(5); 


//Part 2: Thinking Methodically 

const thinkMMM = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }];


function reverwe(){
    let revser = thinkMMM.reverse()
        for (i=0; i<revser.length; i++){
            thinkMMM.sort(thinkMMM[i])
            console.log(thinkMMM)
        }
    }
