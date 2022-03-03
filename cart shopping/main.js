// const pruductPrices = {
//     "apple" : 2,
//     "orange" : 3
// }
cart = {
    items= [] ,
    totalPrice = 0,
    addToCart(item){
        this.items.push(item)
    },
    removeFromCart(currentItem){
        for(let i= 0; i< this.items.length; i++){
            if(this.items[i].name == currentItem){
                this.items.splice(i, 1)
                break
            }
        }
    }
}
console.log(cart)