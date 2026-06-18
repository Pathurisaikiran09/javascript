//Creating Objects 

let person ={
    name: "Sai",
    age: "20",
    village:"Ghantavarigudem",
}
console.log(person)

//Accessing Object properties
//using .dot notation
console.log(person.name)

//using bracket notation
console.log(person["village"])

//Adding new properties
person.email="sai123@example.com";
console.log(person)

//Updating properties
person.age="21";
console.log(person)

//deleting properties
delete person.village;
console.log(person);

//objects with methods
let capitals={
    Andhrapradesh:"Amaravati",
    Telangana:"Hydrebad",
    Karnataka:"Bangalore",
    Maharastra:"Mumbai",

    location:function(){
        console.log("I live in "+ this.Andhrapradesh)
    }
}
console.log(capitals.location())

//Nested objects
const student={
    name:"Raju",
    year:"2",
    address:{
        city:"hydrebad",
        State:"Telangana",
    },
        skills:[
        "HTML",
        "CSS",
        "Javascript",
    ]
}
console.log(student.address)
console.log(student.skills[1])