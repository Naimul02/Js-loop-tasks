// 61 to 100 : odd numbers using while loop

let num = 61;
while (num <= 100) {
  if (num % 2 === 1) {
    // console.log("This is odd number", num);
  }
  num++;
}
// Find all the even numbers from 78 to 98.
let number = 78;
while (number <= 98) {
  if (number % 2 === 0) {
    console.log("This is even number : ", number);
  }
  number++
}

// Display sum of all the odd numbers from 81 to 131.
let num1 = 81;
let sum1 = 0;
while (num <= 131) {
  if (num % 2 === 1) {
    console.log(num);
    sum = sum + num;
    console.log(sum);
  }
  num++;
}
console.log("The total number is : ", sum);

// Display sum of all the even numbers from 206 to 311.
let num2 = 206;
let sum2 = 0;
while(num <= 311){
    if(num % 2 === 0){
        console.log(num);
        sum = sum + num;
        console.log(sum);
    }
    num++
}
console.log('The total number is : ' , sum);

// for loop
// 61 to 100 : odd numbers using while loop

for (let i = 61; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log("this number is odd : ", i);
  }
}

// Find all the even numbers from 78 to 98.

for (let i = 78; i <= 98; i += 2) {
  console.log(i);
}

// Display sum of all the odd numbers from 91 to 129.
let sum3 = 0;
for (let i = 91; i <= 129; i += 2) {
  console.log(i);
  sum = sum + i;
  console.log(sum);
}

// Display sum of all the even numbers from 51 to 85.
let sum4 = 0;
for (let i = 51; i <= 85; i++) {
  if(i % 2 === 0){
    console.log(i);
    sum = sum + i;
    console.log(sum);
  }

}

// Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
for(let i = 1 ; i <= 40 ;i++){
    if(i % 2 === 1){
      continue
    }
    console.log(i);
}

// display odd number from 55 to 85 and skip the numbers divisible by 5.
for (let i = 55; i <= 85; i += 2) {
  if (i % 5 === 0) {
    continue;
  }
  console.log(i);
}

// Write a loop 1 to 200. Use break to exit the loop once you find 100.
for (let i = 1; i <= 200; i++) {
  console.log(i);
  if (i === 100) {
    break;
  }
}

// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
let sum = 0;
for (let i = 1; i <= 200; i++) {
  console.log("i : ", i);
  sum = sum + i;
  
  if (sum  >=  100) {
    break;
  }
  console.log("total : ", sum);
}

let num5 = 21;
while(num >= 15){
    console.log(num);
    num--;
}


