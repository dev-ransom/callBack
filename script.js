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

let order = (Fruit_name, callproduction) => {
    let ord_message = `${stocks.Fruits[Fruit_name]} was selected`;
    setTimeout(() => {
        console.log(ord_message);
        callproduction();
    }, 2000);
};



let production = () => {
    let pro_message = 'start production'
    setTimeout(() => {
        console.log(pro_message);
        setTimeout(() => {
            console.log('the fruit has been chopped!');
            setTimeout(() =>{
                console.log(`${stocks.Liquids[0]} and ${stocks.Liquids[1]} was added`);
                setTimeout(()=>{
                    console.log('The machine was started');
                    setTimeout(() =>{
                        console.log(`ice cream was placed on ${stocks.Holders[1]}`)
                        setTimeout(()=>{
                            console.log(`${stocks.Toppings[1]} was added as toppings`);
                            setTimeout(()=> {
                                console.log('Serve Ice Cream');
                            }, 2000);
                        }, 3000);
                    }, 2000)
                }, 1000);
            }, 1000);
        }, 2000);
    },0);
};

order(2, production);