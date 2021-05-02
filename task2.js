#task 1
const isEven = (num) => {
    if (num % 2 == 0) return true;
    else return false;
}
alert(isEven(5));


  
  
  
 #task 2
const isEven = (num) => {
   return num%2==0;
}

 
 const getOdd = (arr) => {
    let oddArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (!isEven(arr[i])) oddArray.push(arr[i]);
       }
    return oddArray;
  }

  console.log(getOdd([3, 5, 6, 2, 7, 8]));
  
  
  
  
  
  
#task 3
   
   const getMax= (array)=>{
let largest=0;
for (let i=0; i<array.length; i++){
if(array[i]>largest) largest =array[i]
}
return largest;
}
console.log(getMax([3, 5, 10, 2, 50, 8]));
   
   
   
   
#task 4
    const stringContain = (str1, str2) => {
    if (str1.includes(str2)) return true;
    else return false;
}
alert(stringContain('beatiful','js'))




#task 5 ***
const cap= (str)=>{
    let str1= str[0].toUpperCase()
    for( i=1; i<str.length; i++){
    if(str[i].includes(' ')) str= str[i+1].toUpperCase();
    
    return str1+ str}}
    console.log(cap("i love syria"))


#task 6
const arrayContains = (arr1, arr2) => {
    for (i=0; i<arr1.length; i++){
    if (arr1.indexOf(arr2[i])== -1) return false;
    else return true
    }
   
   }
   const arr1 = [ 1, 2, 3 ];
   const arr2 = [ 1, 2, 3, 2, 7, 0, 1, 10 ];
   console.log(arrayContains(arr1, arr2))
   
   
   
   
#task 7***
const getSequence = (number) => {
  const arr = new Array(Math.abs(number));
  if (number > 0) {
    for (let i = 0; i == number; i++) {
      let num = number - i;
      arr.push(num);
    }
  } else if (number < 0) {
    for (let i = 0; i == number; i--) {
      let num = number + i;
      arr.push(num);
    }
  }

  return arr;
}

console.log(getSequence(5))





#task 8
function getSlug(str){
str=str.split(" ");
str=(str.join("-")).toLowerCase()l
return str
}
console.log(getSlug('I Love Syria'))






#task 9
const message = 'hello';
foo();
function foo() {
    alert(message);
}
showing the content of massage because we used const

===========================================================
const message = 'hello';
foo();
function foo() {
    let message = 'hi'
    alert(message);
}
showing the message but after changing it into hi, whatever what it was contain., because we used let
===========================================================
foo();
const message = 'hello';
function foo() {
    alert(message);
}
it will cause an error because we called the function which has message befor we identify it 
===========================================================
foo(); *********
function foo() {
    alert(message);
}
var message = 'hello';
undefined
===========================================================
if (true) {
    let message = 'hello';
}
alert(message);
message is not defined , because the let has no global scope so alert cannot see the message decliration inside the block
===========================================================
if (true) {********
    var message = 'hello';
}
alert(message); 
it will show the message content, because the var has a global scope
===========================================================
{
    let message = 'hello';
    message = 'hi';
}
alert(message);
 message is not defined because we defined the message in a block so alert cannot see neither "hi" nor " hello"
===========================================================
let message = 'hello';
{
    message = 'hi';
}
alert(message);
will show hello, because we defined the message in a block so alert can see just "hello"
===========================================================
foo();
function foo() {
    {
        const message = 'hello';
    }
    
    alert(message);
}
message is not defined, because we defined the message in a block so alert cannot see it
===========================================================
foo();******** what is the difference between this and last one
function foo() {
    {
        var message = 'hello';
    }
    
    alert(message);
}
it will show the content of message
===========================================================
foo();
function foo() {
    {
        var message = 'hello';
    }
}
alert(message);
message is not defined
===========================================================
    
    
    
    
    
    
    
    
    
    
