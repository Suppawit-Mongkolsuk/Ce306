let Productprice = 1500
let Discount = 20

let finalPrice = (Productprice - (Productprice * (Discount/100)))
console.log(finalPrice);

if(finalPrice <= 0){
    console.log("Price: 0")
}
else if(finalPrice <= 500){
    console.log("บวกค่าจัดส่ง 50")
    console.log("ราคาสุทธิ:",(finalPrice+50))
}
else{
    console.log("ได้รับส่วนลดพิเศษ 10%")
    console.log("ราคาสุทธิ:",(finalPrice - (finalPrice*(10/100))))
}