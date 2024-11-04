let Headphones =  [
    {id:1,  ProductName: "ADI Bluetooth Headphone"       ,        ProductPrice:"₹ 1000",          ProductImg:  "../img/Headphone/ADITAM bluetooth Headphone.png"                                    ,             ProductOldPrice:"₹ 2800", Percentage:"60%"},
    {id:2,  ProductName: "Apple Beats Headphone"         ,        ProductPrice:"₹ 900",           ProductImg:  "../img/Headphone/Apple beats studio 3.png"                                          ,             ProductOldPrice:"₹ 1500", Percentage:"40%"},
    {id:3,  ProductName: "Beats Wireless Bluetooth"      ,        ProductPrice:"₹ 1100",          ProductImg:  "../img/Headphone/Beats by Dr. Dre Wireless Bluetooth On-Ear Headphones Golden.png"  ,             ProductOldPrice:"₹ 2500", Percentage:"65%"},
    {id:4,  ProductName: "BOAT Rooky Bluetooth"          ,        ProductPrice:"₹ 950",           ProductImg:  "../img/Headphone/BOAT Rooky AZ23.png"                                               ,             ProductOldPrice:"₹ 1800", Percentage:"48%"},
    {id:5,  ProductName: "BOAT Wireless Headphone"       ,        ProductPrice:"₹ 750",           ProductImg:  "../img/Headphone/BOAT DC Headphone.png"                                             ,             ProductOldPrice:"₹ 1500", Percentage:"54%"},
    {id:6,  ProductName: "BOAT Rockerz Headphone"        ,        ProductPrice:"₹ 1000",          ProductImg:  "../img/Headphone/BOAT Rockerz 425.png"                                              ,             ProductOldPrice:"₹ 2200", Percentage:"70%"},
    {id:7,  ProductName: "BOAT Bluetooth Headphone"      ,        ProductPrice:"₹ 1600",          ProductImg:  "../img/Headphone/BOAT Wireless Bluetooth Headphone .png"                            ,             ProductOldPrice:"₹ 2800", Percentage:"40%"},
    {id:8,  ProductName: "Mokato Headphone limited"      ,        ProductPrice:"₹ 2200",          ProductImg:  "../img/Headphone/Mokato Head phone volume limited.png"                              ,             ProductOldPrice:"₹ 3500", Percentage:"30%"},
    {id:9,  ProductName: "Nosie reduction Bluetooth"     ,        ProductPrice:"₹ 1150",          ProductImg:  "../img/Headphone/Nosie reduction blueetooth.png"                                    ,             ProductOldPrice:"₹ 2100", Percentage:"50%"},
    {id:10, ProductName: "Stero A33 Headphone"           ,        ProductPrice:"₹ 1550",          ProductImg:  "../img/Headphone/Stero Headphone wireless.png"                                      ,             ProductOldPrice:"₹ 3100", Percentage:"60%"},
    {id:11, ProductName: "Bluetooth Headphone"           ,        ProductPrice:"₹ 850",           ProductImg:  "../img/Headphone/V33 Bluetooth Headphone.png"                                       ,             ProductOldPrice:"₹ 1800", Percentage:"55%"},
    {id:12, ProductName: "Volkano Bluetooth Headphone"   ,        ProductPrice:"₹ 600",           ProductImg:  "../img/Headphone/Volkano Bluetooth Wireless Headphone.png"                          ,             ProductOldPrice:"₹ 1000", Percentage:"40%"},
];


let cart = document.querySelector(".boxes");

Headphones.map((Headphone)=>{
    let box = document.createElement("div");

    box.innerHTML=

`

<div class="box">
    <img src="${Headphone.ProductImg}" alt="">
    <h5>${Headphone.ProductName}</h5>
    <small data-product="" ><i><b>${Headphone.ProductPrice}</b></i><span><br><strike>${Headphone.ProductOldPrice}</strike></span><span class="percentage">65%</span></small> <br>                   
    <a style="text-decoration: none; color:black;" href="../html/Electric_black_guitar.html"><button class="check-out">Buy</button></a>  
    
</div>

`;

cart.append(box);
})