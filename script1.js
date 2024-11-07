


const Numbers=[84,93,893,32,42,23]
let oddNumbers=[]
let evenNumbers=[]
for(let i=0; i<Numbers.length;i++){
    if(Numbers[i]%2 !=1){
       evenNumbers.push(Numbers[i]);
        
    }else{
      oddNumbers.push(Numbers[i]) ;
    }
}

// console.log(oddNumbers)
// console.log(evenNumbers)

function fact(n){
    if(n==0){
        return 1;
    }
    else{
       return n=n*fact(n-1);
    }
}
// console.log(fact(5))

sum=0;
for(let i=0; i<=10; i++){
    sum=sum+i
}
// console.log(sum)

factorials=1;

for(i=1;i<=5;i++){
    factorials=factorials * i
}
// console.log(factorials)

let sumarray=[1,2,3]

let array1=0;
for(let i=0; i<sumarray.length; i++){
    array1=array1 + sumarray[i];
}

// console.log(array1)

let array2=[1,1,1]
let suma=0;
let n=array2.length
for(let i=0; i<array2.length;i++){
suma=suma+array2[i]
}

    suma=suma/n

// console.log(suma)

function fiba(n){
    if(n===0)
    return 0;
if(n===1)
return 1;
return fiba(n-1)+ fiba(n-2)
}

// console.log(fiba(3))


const arr = [12, 35, 10, 35, 10, 36, 1];  
function findSecondLargest(arr) { 
	if (arr.length < 2) { 
		return "Invalid Input"; 
	} 
	arr.sort(); 
	for (let i = arr.length - 2; i >= 0; i--) { 
		if (arr[i] !== arr[arr.length - 1]) { 
			return "The second largest element is " + arr[i]; 
		} 
	} 
	return "There is no second largest element"; 
} 
// Driver program to test the function 
// const arr = [12, 35, 10, 35, 10, 36, 1]; 

// Output: The second largest element is 34 
// console.log(arr.sort())
// console.log(findSecondLargest(arr));

let arrange=[80,57,39,2,62,3,4]

console.log( arrange.sort())

// console.log('second highest '+ arrange[arrange.length-2])

const arr1=[2,3,2,3]

function largest(){
    if(arr1.lenght<2){
        return "INvalid array"
    }
    arr1.sort()

    for(let i=arr1.length-2; i>=0; i--){
        if(arr1[i] !== arr1[arr1.length-1]){
            return `the largest number is ${arr1[i]}`
        }
    
    }
    return "there is not a largest number"
}

console.log(largest());

function removeVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i].toLowerCase())) {
            result += str[i];
        }
    }

    return result;
}

console.log(removeVowels("hello world")); // Output: "hl wrld"
