console.log("belive");


//java script mapping operator
var array =[1,2,3,45]
var output =array.map(
    function(element){
        return element;
    }
)
console.log(output)

//filter operator
var array1=[1,2,3,5,2,6] 
var output1 = array1.filter(
    function(element){
        return element>2;
    }
)
console.log(output1);

//every(), sum()
//checks weather the elements in array satisfies the condition if atleast 1 is being failed then it will return false
// some() is wise versa of the every
var output3= array1.every(
    function(element){
        return element==1;
    }
)
console.log(output3)

//Indexof() , lastindexof()-returns latest position of duplicate elements
var data4=[1,2,3,4,5,6,7,4]
console.log(data4.indexOf(4));
console.log(data4.lastIndexOf(4));

//Json feautures stringify() Tries to convert an object which we have to json
var obje ={
    name:'sagar',
    age:20

}
var json =JSON.stringify(obje)
console.log(json)
// Valueof()-Date feauture-prints even milliseconds
var data1= new Date()
console.log(data1.valueOf())

//ES6/ECMSScript 2015
/* Let & Const
Arrow function
classes
For..of
Default Parameter
Rest Operator
Spread Operator
Destructuring*/

//Let & const varianble declaration keyword
// var is a global level declaration
//let is a block orianted declaration
//const - when we use it we cant reasign the same name to other variable

/* Arrow function - all about simplifying the declaration*/
const user = () => console.log('hello')
// const - declaration and user is a function name
// () is for getting a parameter for specific values
// after the arroe there will be a blockof code
const user1=(num) => {return num+5}
console.log(user1(10))

//classes 
/*class user2{
    admin(){
        console.log('For admin')
    }
}
let obj = new user2();
obj.admin();

//For off
const arr=[1,2,3,4,5]
for(const a in arr){
    return a
}*/

// default operator : some times we have to send multiple variable for a single function and rest of time only 1 is enough so in such case er declar a default variable in the function so the 2nd varaible value will be the dafault value when we didnt give any other variable

function user4(name, age=20){

    console.log(name+" "+age)
}
user4('sagar',30)
user4('sagar')

//Rest operator-This is used when we need to accept any number of variables
function user5(name,...remaining){

    console.log(name+" "+remaining)
}
user5('sagar',30,"mail@gmail",'34')
user5('sagar')
//rest operator must always use at last
// rest = remaining values

//Spread operator- used to spread array of 1 array to another array
let arr1 =[1,2,3,4,5]
let arr2 =[6,7,8,9,10]
let arr3 = [...arr1,...arr2]
console.log(arr3)

//Destructuring 
let person ={
    name:"sag",
    age:20,
    gender:"male"
}
const {name , age,gender}=person;
console.log(name)
/* acttuallu we use person.name to get the data of persons name
 but when we use destructing concept we just assign all the properties to a const and assign it to person
 so we can get required information without accessing the perosn.var */

 //E7 operators
 //EXponential operators
//includes()
let person1 =[1,2,3]
console.log(person1.includes(2));
//Exponential operator - for checking power of a number
//ES8
//padStart and padend
let p ='Hello';
console.log(p.padStart(7,'*'))
console.log(p.padEnd(7,'*'))

//Object values and object entitities
let q={
    name:'sagar',
    age:20,
    address:'chennai - tamil nadu'

}
console.log(Object.entries(q))
console.log(Object.values(q))

//Async / await
//When we try to retrive or get an api data there may be a delay so to manage the delay we use this function
//to handle the http promises request

/*async() =>{
    const response = await axios.get('https://www.grabon.in/coupon-codes/159733/')
    console.log(response.data) it is non blocking
} // it works in an local host */

//Regular expression operators
let a = "  Hello world "
console.log(a.match(/[a-z]/g)) // i for camel case , ^ for not operator , g for globally

/* ES 10 functions
Flat 
Function.toString 
trimStart
trimEnd
Object.fromEntries */

let a1 = [1 ,2, 3,[2,3,4],[3,5,6,[7,8,9]]]
// flat funtion is used for flatenning the nested array to flaten array depending up on given length
// if we give flat(1) it flatents level1 means 1 nested array
console.log(a1.flat(1))
console.log(a1.flat(2))

//Function to string - to convert a function to string
function a12(num){
    console.log(num);
}
console.log(a12.toString())

// Trim start used to trim extra spaces at starting

console.log(a)
console.log(a.trimStart())

//ES11 Nullish operator
let e= null;
let e_o = e ?? 'sag';
console.log(e_o)

//OPtional chaining is a safe way to access nested object properties , evn if the property doesnt exist
 
/* let pets ={
    cat:{
        name : 'void'
    }
 }
 alert(pets.cat.name); excutable in jsbin */
 //but if we want to access an object which we didnt declare then we using optional chain operator

 let u ={
    admin(){
        console.log('I am from admin method')
    }
 }
u.admin?.()

/* ES12 
 replaceall() function
 */
let u2 ='jxvxScript'
console.log(u2.replaceAll('x','a'))
//numericssaparator
let u3=6788_837;
console.log(u3)
//logic assignment operators
// &&= and ||=
let arr5=10;
let arr6=20;
arr5 &&= arr6 // arr2=arr2 && arr1 
console.log(arr6)
