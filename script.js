// objects for productions
// names of fruit = strawberry, grapes, banana, apple
// liquids = water and ice
// Holders = cone , cup and stick
// toppings = chocolate and peanuts


const stocks = {
    Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    Liquids: ['water', 'ice'],
    Holders: ['cone', 'cup', 'stick'],
    Toppings: ['chocolate', 'peanuts'],
};
// arrow function
let is_shop_open = false;

let order = (time, work) =>{
    return new Promise((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work())
            }, time)
        }else{
            reject(console.log('our shop is closed'))
        }
        
    })
}
// main promises
order(2000, ()=> console.log(`${stocks.Fruits[0]} was selected`))

.then(()=>{
    return order(0, ()=> console.log('production has started'))
})

.then(() =>{
    return order(2000, ()=> console.log('The fruit has been chopped'))
})

.then(() =>{
    return order(1000, ()=> console.log(`${stocks.Liquids[0]} and ${stocks.Liquids[1]} were selected`))
})

.then(() =>{
    return order(1000, ()=> console.log('start the machine'))
})

.then(()=>{
    return order(2000, ()=> console.log(`The ice was placed on ${stocks.Holders[2]}`))
})

.then(()=> {
    return order(3000, ()=> console.log(`${stocks.Toppings[1]} was selected as toppings`))
})

.then(() =>{
    return order(2000, ()=> console.log('Serve the ice cream to the customer'))
})

.catch(()=>{
    console.log('customer left the shop')
})

// regular function 
// let order = function(time, work){
//     return new Promise(function(resolve, reject){
//         if(is_shop_open){
//             setTimeout(function(){
//                 resolve(work())
//             }, time)
//         }else{
//             reject(console.log('our shop is closed'))
//         }
//     })
// }
// // main promise
// order(2000, function(){
//     console.log(`${stocks.Fruits[2]} was selected`)
// })

// .then(function(){
//     return order(0o00, function(){
//         console.log('production has started')
//     })
// })

// .then(function(){
//     return order(2000, function(){
//         console.log('the fruit has been chopped')
//     })
// })

// .then(function(){
//     return order(1000, function(){
//         console.log(`${stocks.Liquids[0]} and ${stocks.Liquids[1]} were selected`)
//     })
// })

// .then(function(){
//     return order(1000, function(){
//         console.log('start the machine')
//     })
// })

// .then(function(){
//     return order(2000, function(){
//         console.log(`The ice cream was placed on ${stocks.Holders[1]}`)
//     })
// })

// .then(function(){
//     return order(3000, function(){
//         console.log(`${stocks.Toppings[0]} was selected`)
//     })
// })

// .then(function(){
//     return order(2000, function(){
//         console.log('serve the ice cream')
//     })
// })

