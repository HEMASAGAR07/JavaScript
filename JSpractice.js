console.log("belive");


//javascript mapping operator
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
