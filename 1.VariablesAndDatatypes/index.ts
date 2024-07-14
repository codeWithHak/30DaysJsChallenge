// Day:1 Variable And Data Types

// Task/Activities

// Activity 1: Varaible Declaration

// Task 1: 
var myAge:number = 18
console.log(myAge);

// Task 2: 
let myName:string = "Huzair"
console.log(myName);


 

// Activity 2: Constant Declaration

// Task 3:
const isPaid:boolean = true


// Activity 3: Data Types

// Task 4:
// Number Type
const myAge1:number = 18

// String Type
const myName1:string = "Huzair"

// Array Type
const myArr:number[] = [1,2,3]

// Interface Type
interface IPerson {
    name:string,
    email:string,
    password:number
}

interface IAdmin extends IPerson {
    role:"Admin" | "Manager" | "User" 
}

// Union Type
type TPerson = {
    name:string,
    email:string,
    password:number,
}

type TAdmin = {
    role:"Admin" | "Manager" | "User" 
}

type TAdminPerson = TPerson & TAdmin & {
   isPresent: boolean
}

// Object Type
const myObj:{name:string,age:number} = {

    name:"Huzair",
    age:18  
}

// Object Type Using Interface
const myObj1:IPerson ={
    name:"Huzair",
    email:"huzairahmedkhan@gmail.com",
    password:123,
}


// Object Type Using Multiple Union Types

const myObj3:TAdminPerson = {
    name:"h",
    email:"h@h.com",
    password:13,
    role:"Admin",
    isPresent:true
}

















// data types

// string 

// let myName:string = "Huzair"
// let myAge:number = 18
