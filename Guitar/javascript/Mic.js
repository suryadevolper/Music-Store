let Mics =  [
    {id:1,  ProductName: "Tossing 008 Mic"               ,        ProductPrice:"₹ 1120"    ,               ProductImg:  "../img/Mic/Tossing 008 Mic.png"             ,             ProductOldPrice:"₹ 2800", Percentage:"60%"},
    {id:2,  ProductName: "Portable Handhelg Mic"         ,        ProductPrice:"₹ 1200"    ,               ProductImg:  "../img/Mic/Portable Handhelg Mic.png"       ,             ProductOldPrice:"₹ 1500", Percentage:"20%"},
    {id:3,  ProductName: "Generic H11 Mic"               ,        ProductPrice:"₹ 1300"    ,               ProductImg:  "../img/Mic/Generic H11 Mic.png"             ,             ProductOldPrice:"₹ 2500", Percentage:"45%"},
    {id:4,  ProductName: "Mic/Furuggo UK Mic"            ,        ProductPrice:"₹ 2950"    ,               ProductImg:  "../img/Mic/Furuggo UK Mic.png"              ,             ProductOldPrice:"₹ 5000", Percentage:"41%"},
    {id:5,  ProductName: "RODE NT2 Mic"                  ,        ProductPrice:"₹ 2750"    ,               ProductImg:  "../img/Mic/RODE NT2 Mic.png"                ,             ProductOldPrice:"₹ 4500", Percentage:"38%"},
    {id:6,  ProductName: "RODE NT1 Mic"                  ,        ProductPrice:"₹ 3000"    ,               ProductImg:  "../img/Mic/RODE NT1 Mic.png"                ,             ProductOldPrice:"₹ 5000", Percentage:"40%"},
    {id:7,  ProductName: "BOYA Condenser Mic"            ,        ProductPrice:"₹ 600"     ,               ProductImg:  "../img/Mic/BOYA Condenser Mic.png"          ,             ProductOldPrice:"₹ 1800", Percentage:"70%"},
    {id:8,  ProductName: "PodMic USB Portile"            ,        ProductPrice:"₹ 1230"    ,               ProductImg:  "../img/Mic/PodMic USB Portile.png"          ,             ProductOldPrice:"₹ 3500", Percentage:"60%"},
    {id:9,  ProductName: "Retro Dynamic Mic"             ,        ProductPrice:"₹ 1150"    ,               ProductImg:  "../img/Mic/Retro Dynamic Mic .png"           ,             ProductOldPrice:"₹ 2100", Percentage:"48%"},
    {id:10, ProductName: "Pordcast Add A2 Mic"           ,        ProductPrice:"₹ 1550"    ,               ProductImg:  "../img/Mic/Pordcast Add Mic.png"            ,             ProductOldPrice:"₹ 3100", Percentage:"50%"},
    {id:11, ProductName: "Pordcast Add A3 Mic"           ,        ProductPrice:"₹ 700"     ,               ProductImg:  "../img/Mic/Pordcast Add Mic (2).png"        ,             ProductOldPrice:"₹ 1800", Percentage:"60%"},
    {id:12, ProductName: "3D Retro Mic"                  ,        ProductPrice:"₹ 850"     ,               ProductImg:  "../img/Mic/3D Retro Mic.png"                ,             ProductOldPrice:"₹ 1000", Percentage:"15%"},
];


let cart = document.querySelector(".boxes");

Mics.map((Mic)=>{
    let box = document.createElement("div");

    box.innerHTML=

`

<div class="box">
    <img src="${Mic.ProductImg}" alt="">
    <h5>${Mic.ProductName}</h5>
    <small data-product="" ><i><b>${Mic.ProductPrice}</b></i><span><br><strike>${Mic.ProductOldPrice}</strike></span><span class="percentage">65%</span></small> <br>                   
    <a style="text-decoration: none; color:black;" href="../html/Electric_black_guitar.html"><button class="check-out">Buy</button></a>  
    
</div>

`;

cart.append(box);
})