// javascript classes

// class Pizza{
//     constructor(pizzaSize)
//     {
//         this.size = pizzaSize;
//         this.crust = "original";
//         // this.type = pizzaType;
//         this.toppings = [];
//     }

    // get pizzaCrust()
    // {
    //     return this.crust;
    // }

    // set pizzaCrust(pizzaCrust){
    //     this.crust = pizzaCrust;
    // }
    // getCrust()
    // {
    //     return this.crust;
    // }

    // setCrust(pizzaCrust){
    //     this.crust = pizzaCrust;
    // }

//     getToppings()
//     {
//         return this.toppings;
//     }

//     setToppings(topping)
//     {
//         this.toppings.push(topping);
//     }

//     bake()
//     {
//         console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza`);
//     }
// }

// // const myPizza = new Pizza(" chicken loaded", "small");
// // // myPizza.crust = "thin";
// // myPizza.setCrust("thin");
// // myPizza.bake();
// // // console.log(myPizza.crust);
// // myPizza.setToppings("sausages");
// // myPizza.setToppings("olives");
// // console.log(myPizza.getCrust());
// // console.log(myPizza.getToppings());


// class SpecialtyPizza extends Pizza{   //child class
//     constructor(pizzaSize){
//         super(pizzaSize);
//         this.type = "The Works";
//     }
//     slice(){
//         console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
//     }
// };

// const mySpecialty = new SpecialtyPizza("medium");
// mySpecialty.slice();


// class Pizza{
//     constructor(pizzaSize)
//     {
//         this.size = pizzaSize;
//         this.crust = "original";
//     }

//      getCrust()
//     {
//         return this._crust;   // underscore represents private
//     }

//     setCrust(pizzaCrust){
//         this._crust = pizzaCrust;
//     }
// };


// Factory Function - only this function can access these variables i.e private variabless
// function pizzaFactory(pizzaSize)
// {
//     const crust = "original";
//     const size = pizzaSize;
//     return{
//         bake : () => console.log(`Baking a ${size} ${crust} crust pizza`)
//     };
// }

// const myPizza = pizzaFactory("small");
// myPizza.bake();

class Pizza{
    crust = "original"; //public
    #sauce = "traditional"; // private
    #size;
        constructor(pizzaSize)
        {
            this.#size = pizzaSize;
        }
    
         getCrust()
        {
            return this.crust;  
        }
    
        setCrust(pizzaCrust){
            this.crust = pizzaCrust;
        }

        hereYouGo(){
            console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
        }
    };

    const myPizza = new Pizza("large");
    myPizza.hereYouGo();
    console.log(myPizza.getCrust()); // public fields
    console.log(myPizza.sauce);  // undefined
    // console.log(myPizza.#sauce); // can't access through dot notation : private


    // can i use website