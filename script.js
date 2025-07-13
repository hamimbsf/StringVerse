// 📌 How to declare a string

// ❌ ভুল পদ্ধতি
// let string = hamim; // ReferenceError: hamim is not defined
// console.log(string);

// ✅ সঠিক পদ্ধতি:
// জাভাস্ক্রিপ্টে স্ট্রিং (String) তৈরি করতে হলে অবশ্যই তোমাকে
// ডাবল কোট (" ") বা সিঙ্গেল কোট (' ') এর মধ্যে লেখাটি রাখতে হবে।
// না হলে JS ইঞ্জিন সেটাকে একটি ভ্যারিয়েবল বা অপরিচিত নাম হিসেবে ধরে নেয়,
// এবং সেটা খুঁজে না পেলে ReferenceError দেখায়।

// let string1 = "hamim";
// let string2 = "developer";

// যেমন এখানে "hamim" শব্দটিকে ডাবল কোট (" ") এর মধ্যে রাখার মাধ্যমে স্ট্রিং তৈরি করা হয়েছে।

// console.log(string1); // Output: hamim
// console.log(string2); // Output: developer

// 🚨 Important Note:
// অনেকে মনে করে JavaScript-এ string হলো "array of characters"
// কিন্তু আসলে তা নয়। এটি array-এর মতো behave করে — যেমন index দিয়ে
// অ্যাক্সেস করা যায়, length পাওয়া যায় — কিন্তু এটি আসলে একধরনের
// primitive data type এবং immutable।

// ✅ অর্থাৎ: string হলো একটি character sequence, not a real array.

// let str = "hamim";

// console.log(str[0]); // Output: h
// console.log(str.length); // Output: 5

// কিন্তু এটা আসল array না, তাই নিচের কাজগুলো কাজ করবে না:
// str[0] = "H";
// console.log(str); // Output: hamim (কোনো পরিবর্তন হয়নি)

// 🔒 কারণ: JavaScript-এ string immutable,
// মানে একবার তৈরি হলে তার ক্যারেকটার পরিবর্তন করা যায় না।

// 📌 How to access a character from a string variable

// let name = "hamim";
// console.log(name[0]); // Output: h

// 🔍 Explanation:
// একটি স্ট্রিং থেকে যেকোনো একটি ক্যারেক্টার অ্যাক্সেস করতে হলে,
// ভ্যারিয়েবলের নাম লিখে, তারপর array-এর মতো index ব্যবহার করতে হয়।
// যেমন এখানে `name` হলো ভ্যারিয়েবলের নাম,
// আর `[0]` মানে প্রথম অক্ষর (index শুরু হয় 0 থেকে)।

// অর্থাৎ: name[0] → "h"

// Character Index Map:
// "h  a  m  i  m"
//  0  1  2  3  4

// 📌 String vs Array of Characters

// ✅ প্রথমত:
// 👉 String হলো immutable (পরিবর্তনযোগ্য না)
// 👉 Array হলো mutable (পরিবর্তনযোগ্য)

// 📦 Example 1: Array (Mutable)
// let arr = [1, 2, 3, 4];
// arr[0] = 0; // এখানে আমি প্রথম ইনডেক্সের মান পরিবর্তন করেছি
// console.log(arr); // Output: [0, 2, 3, 4]

// 📦 Example 2: String (Immutable)
// let greeting = "Hello";
// greeting[0] = "h"; // এখানে আমি প্রথম অক্ষর পরিবর্তনের চেষ্টা করেছি
// console.log(greeting); // Output: Hello (কোনো পরিবর্তন হয়নি)

// 🔍 Explanation:
// স্ট্রিং দেখতে array-এর মতো হলেও, এটি আসলে একধরনের প্রিমিটিভ টাইপ।
// এবং এটি immutable হওয়ায় greeting[0] = "h" কোনো পরিবর্তন করে না।
