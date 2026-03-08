 let productlist=[
    {   title:"All Natural Style Chicken Meatballs",
        co_name:"NestFood",
        image:"./product_image/pizza_img.jpg",
        price:'$52.85',
    },
    {
        title:"Angie's Sweet & salty kettle Corn",
        co_name:"Country Crock",
        image:"./product_image/meatball.png",
        price:"$48.85",
    },
    {
        title:"Angie's Sweet & salty kettle Corn",
        co_name:"Country Crock",
        image:"./product_image/Angie's  Sweet & Salty Kettle Corn.png",
        price:"$48.85",
    },
    {
        title:"Angie's Sweet & salty kettle Corn",
        co_name:"Country Crock",
        image:"./product_image/Foster Farms TakeoAngie's  Sweet & Salty Kettle Cornut Crispy Classic.png",
        price:"$48.85",
    },
    {
        title:"Angie's Sweet & salty kettle Corn",
        co_name:"Country Crock",
        image:"./product_image/Blue Almonds Lightly Salted Vegetables.png",
        price:"$48.85",
    },
    {
        title:"Angie's Sweet & salty kettle Corn",
        co_name:"Country Crock",
        image:"./product_image/Chobani Complete Vanilla Greek Yogurt.png",
        price:"$48.85",
    },
    {
        title:"Angie's Sweet & salty kettle Corn",
        co_name:"Country Crock",
        image:"./product_image/Haagen  Caramel Cone Ice Cream Boxed.png",
        price:"$48.85",
    },
    {
        title:"Angie's Sweet & salty kettle Corn",
        co_name:"Country Crock",
        image:"./product_image/gortons beer.png",
        price:"$48.85",
    },
    {
        title:"Angie's Sweet & salty kettle Corn",
        co_name:"Country Crock",
        image:"./product_image/Encore Seafoods Stuffed Alaskan.png",
        price:"$48.85",
    },
    {
        title:"Angie's Sweet & salty kettle Corn",
        co_name:"Country Crock",
        image:"./product_image/Canada Dry Ginger Ale – 2 L Bottle.png",
        price:"$48.85",
    },
    {
        title:"Angie's Sweet & salty kettle Corn",
        co_name:"Country Crock",
        image:"./product_image/Extra virgin olive oil, canola oil, nonfat.png",
        price:"$48.85",
    },
    {
        title:"Angie's Sweet & salty kettle Corn",
        co_name:"Country Crock",
        image:"./product_image/Frozen vegetables broccoli, spinach.png",
        price:"$48.85",
    },
    {
        title:"Angie's Sweet & salty kettle Corn",
        co_name:"Country Crock",
        image:"./product_image/Frozen fruit strawberry, berries.png",
        price:"$48.85",
    },
    {
        title:"Angie's Sweet & salty kettle Corn",
        co_name:"Country Crock",
        image:"./product_image/Pre-portioned, low-fat ice cream yogurt.png",
        price:"$48.85",
    },
    {
        title:"Angie's Sweet & salty kettle Corn",
        co_name:"Country Crock",
        image:"./product_image/Dried fruit_ apricots, figs, prunes.png",
        price:"$48.85",
    },
];

const container=document.querySelector('.product-card');
cards=" ";
productlist.forEach((p)=>{
    
    cards+=
   `<div class="mystyle">
        <img src="${p.image}" class="product-img" alt='error here' />
        <div class=inner-div>
            <h1>${p.title}</h1>
            <p>${p.co_name}</p>
            <div class="bottom-div">
                <span class="txt">${p.price}</span>
                <span class="add-cart"><img src="./icons/icons8-add-to-cart-50.png" alt="error"/>Add</span>
            </div>   
        
        </div>
      
    </div> `
    container.innerHTML=cards;
});

let catagory=[
    {
    title:"Banking material",
    image:"./category_image/Baking_materials.png",
    number:11,
    },
    {
        title:'Bread and juice',
        image:"./category_image/Bread-and-juice.png",
        number:9,
    },
    {
        title:"Clothing & beauty",
        image:"./category_image/clothing_and_Beauty.png",
        number:4,
    },
    {
        title:'Deals of the Day',
        image:"./category_image/Deal.png",
        number:4,
    },
    {
        title:"Fresh SeaFood",
        image:"./category_image/Fresh_Seafood.png",
        number:10,
    },
    {
        title:"Milks and Dairies",
        image:'./category_image/Milks-and-Daires.png',
        number:5,
    },
    {
        title:"Pet Foods and Toy",
        image:"./category_image/Pet-foods-and-toy.png",
        number:7,
    },
    {
        title:"Vegetables",
        image:"./category_image/vegetables.png",
        number:6,
    },
    {
        title:"Wines and Drinks",
        image:"./category_image/wines_and_dires.png",
        number:4,
    },
    {
        title:"uncategories",
        image:"./category_image/uncategorized.png",
        number:15,

    },
];
let sidebar=document.querySelector(".product-catagory");
   let row=" ";
