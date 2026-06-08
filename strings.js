let str='javascript';

//Lentgh of the string
console.log(str.length);
//Accessing the characters
console.log(str[5]);
//Convert into UpperCase
console.log(str.toUpperCase());
//Convert into UpperCase
console.log(str.toLowerCase());
//Checks if text exists.
console.log(str.includes("ava"));
//startsWith()
console.log(str.startsWith("java"));
//endsWith()
console.log(str.endsWith("script"));
//indexOf()
console.log(str.indexOf("s"));
//slice()
console.log(str.slice(0,3));

let string="I am Learning HTML";
console.log(string)
console.log(string.trim());
//replace
console.log(string.replace("HTML","Javascript"));
//split
console.log(str.split(""));
//reverse a string
let str1="hello";
let reverse=str1.split("").reverse().join("");
console.log(reverse);

//Check if the string is a palindrome
let name ='Sai';
let rev =str.split("").reverse().join("");
console.log(name==rev);

// count the number of words in a string.
function countWords(str){
    return str.trim().split(/\s+/).length;
}
const result=countWords("Hi I am Sai Kiran");
console.log(result);

//compare two strings
function compareStr(str1,str2){
    return str1==str2
}
console.log(compareStr("Sai kiran","saikiran"));

//check if a string contains another string.
function contains(str,substr){
    return str.includes(substr);
}
console.log(contains("I am Learning JavaScript","I am"));

//count the number of characters in a string
function count(str){
    return str.replace(/\s/g,'').length;
}
console.log(count("Sai kiran"));

//extract a substring from a string.
function extract(str,start,end){
    return str.substring(start,end);
}
console.log(extract("Hello",0,2))

//repeat a string multiple times.
function repeat(str,count){
    return str.repeat(count);
}
console.log(repeat("Welcome ",2))

//remove spaces from a string.
function removeSpaces(str){
    return str.replace(/\s+/g,'');
}
console.log(removeSpaces("Welcome to my page"));

//find the index of a substring in a string.
function indexOf(str,substr){
   return str.indexOf(substr);
}
console.log(indexOf("Hello World", "W"))
