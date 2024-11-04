let Speakers =  [
    {id:1,  ProductName: "AUDIO Engine Speaker"        ,        ProductPrice:"₹ 1000"  ,           ProductImg:  "../img/Speaker/AUDIO Engine Speaker.png"        ,             ProductOldPrice:"₹ 2800", Percentage:"60%"},
    {id:2,  ProductName: "BroJect V33 Speaker"         ,        ProductPrice:"₹ 900"   ,           ProductImg:  "../img/Speaker/BroJect V33 Speaker.png"         ,             ProductOldPrice:"₹ 1500", Percentage:"40%"},
    {id:3,  ProductName: "Brown Speaker XYZ"           ,        ProductPrice:"₹ 1100"  ,           ProductImg:  "../img/Speaker/Brown Speaker XYZ.png"           ,             ProductOldPrice:"₹ 2500", Percentage:"65%"},
    {id:4,  ProductName: "Rooky Drum Speaker"          ,        ProductPrice:"₹ 950"   ,           ProductImg:  "../img/Speaker/download-removebg-preview.png"   ,             ProductOldPrice:"₹ 1800", Percentage:"48%"},
    {id:5,  ProductName: "RCF Vmax Speaker"            ,        ProductPrice:"₹ 750"   ,           ProductImg:  "../img/Speaker/RCF Vmax Speaker.png"            ,             ProductOldPrice:"₹ 1500", Percentage:"54%"},
    {id:6,  ProductName: "Wharfedale Beats Speaker"    ,        ProductPrice:"₹ 1000"  ,           ProductImg:  "../img/Speaker/Wharfedale Beats Speaker.png"    ,             ProductOldPrice:"₹ 2200", Percentage:"70%"},
    {id:7,  ProductName: "Wharfedale Black Speaker"    ,        ProductPrice:"₹ 1600"  ,           ProductImg:  "../img/Speaker/Wharfedale Black Speaker.png"    ,             ProductOldPrice:"₹ 2800", Percentage:"40%"},
    {id:8,  ProductName: "Wharfedale EV Speaker"       ,        ProductPrice:"₹ 2200"  ,           ProductImg:  "../img/Speaker/Wharfedale EV Speaker.png"       ,             ProductOldPrice:"₹ 3500", Percentage:"30%"},
    {id:9,  ProductName: "Wharfedale White Speaker"    ,        ProductPrice:"₹ 1150"  ,           ProductImg:  "../img/Speaker/Wharfedale White Speaker.png"    ,             ProductOldPrice:"₹ 2100", Percentage:"50%"},
    {id:10, ProductName: "Wharfedale Wallnet Speaker"  ,        ProductPrice:"₹ 1550"  ,           ProductImg:  "../img/Speaker/Wharfedale Wallnet 3Speaker.png" ,             ProductOldPrice:"₹ 3100", Percentage:"60%"},
    {id:11, ProductName: "Drafting Wallnet Speaker"    ,        ProductPrice:"₹ 850"   ,           ProductImg:  "../img/Speaker/Wharfedale Wallnet Speaker.png"  ,             ProductOldPrice:"₹ 1800", Percentage:"55%"},
    {id:12, ProductName: "Pure Black Speaker"          ,        ProductPrice:"₹ 600"   ,           ProductImg:  "../img/Speaker/Pure Black Speaker.png"          ,             ProductOldPrice:"₹ 1000", Percentage:"40%"},
];


let cart = document.querySelector(".boxes");

Speakers.map((Speaker)=>{
    let box = document.createElement("div");

    box.innerHTML=

`

<div class="box">
    <img src="${Speaker.ProductImg}" alt="">
    <h5>${Speaker.ProductName}</h5>
    <small data-product="" ><i><b>${Speaker.ProductPrice}</b></i><span><br><strike>${Speaker.ProductOldPrice}</strike></span><span class="percentage">65%</span></small> <br>                   
    <a style="text-decoration: none; color:black;" href="../html/Electric_black_guitar.html"><button class="check-out">Buy</button></a>  
    
</div>

`;

cart.append(box);
})