for(let i=0;i<catagory.length;i++){
 
    myrow=`<div class="myrow" > 
        <img src=${catagory[i].image} alt="error"/>
        <p>${catagory[i].title}</p>
        <p>${catagory[i].number}</p>
    </div>`
    row+=myrow;
    sidebar.innerHTML=row;
}

 function myFunction() {
    document.querySelector('catagory-heading').style.textDecorationLine="underline";
}

let mycards=document.querySelector(".deals-of-the-day");

let myproductli=[
    {
        title:"Organic cage grade A Large Eggs",
        co_name:"By Hambger Hel",
        price:'$21',
        image:"./Deals-of-the-day/Organic_Cage_Grade_A_Large_Eggs.png",

    },
    {
        title:"Organic cage grade A Large Eggs",
        co_name:"Hambger Hel",
        price:'$21',
        image:"Deals-of-the-day/Naturally Flavored Cinnamon Vanilla.png",
    },
    {
        title:"Organic cage grade A Large Eggs",
        co_name:"Hambger Hel",
        price:'$21',
        image:"Deals-of-the-day/Seeds of Change Organic Watermelon.png",
    },
    {
        title:"Organic cage grade A Large Eggs",
        co_name:" Hambger Hel",
        price:'$21',
        image:"./Deals-of-the-day/Nestle Coffee Mate Coffee Creamer.png",
    },
];
let  mycard="";
myproductli.forEach((p)=>{

    let productcard=
    `<div class="mycard-img">
        <img src="${p.image}" alt="error"/>
        <div class="mycard-footer">
        <h2>${p.title}</h2>
        <span> 
            <h2 class="txt txt-style">by ${p.co_name}</h2>
        </span>
        
        <div class="mycard-details  txt">
            <span style="text-decoration:underline">${p.price}</span>
            <span class=" add-to-cart  text-bg"  ><img style="height:20px;width:20px" src="./icons/shopping-cart.png" alt="error"/>Add</span>
        </div> 
        </div>  
    </div>`
    mycard+=productcard;
    
})
mycards.innerHTML=mycard; 


const addvertisement=[
    {
        title:"Everyday frest and Clean with our products",
        image:"advertisement/Fresh.png",
    },
    {
        title:"Make your Breakfast Healthy and Easy",
        image:"advertisement/Healthy_breakfast.png",
    },
    {
        title:"The best Organic Products Online",
        image:"advertisement/Organic.png",
    },
]
let addvertise=document.querySelector(".myaddvertise");
 let product_card="";
addvertisement.forEach(data=>{
   
   let addcart=
    `<div class="add-card">
        <img class="pro_card" src="${data.image}" />
        <div class="inner-content ">
            <h3 class="card-title" ">${data.title}</h3>
            <button class="card-btn ">Shop now -></button>
        </div>
    </div>`
    product_card+=addcart;
})

addvertise.innerHTML=product_card;

let category_shopping=[
    {
        image:"./shop_by_categories/milks.png",
        title:"Miks and Daires",
        amount:"5 items",

    },
    {
        image:"./shop_by_categories/wines.png",
        title:"Wines and Alchohols",
        amount:"4 items",

    },
    {
        image:"./shop_by_categories/clothing_and_beauty.png",
        title:"Clothing and beauty/petfood.png",
        amount:"4 items",

    },
    {
        image:"./shop_by_categories/petfood.png",
        title:"Pet foods and Toy ",
        amount:"2 items",

    },
    {
        image:"./shop_by_categories/fastfood.png",
        title:"packaged fast food",
        amount:"11 items",

    },
    {
        image:"./shop_by_categories/Baking_materials.png",
        title:"Baking Materials",
        amount:"11 items",

    },
    {
        image:"./shop_by_categories/vegetable.png",
        title:"Vegetable and Tubers",
        amount:"6 items",

    },
    {
        image:"./shop_by_categories/fresh-food.jpg",
        title:"Fresh seaFood",
        amount:"5 items",

    },
];

let shopping_catagory=document.querySelector('.shop_by_category');
 let mycatagory="";
