let Acoustics =  [
    {id:1,  ProductName: "Breedlove Acoustic Guitar "      ,        ProductPrice:"₹ 1000"  ,           ProductImg: "../img/Acoustic/Acoustic guitar dark sandal.png"              ,             ProductOldPrice:"₹ 2800", Percentage:"60%"},
    {id:2,  ProductName: "Godin FA6 Acoustic Guitar"      ,        ProductPrice:"₹ 900"   ,           ProductImg: "../img/Acoustic/Acoustic guitar lite wood.png"                ,             ProductOldPrice:"₹ 1500", Percentage:"40%"},
    {id:3,  ProductName: "Grimshaw Acoustic Guitar"        ,        ProductPrice:"₹ 1100"  ,           ProductImg: "../img/Acoustic/Acoustic guitar jean  lite blue.png"          ,             ProductOldPrice:"₹ 2500", Percentage:"65%"},
    {id:4,  ProductName: "Classical Acoustic Guitar"    ,        ProductPrice:"₹ 950"   ,           ProductImg: "../img/Acoustic/Acoustic guitar varnish brown.png"            ,             ProductOldPrice:"₹ 1800", Percentage:"48%"},
    {id:5,  ProductName: "Seagull Acoustic Guitar"     ,        ProductPrice:"₹ 750"   ,           ProductImg: "../img/Acoustic/Acoustic guitor mixed brown.png"              ,             ProductOldPrice:"₹ 1500", Percentage:"54%"},
    {id:6,  ProductName: "Yamaha Acoustic Guitar"        ,        ProductPrice:"₹ 1000"  ,           ProductImg: "../img/Acoustic/Acoustic guitar navy blue.png"                ,             ProductOldPrice:"₹ 2200", Percentage:"70%"},
    {id:7,  ProductName: "Strydom Acoustic guitar"          ,        ProductPrice:"₹ 1600"  ,           ProductImg: "../img/Acoustic/Acoustic guitar wood.png"                     ,             ProductOldPrice:"₹ 2800", Percentage:"40%"},
    {id:8,  ProductName: "Yamaha Acoustic Guitar"         ,        ProductPrice:"₹ 2200"  ,           ProductImg: "../img/Acoustic/Acoustic guitor sandal.png"                   ,             ProductOldPrice:"₹ 3500", Percentage:"30%"},
    {id:9,  ProductName: "Standard Acoustic Guitar"           ,        ProductPrice:"₹ 1150"  ,           ProductImg: "../img/Acoustic/Acoustic guitar black shade brown.png"        ,             ProductOldPrice:"₹ 2100", Percentage:"50%"},
    {id:10, ProductName: "Guild D-140 Dreadnought"               ,        ProductPrice:"₹ 1550"  ,           ProductImg: "../img/Acoustic/Acoustic guitar choco brown with design.png"  ,             ProductOldPrice:"₹ 3100", Percentage:"60%"},
    {id:11, ProductName: "DIDUO Acoustic Guitar"     ,        ProductPrice:"₹ 850"   ,           ProductImg: "../img/Acoustic/Acoustic guitar black shade.png"              ,             ProductOldPrice:"₹ 1800", Percentage:"55%"},
    {id:12, ProductName: "Gibson Acoustic Guitar"       ,        ProductPrice:"₹ 600"   ,           ProductImg: "../img/Acoustic/Acoustic guitar gray black.png"               ,             ProductOldPrice:"₹ 1000", Percentage:"40%"},
];


let cart = document.querySelector(".boxes");

Acoustics.map((Acoustic)=>{
    let box = document.createElement("div");

    box.innerHTML=

`

<div class="box">
    <img src="${Acoustic.ProductImg}" alt="">
    <h5>${Acoustic.ProductName}</h5>
    <small data-product="" ><i><b>${Acoustic.ProductPrice}</b></i><span><br><strike>${Acoustic.ProductOldPrice}</strike></span><span class="percentage">65%</span></small> <br>                   
    <a style="text-decoration: none; color:black;" href="../html/Electric_black_guitar.html"><button class="check-out">Buy</button></a>  
    
</div>

`;

cart.append(box);
})