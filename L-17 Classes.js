// javascript classes

class Pizza{
    constructor(pizzaType,pizzaSize)
    {
        this.size = pizzaSize;
        this.crust = "original";
        this.type = pizzaType;
        this.toppings = [];
    }

    // get pizzaCrust()
    // {
    //     return this.crust;
    // }

    // set pizzaCrust(pizzaCrust){
    //     this.crust = pizzaCrust;
    // }
    getCrust()
    {
        return this.crust;
    }

    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }

    getToppings()
    {
        return this.toppings;
    }

    setToppings(topping)
    {
        this.toppings.push(topping);
    }

    bake()
    {
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza`);
    }
}

const myPizza = new Pizza(" chicken loaded", "small");
// myPizza.crust = "thin";
myPizza.setCrust("thin");
myPizza.bake();
// console.log(myPizza.crust);
myPizza.setToppings("sausages");
myPizza.setToppings("olives");
console.log(myPizza.getCrust());
console.log(myPizza.getToppings());