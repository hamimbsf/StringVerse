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

// 📌 Note: Mutable vs Reassign

// let str = "Ummmmmmm";
// str = "Na";
// console.log(str); // Output: Na

// 🔍 Explanation:
// এখানে আমরা স্ট্রিংটাকে পরিবর্তন করিনি, বরং পুরো ভ্যারিয়েবলটাকে
// নতুন একটি স্ট্রিং দিয়ে **reassign** করেছি।

// ⚠️ এটা অনেকেই ভুল করে mutable ভাবে —
// কিন্তু আসলে স্ট্রিং এখনো immutable-ই আছে।
// আমরা পুরোনো ভ্যালু বাদ দিয়ে নতুন ভ্যালু বসিয়েছি।

// 🧠 মনে রাখো:
// ✅ Mutable মানে হচ্ছে: ডেটার ভিতরের অংশ (যেমন index ধরে বা সরাসরি) পরিবর্তন করা যায় — যেমন Array
// ❌ String-এ `+` বা `concat()` দিয়ে নতুন string বানানো গেলেও,
//     মূল string অপরিবর্তিত থাকে — কারণ string হলো immutable।

// 📦 উদাহরণ:
// let str2 = "Ummmmmmm";
// let newStr = str2 + "hea";

// console.log(str2); // Output: Ummmmmmm (পুরাতন string অপরিবর্তিত)
// console.log(newStr); // Output: Ummmmmmmhea (নতুন string তৈরি হয়েছে)

// ❌ Reassign মানে হচ্ছে: ভ্যারিয়েবলের সম্পূর্ণ মান নতুন করে সেট করা — যেটা primitive টাইপে হয়

// 🔽 Methods of string

// 📌 1. length
// 👉 একটি স্ট্রিংয়ের দৈর্ঘ্য (অর্থাৎ কতটি ক্যারেক্টার আছে) জানার জন্য ব্যবহৃত হয়।

// let name = "Hamim";
// console.log(name.length); // Output: 5

// Note -> length হলো একটি প্রপার্টি, এটি কোন ফাংশন নয়। তাই () ব্যবহার করতে হয় না।

// 📌 2. toUpperCase()
// 👉 স্ট্রিং-এর সব অক্ষরকে capital/uppercase বানায়।

// let word = "developer";
// let upperWord = word.toUpperCase();

// console.log(upperWord); // Output: DEVELOPER

// Note -> এই মেথড মূল স্ট্রিংকে পরিবর্তন করে না, বরং একটি নতুন স্ট্রিং রিটার্ন করে।

// 📌 3. toLowerCase()
// 👉 স্ট্রিং-এর সব অক্ষরকে small/lowercase বানায়।
// let word = "JAVASCRIPT";
// let lowerWord = word.toLowerCase();

// console.log(lowerWord); // Output: javascript

// Note -> এই মেথড মূল স্ট্রিংকে পরিবর্তন করে না, বরং একটি নতুন স্ট্রিং রিটার্ন করে।

// 📌 4. slice(start, end)
// 👉 স্ট্রিং-এর নির্দিষ্ট অংশ কেটে নিয়ে আসে।

// let text = "JavaScript";
// let sliced = text.slice(0, 4); // এখানে ০ index থেকে শুরু হয়েছে এবং index no. 4 এর আগ পর্যন্ত অর্থাৎ ইনডেক্স 3 পর্যন্ত দিবে (0,1,2,3)

// console.log(sliced); // Output: Java

//Note --> slice() মেথডে negative index ব্যবহার করা যায়।
//একটি স্ট্রিং ভ্যারিয়েবল এর সর্বশেষ মান slice -1 হিসাবে নেই <-- এই সিকোয়েন্স এ যাই আর এক এক করে কমতে থাকে

// let text = "JavaScript";
// let sliced = text.slice(-6, text.length);
// অর্থাৎ শেষ থেকে 6টি ক্যারেক্টার আগে থেকে শুরু, তারপর শেষ পর্যন্ত

// console.log(sliced); //Script

// console.log(text.slice(-6)); // Output: Script
// যখন শুধু একটাই negative index দেওয়া হয়, তখন সেটা শেষ পর্যন্ত কেটে নেয়।

// 📌 5. substring(start, end)
// 👉 slice() এর মতোই কাজ করে, কিন্তু negative index গ্রহণ করে না।

// let msg = "Programming";
// console.log(msg.substring(0, 5)); // Output: Progr

// 📌 6. includes(value)
// 👉 স্ট্রিং-এর মধ্যে কোনো word বা ক্যারেক্টার আছে কিনা — তা যাচাই করে true বা false রিটার্ন করে।

// let quote = "Never give up";
// console.log(quote.includes("give")); // Output: true
// console.log(quote.includes("fail")); // Output: false

