// Objects

//Key value pairs in curly braces

// const myObj = { Name : "Neharika"};

// const anotherObj = { 
//     alive : true,
//     answer : 42,
//     hobbies : ["Eat", "Sleep", "Code"],
//     beverage : {   // nested object
//         morning : "coffee",
//         afternoon : "Iced Coffee"
//     },

//     //Methods
//     action : function()   // anonymous function
//     {
//         return `Time for ${this.beverage.morning}`;
//     }
// };

// console.log(myObj.Name);
// console.log(anotherObj.alive);
// console.log(anotherObj.hobbies);
// console.log(anotherObj.hobbies[0]);
// console.log(anotherObj["alive"]);
// console.log(anotherObj.beverage.afternoon);

// console.log(anotherObj.action());


const vehicle = {
    wheels : 4,
    engine : function(){
        return "Vrooooom !";
    }
};

// const truck = Object.create(vehicle); // Inheritance
// truck.doors = 2;
// console.log(truck);
// console.log(truck.wheels);  // Inheritance
// console.log(truck.engine());

// const car = Object.create(vehicle);
// car.doors = 4;
// car.engine = function(){
//     return "Whoosh !";
// }
// console.log(car.engine());

// const tesla = Object.create(car);
// tesla.engine = function(){
//     return "shhhhh !";
// }
// console.log(tesla.wheels);
// console.log(tesla.engine());


const band = {
    vocalist : ["Kim Seokjin","Kim Taehyung","Jeon Jungkook","Park Jimin"],
    Rapper : ["Kim Namjoon","Min Yoongi","Jung Hoseok"]
};


// delete band.drums;

// console.log(band.hasOwnProperty("visuals"));
// console.log(Object.keys(band));
// console.log(Object.values(band));

// for(let job in band){
//     // console.log(band[job]);
//     console.log(`On ${job} , its ${band[job]} !`);
// }

//                        Destructuring Objects

// const { vocalist : myVariable, Rapper : myRapper } = band;
// console.log(myVariable);
// console.log(myRapper);

const { vocalist,Rapper } = band;
console.log(vocalist);
console.log(Rapper);

function sings({vocalist}){
    return `${vocalist} sings`;
}
console.log(sings(band));