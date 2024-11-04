let flutes = [
    { id: 1, ProductName: "Bamboo Flues", ProductPrice: "₹ 319", ProductOldPrice: "₹ 600", ProductImg: "../images/Flutes/Bamboo_Flute.png" },
    { id: 2, ProductName: "Bamboo Flues", ProductPrice: "₹ 319", ProductOldPrice: "₹ 450", ProductImg: "../images/Flutes/HARIPRASAD Flutes C Natural Medium Right Hand.png" },
    { id: 3, ProductName: "Bamboo Flues", ProductPrice: "₹ 319", ProductOldPrice: "₹1200", ProductImg: "../images/Flutes/Shiv'z Muzic Flute, C Natural Medium.png" },
    { id: 4, ProductName: "Bamboo Flues", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Radhe Flutes PVC Fiber C Natural Bansuri Middle.png" },
    { id: 5, ProductName: "Bamboo Flues", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Gold lacquer Eb alto saxophone.png" },
    { id: 6, ProductName: "Bamboo Flues", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Havana M1106A Tenor Saxophone - Gold.png" },
    { id: 7, ProductName: "Bamboo Flues", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Kadence Alto Saxophone Blue Gold.png" },
    { id: 8, ProductName: "Bamboo Flues", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Kadence Alto Saxophone, Case, Mouthpiece.png" },
    { id: 9, ProductName: "Bamboo Flues", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/.png" },
    { id: 10, ProductName: "Bamboo Flues", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Bamboo Flute.jpg" },
    { id: 11, ProductName: "Bamboo Flues", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Bamboo Flute.jpg" },
    { id: 12, ProductName: "Bamboo Flues", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Bamboo Flute.jpg" },
    { id: 13, ProductName: "Bamboo Flues", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Bamboo Flute.jpg" },
    { id: 14, ProductName: "Bamboo Flues", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Bamboo Flute.jpg" },
    { id: 13, ProductName: "Bamboo Flues", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Bamboo Flute.jpg" },
    { id: 13, ProductName: "Bamboo Flues", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Bamboo Flute.jpg" },
    { id: 13, ProductName: "Bamboo Flues", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Bamboo Flute.jpg" },
    { id: 13, ProductName: "Bamboo Flues", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Bamboo Flute.jpg" },
    { id: 13, ProductName: "Bamboo Flues", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Bamboo Flute.jpg" },
    { id: 13, ProductName: "Bamboo Flues", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Bamboo Flute.jpg" },
    { id: 13, ProductName: "Bamboo Flues", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Bamboo Flute.jpg" },
    { id: 13, ProductName: "Bamboo Flues", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Bamboo Flute.jpg" },
    { id: 13, ProductName: "Bamboo Flues", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Bamboo Flute.jpg" },
    { id: 13, ProductName: "Bamboo Flues", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Bamboo Flute.jpg" },
];


let cart = document.querySelector(".boxes");

flutes.map((flute) => {
    let box = document.createElement("div");

    box.innerHTML =

        `
     <div class="box">
        <img src="${flute.ProductImg}" alt="">
        <h5>${flute.ProductName}</h5>
        <small data-product="" ><i><b>${flute.ProductPrice}</b></i><span><strike>${flute.ProductOldPrice}</strike></span><span class="percentage">65% </span></small> <br>  
        <a style="text-decoration: none; color:black;" href="../html/Electric_black_guitar.html"><button class="check-out">Buy</button></a>
    </div>
    `;

    cart.append(box);
});