category_shopping.forEach((p)=>{
 
  cat_section =
    `<div class="mycat  ">
        <img src="${p.image}" alt="error" class="mycat-img">
        <p class="txt-color">${p.title}</p>
        <p class="txt-no">${p.amount}</p>
    </div>
    ` 
    mycatagory+=cat_section;
});

shopping_catagory.innerHTML=mycatagory;

let multiple_product={
   top_selling :[{
    title:'All natural style Chicken meatballs',
    image:'./top_selling/All Natural Style Chicken Meatballs.png',
    price:'$52.85',
    prev_price:'$55.80',
},
{
    title:"Angie's Sweet & salty kettel corn ",
    image:"./top_selling/Angie's  Sweet & Salty Kettle Corn.png",
    price:'$48.85',
    prev_price:'$23.85',
},
{
    title:"Gorton's Beer Battered Fish Fillets",
    image:"./top_selling/Gorton’s Beer Battered Fish Fillets.png",
    price:'$23.85',
    prev_price:'$25.60',
}],

 trending_products :[{
    title:"Seeds of Change Organic Watermelon ",
    image:'./Trending/Seeds of Change Organic Watermelon.png',
    price:'$61.50',
    prev_price:'$66.00',
},
{
    title:"Frozen vegetables broccoli spinach",
    image:'./Trending/Frozen vegetables broccoli,spinach.png ',
    price:'$71.00',
    prev_price:'$75.00',
},
{
    title:"Gorton's Beer Battered Fish Fillets",
    image:'./Trending/Gorton’s Beer Battered Fish Fillets.png ',
    price:'$23.85',
    prev_price:'$25.60',
}],
 recent_added:[{
    title:"Seeds of changed Organic Red Rice",
    image:'./recentlyadded/Seeds of Change Organic Red Rice.png',
    price:'$23.85',
    prev_price:'$25.60',
},
{
    title:'All natural style Chicken meatballs',
    image:'./recentlyadded/All Natural Style Chicken Meatballs.png',
    price:'$52.85',
    prev_price:'$55.80',
},
{
    title:"Angie's Sweet & salty kettel corn ",
    image:"./recentlyadded/Angie's  Sweet & Salty Kettle Corn.png",
    price:'$48.85',
    prev_price:'$23.85',
}],
top_rated:[
{
    title:"Blue ALmonds Lightly Salted Vegetables",
    image:'./top_rated/Blue Almonds Lightly Salted Vegetables.png',
    price:'$23.85',
    prev_price:'$25.80',
},
{
    title:"Ogganic Cage Grade A Large Eggs",
    image:'./top_rated/Organic Cage Grade A Large  Eggs.png',
    price:'$21.00',
    prev_price:'$24.00',
},
{
    title:'All natural style Chicken meatballs',
    image:'./top_rated/Organic Cage Grade A Large  Eggs.png',
    price:'$52.85',
    prev_price:'$55.80',
}],
};

let products_diversity= document.querySelector('.product_diversity');
let product_div="";
for (let keys in multiple_product){
    `<h1>${keys}</h1>`
    multiple_product[keys].forEach((Data)=>{
        
       product_div+= 
       `<div class="diverse_products">
            <p class="title">${Data.title}</p>
            <img class="myimg" src='${Data.image}' alt="error" >
            <p class="price">${Data.price}</p>
            <p class="prev_price ">${Data.prev_price}</p>
        </div>
        `
    })
    
}
products_diversity.innerHTML=product_div;

let extra=[
    {
        title:"Bestprices & offers",
        desc:'Orders $50 or More' ,
        logo:"./extra_info/best_prices.png",

    },
     {
        title:"Bestprices & offers",
        desc:'Orders $50 or More' ,
        logo:"./extra_info/best_prices.png",

    },
     {
        title:"Bestprices & offers",
        desc:'Orders $50 or More' ,
        logo:"./extra_info/free_delivery.png",

    },
    {
        title:"Bestprices & offers",
        desc:'Orders $50 or More' ,
        logo:"./extra_info/great_deals.png",

    },
    {
        title:"Bestprices & offers",
        desc:'Orders $50 or More' ,
        logo:"./extra_info/wide_assesment.png",

    },
     
    {
        title:"Bestprices & offers",
        desc:'Orders $50 or More' ,
        logo:"./extra_info/Easy_return.png",

    }
]

let extra_info=document.querySelector(".extra_info");
let extra_card="";
extra.forEach(data=>{
    extra_card+=`<div class="extra_card">
        <img src="${data.logo}" class="extra-img" alt="error" style="height:60px ;width:60px"/>
        <p>${data.title}</p>
        <p class="extra_desc">${data.desc}</p>
    </div>`
});
extra_info.innerHTML=extra_card;


