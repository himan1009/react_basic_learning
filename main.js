let a=false;
let b=true;

console.log(a && b);


function getName(name){
    return name;
}

console.log(a && getName("himan"));
console.log(a || b);
console.log(a || getName("himan"));


// TEMPLATE LITERALS
// use for manipulation of string

let name1="john";
let name2="does";
console.log(name1+" "+name2);

console.log(`${name1} ${name2}`);


// TERNARY OPERATOR
let showReciepe=true;
function getRecipeOne(recipeName){
    return recipeName;
}
function getRecipeTwo(recipeName){
    return recipeName;
}

if(showReciepe){
    console.log(getRecipeOne("pizza"));
}
else{
    console.log(getRecipeTwo("coke"));
}

// use of the ternary operator
showReciepe ? console.log(getRecipeOne("pizza")) : console.log(getRecipeTwo("coke")); 


// DESTRUCTURING 
const id=1;
const productName="product Apple Watch";
const rating=5;

const product={
    id:id,
    productName:productName,
    rating:rating,
};

console.log(product);


const product2={
    desc:"product 2 desc",
    id,
    productName,
    rating
}

// normal value
const getProductTwoDesc=product2.desc;
console.log(getProductTwoDesc);

// use of destructuring
const {desc}=product2;
console.log(desc);


const array=[1,2,3];
let getArrayFirst=array[0];
let getArraySecond=array[1];

console.log(getArrayFirst, getArraySecond);

const [arrayFirst, arraySecond]=array;
console.log(arrayFirst, arraySecond);


// DEFAULT PARAMETERS , SPREAD OPERATORS, REST OPERATOR 
function mulTwoNum(num1, num2){
    return num1*num2;
}

console.log(mulTwoNum(2, 3));

function mulTwoNum2(num1=2, num2=3){
    return num1*num2;
}

console.log(mulTwoNum2());
console.log(mulTwoNum2(10, 5));


const array2=[2, 3, 4, 5];
const array3=[1, 4, 5];
console.log([...array2]);
console.log([...array2, ...array3]);


function getInfo(a, b, ...c){
    console.log(a, b, c);
    
    return 'himan';
}

console.log(getInfo(1, 2, 3, 4, 5));


// ES6 array methods


