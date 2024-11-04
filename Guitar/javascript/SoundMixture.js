let SoundMixtures =  [
    {id:1,  ProductName: "ICON Audio Mixture"                ,        ProductPrice:"₹ 3000"  ,           ProductImg:  "../img/Sound Mixture/ICON Audio Mixture.png"             ,             ProductOldPrice:"₹ 3800", Percentage:"30%"},
    {id:2,  ProductName: "Pocket DJ Mixture"                 ,        ProductPrice:"₹ 2800"   ,           ProductImg:  "../img/Sound Mixture/Pocket DJ Mixture.png"             ,             ProductOldPrice:"₹ 3800", Percentage:"40%"},
    {id:3,  ProductName: "Professional Audio Mixture"        ,        ProductPrice:"₹ 2900"  ,           ProductImg:  "../img/Sound Mixture/Professional Audio Mixture.png"     ,             ProductOldPrice:"₹ 3800", Percentage:"65%"},
    {id:4,  ProductName: "Channel Audio Mixture"             ,        ProductPrice:"₹ 1950"   ,           ProductImg:  "../img/Sound Mixture/Channel Audio Mixture.png"         ,             ProductOldPrice:"₹ 2500", Percentage:"30%"},
    {id:5,  ProductName: "EMM Setro Mixture"                 ,        ProductPrice:"₹ 1750"   ,           ProductImg:  "../img/Sound Mixture/EMM Setro Mixture.png"             ,             ProductOldPrice:"₹ 2500", Percentage:"35%"},
    {id:6,  ProductName: "MX12 Channel Mixture"              ,        ProductPrice:"₹ 1800"  ,           ProductImg:  "../img/Sound Mixture/MX12 Channel Mixture.png"           ,             ProductOldPrice:"₹ 2200", Percentage:"30%"},
    {id:7,  ProductName: "PA Sound Mixture"                  ,        ProductPrice:"₹ 2000"  ,           ProductImg:  "../img/Sound Mixture/PA Sound Mixture.png"               ,             ProductOldPrice:"₹ 2800", Percentage:"30%"},
    {id:8,  ProductName: "Powered Audio Mixture"             ,        ProductPrice:"₹ 2200"  ,           ProductImg:  "../img/Sound Mixture/Powered Audio Mixture.png"          ,             ProductOldPrice:"₹ 3500", Percentage:"30%"},
    {id:9,  ProductName: "Sound Audio Mixture"               ,        ProductPrice:"₹ 1950"  ,           ProductImg:  "../img/Sound Mixture/Sound Mixture.png"                  ,             ProductOldPrice:"₹ 2100", Percentage:"20%"},
    {id:10, ProductName: "Stage Audio Mixture"               ,        ProductPrice:"₹ 1800"  ,           ProductImg:  "../img/Sound Mixture/Stage Audio Mixture.png"            ,             ProductOldPrice:"₹ 2100", Percentage:"20%"},
    {id:11, ProductName: "Studio Audio Mixture"              ,        ProductPrice:"₹ 1600"   ,           ProductImg:  "../img/Sound Mixture/Studio Audio Mixture.png"          ,             ProductOldPrice:"₹ 1800", Percentage:"20%"},
    {id:12, ProductName: "TRONIC Audio Mixture"              ,        ProductPrice:"₹ 1800"   ,           ProductImg:  "../img/Sound Mixture/TRONIC Audio Mixture.png"          ,             ProductOldPrice:"₹ 2000", Percentage:"20%"},
];


let cart = document.querySelector(".boxes");

SoundMixtures.map((SoundMixture)=>{
    let box = document.createElement("div");

    box.innerHTML=

`

<div class="box">
    <img src="${SoundMixture.ProductImg}" alt="">
    <h5>${SoundMixture.ProductName}</h5>
    <small data-product="" ><i><b>${SoundMixture.ProductPrice}</b></i><span><br><strike>${SoundMixture.ProductOldPrice}</strike></span><span class="percentage">65%</span></small> <br>                   
    <a style="text-decoration: none; color:black;" href="../html/Electric_black_guitar.html"><button class="check-out">Buy</button></a>  
    
</div>

`;

cart.append(box);
})