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


let is_shop_open = true;

let order = (time, work) =>{
    


   return new Promise((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(() =>{
                resolve(work())
            }, time)
        }else{
            reject(console.log('our shop is closed'))
        }
   })
}
// original promise
order(2000, ()=> console.log(`${stocks.Fruits[0]} was selected`))

// thens
.then(()=>{
    return order(0, ()=> console.log('production has started'))
})

.then(() =>{
    return order(2000, ()=> console.log('the fruit has been chopped'))
})

.then(() =>{
    return order(2000, ()=> console.log(`${stocks.Liquids[0]} and ${stocks.Liquids[1]} was selected`))
})

.then(function(){
    return order(1000, function() console.log())
})