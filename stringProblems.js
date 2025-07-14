// How to print character of string

// let str = "Hello";
// for (let i = 0; i < str.length; i++) {
//   // console.log(str[i]);
//   console.log(str.charAt(i));
// }

// How to print character of string from last

// let str = "Hello";
// for (let i = str.length - 1; i >= 0; i--) {
//   // console.log(str[i]);
//   console.log(str.charAt(i));
// }

// Print in reverse order

// let str = "JavaScript";

// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   // reversed += str[i];
//   reversed += str.charAt(i);
// }
// console.log(reversed);

// Check if string is palindrome or not

// let str = prompt("Enter a string to check palindrome").toLowerCase();
// let str = "naman";

// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str.charAt(i);
// }
// if (reversed === str) {
//   console.log("palindrome");
// } else {
//   console.log("Not palindrome");
// }

// Check if string is palindrome or not by two pointer algorithm

// let str = prompt("Enter a string to check palindrome").toLowerCase();

// let i = 0;
// let j = str.length - 1;
// let isPalindrome = true;

// while (i < j) {
//   if (str.charAt(i) !== str.charAt(j)) {
//     isPalindrome = false;
//     break;
//   }
//   i++;
//   j--;
// }
// if (isPalindrome) {
//   console.log("Palindrome");
// } else {
//   console.log("Not Palindrome");
// }

// Toggle each character

// let str = prompt("Enter a string to toggled");
// let str = "String";
// let toggledStr = "";

// for (let i = 0; i < str.length; i++) {
//   let ch = str.charCodeAt(i);
//   if (ch >= 65 && ch <= 90) {
//     toggledStr += String.fromCharCode(ch + 32);
//   } else if (ch >= 97 && ch <= 122) {
//     toggledStr += String.fromCharCode(ch - 32);
//   } else {
//     toggledStr += str[i];
//   }
// }

// console.log(toggledStr);

// How many times appears a latter

// let str = "Hello";
// let arr = new Array(128).fill(0);

// for (let i = 0; i < str.length; i++) {
//   let indx = str.charCodeAt(i);
//   arr[indx] += 1;
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     console.log(String.fromCharCode(i), "appears", arr[i], "times");
//   }
// }

// console.log(arr);
