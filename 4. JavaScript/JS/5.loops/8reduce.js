const myNums = [1,2,3]

// const myTotal = myNums.reduce( (accumulator , currentValue) => {
//     console.log(`accumulator: ${accumulator} and Current Value: ${currentValue}`)
//     return accumulator + currentValue
// },0) 
// for first iteration accumulator needs a initial value here given 0

const myTotal = myNums.reduce( (acc,curr) => acc+curr , 0)

console.log(myTotal)

const shoppingCart = [
    {
        itemName: 'js course',
        price: 2999
    },
    {
        itemName: 'py course',
        price: 5999
    },
    {
        itemName: 'mobile dev course',
        price: 12999
    },
    {
        itemName: 'data science course',
        price: 4999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => (acc + item.price),0)

console.log(priceToPay)