// 📌 7. concat()
// 👉 দুটি বা তার অধিক স্ট্রিংকে একসাথে জোড়ার জন্য ব্যবহৃত হয়।

// let str = "Hello";
// let newStr = str.concat(" World");

// console.log(newStr); // Output: Hello World

// 🔍 Explanation:
// concat() মেথড মূল স্ট্রিংটিকে পরিবর্তন করে না,
// বরং নতুন একটি স্ট্রিং রিটার্ন করে।

// ❗ এটি একই কাজ করে যা + অপারেটর করে, যেমন:
// let newStr2 = str + " World";
// console.log(newStr2); // Output: Hello World

// 🔁 আপনি একাধিক স্ট্রিং একসাথে concat করতে পারেন:

// let sentence = "I ".concat("am ", "learning ", "JavaScript!");
// console.log(sentence); // Output: I am learning JavaScript!

// 📌 8. trim()
// 👉 একটি স্ট্রিং-এর শুরু এবং শেষের অতিরিক্ত স্পেস (whitespace) কেটে ফেলে।

// let str = "         Hello          ";
// let trimmed = str.trim();

// console.log(trimmed); // Output: Hello

// Most Important

// 📌 9. charAt(index)

// 👉 স্ট্রিং-এর নির্দিষ্ট ইনডেক্সে থাকা ক্যারেক্টার রিটার্ন করে।

// let str = "javascript";
// let newStr = str.charAt(0);

// console.log(newStr); // Output: j

// 🔍 Explanation:
// charAt() মূলত str[0] এর মতোই কাজ করে —
// অর্থাৎ নির্দিষ্ট index-এ থাকা ক্যারেক্টার রিটার্ন করে।

// ✅ Similar to:
// console.log(str[0]); // Output: j

// ⚠️ তবে:
// যদি ইনডেক্স string-এর range এর বাইরে হয়...

// console.log(str.charAt(100)); // Output: "" (empty string)
// console.log(str[100]); // Output: undefined

// তাই পুরনো ব্রাউজার বা ভুল ইনডেক্স হ্যান্ডেল করতে চাইলে charAt() নিরাপদ।

// 📌 10. charCodeAt(index)
// 👉 স্ট্রিং-এর নির্দিষ্ট ইনডেক্সে থাকা ক্যারেক্টারের Unicode (ASCII code) রিটার্ন করে।

// let str = "javascript";
// let newStr = str.charCodeAt(0);

// console.log(newStr); // Output: 106

// console.log("a".charCodeAt(0)); // 97
// console.log("A".charCodeAt(0)); // 65

// 📌 ASCII / Unicode Code কি?
// এবং এটা জানা কেন জরুরি?

//🔤 ASCII কি?
// ASCII (American Standard Code for Information Interchange) হলো:

// একটি প্রাচীন কোডিং সিস্টেম যেখানে প্রতিটি ক্যারেক্টারকে (letter, digit, symbol) একটি নাম্বার দিয়ে represent করা হয়।

// charCodeAt() দিয়ে ASCII কোড বের করতে পারো
// let char = "a";
// console.log(char.charCodeAt(0)); // Output: 97

//🧠 এখন প্রশ্ন — এটা জানা জরুরি কেন?

// 1️⃣ কম্পিউটার ক্যারেক্টার বুঝে না, বুঝে নাম্বার
// তুমি "A" লিখো, কিন্তু JS বা কম্পিউটার সেটাকে 65 হিসেবেই রাখে।

// "A" === 65; // false, কিন্তু internally "A" → 65

// 2️⃣ ক্যারেক্টার নিয়ে কোনো তুলনা (compare), গণনা, হিসাব করতে গেলে তুমি আসলে নাম্বার নিয়ে কাজ করছো
// "a" > "A"; // true — কারণ 'a' = 97, 'A' = 65

// 3️⃣ এটা জানলে তুমি ক্যারেক্টার দিয়ে logic build করতে পারো (e.g. encrypt, shift, sort, match)
// let ch = "d";
// let shifted = String.fromCharCode(ch.charCodeAt(0) + 1);
// console.log(shifted); // Output: e

// 4️⃣ A-Z, a-z, 0-9 এর range বুঝে কন্ডিশন লিখতে পারো
// let ch = "K";
// if (ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90) {
//   console.log("Capital Letter");
// }

// 📌 Unicode কি?
// Unicode হলো ASCII-এর আধুনিক ও বড় সংস্করণ
// – যেখানে ইংরেজি ছাড়াও চাইনিজ, আরবি, বাংলা সহ সব ক্যারেক্টারের নাম্বার আছে।

// JavaScript এ charCodeAt() → Unicode system ফলো করে।
