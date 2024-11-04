let violins =  [
    {id:1,        ProductName: "Acoustic AC2 Violin ",                   ProductPrice:"₹ 1000",         ProductImg:  "../img/violin/Acoustic Violin With Bow, Rosin And Soft Case 44 Classical .png",         ProductOldPrice:"₹ 2800",      Percentage:"60%"},
    {id:2,        ProductName: "Chin rest violin ",                      ProductPrice:"₹ 900",          ProductImg:  "../img/violin/Chin rest violin.png",                                                    ProductOldPrice:"₹ 1500",      Percentage:"40%"},
    {id:3,        ProductName: " Electro Acoustic Violin",               ProductPrice:"₹ 1100",         ProductImg:  "../img/violin/Deluxe Electro Acoustic Violin.png",                                      ProductOldPrice:"₹ 2500",      Percentage:"65%"},
    {id:4,        ProductName: "Electric violin a storm",                ProductPrice:"₹ 950",          ProductImg:  "../img/violin/Electric violin a storm humanity.png",                                    ProductOldPrice:"₹ 1800",      Percentage:"48%"},
    {id:5,        ProductName: " Glasser Electric Violin",               ProductPrice:"₹ 750",          ProductImg:  "../img/violin/Glasser AEX Carbon Composite Acoustic-Electric Violin.png",               ProductOldPrice:"₹ 1500",      Percentage:"54%"},
    {id:6,        ProductName: "Glasser Carbon Violin ",                 ProductPrice:"₹ 1000",         ProductImg:  "../img/violin/Glasser Carbon Composite Violin .png",                                    ProductOldPrice:"₹ 2200",      Percentage:"70%"},
    {id:7,        ProductName: "KADENCE  Classical Violin",              ProductPrice:"₹ 1600",         ProductImg:  "../img/violin/KADENCE V001WH-C 44 Classical (Modern) Violin.png",                       ProductOldPrice:"₹ 2800",      Percentage:"40%"},
    {id:8,        ProductName: "Maro Music Viola",                       ProductPrice:"₹ 2200",         ProductImg:  "../img/violin/Maro Music Ebony Viola.png",                                              ProductOldPrice:"₹ 3500",      Percentage:"30%"},
    {id:9,        ProductName: "Monster violin",                         ProductPrice:"₹ 1150",         ProductImg:  "../img/violin/Monster violin.png",                                                      ProductOldPrice:"₹ 2100",      Percentage:"50%"},
    {id:10,       ProductName: "Rosin Case V001 ",                       ProductPrice:"₹ 1550",         ProductImg: "../img/violin/Rosin, Hard Case V001.png",                                                ProductOldPrice:"₹ 3100",      Percentage:"60%"},
    {id:11,       ProductName: "Violin Specific design",                 ProductPrice:"₹ 850",          ProductImg: "../img/violin/white S modal violin.png",                                                 ProductOldPrice:"₹ 1800",      Percentage:"55%"},
    {id:12,       ProductName: "Crimson Electrical Violin",              ProductPrice:"₹ 600",          ProductImg: "../img/violin/Crimson Electrical Violin.png",                                            ProductOldPrice:"₹ 1000",      Percentage:"40%"},
];


let cart = document.querySelector(".boxes");

violins.map((violin)=>{
    let box = document.createElement("div");

    box.innerHTML=

`

<div class="box">
    <img src="${violin.ProductImg}" alt="">
    <h5>${violin.ProductName}</h5>
    <small data-product="" ><i><b>${violin.ProductPrice}</b></i><span><br><strike>${violin.ProductOldPrice}</strike></span><span class="percentage">65%</span></small> <br>                   
    <a style="text-decoration: none; color:black;" href="../html/Electric_black_guitar.html"><button class="check-out">Buy</button></a>  
    
</div>

`;

cart.append(box);
})