const products = [
    {
        name:"TV",
        price: 2000,
        discount: 0.1
    },
    {
        name:"com",
        price: 3000,
        discount: 0.1
    },
    {
        name:"mac",
        price: 4000,
        discount: 0.1
    },
    {
        name:"apple",
        price: 5000,
        discount: 0.1
    },
    {
        name:"coco",
        price: 6000,
        discount: 0.2
    }
];

function calculateTotal(){
    let total = 0;

    products.forEach(function(Products,index) {
        let finalprice = Products.price - (Products.price*Products.discount);
        total += finalprice
        console.log(`ของชิ้นที่:${index + 1} หลังหักส่วนลดราคา: ${finalprice}`)
        
    })

    console.log(`Total price after discount: ${total}`);
}
calculateTotal()