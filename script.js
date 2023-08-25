// // objects for productions
// // names of fruit = strawberry, grapes, banana, apple
// // liquids = water and ice
// // Holders = cone , cup and stick
// // toppings = chocolate and peanuts


const stocks = {
    Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    Liquids: ['water', 'ice'],
    Holders: ['cone', 'cup', 'stick'],
    Toppings: ['chocolate', 'peanuts'],
};
// arrow function
let is_shop_open = true;

let toppings_choice = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(console.log("which toppings do you like? "))
        }, 3000)
    })
}

async function kitchen(){
    console.log(" A ")
    console.log(" B ")
    console.log(" C ")
    await toppings_choice()
    console.log(" D ")
    console.log(" E ")
};

kitchen()

console.log("doing dishes")
console.log("cleaning the tables")
console.log("taking others order")