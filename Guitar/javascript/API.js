// function handle() {
//     const nameInput = document.getElementById("productname");
//     const priceInput = document.getElementById("productprice");
//     const imageInput = document.getElementById("productimg");
//     const rateInput = document.getElementById("rating");


//     const names = nameInput.value;
//     const price = priceInput.value;
//     const image = imageInput.value;
//     const rate = rateInput.value;


//     let url = "https://6717676bb910c6a6e027f3ca.mockapi.io/TrendingGuitar";

//     const postData = {
//         id: 1,
//         productname: names,
//         productprice: price,
//         productimg: image,
//         productrate: rate
//     }



//     fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },

//         body: JSON.stringify(postData)
//     })
//         .then(response => {
//             if (!response) {
//                 throw new Error("Network response was not ok");

//             }
//             return response.json();

//         })

//         .then(data => {
//             console.log("Success", data);

//             nameInput.value = "";
//             priceInput.value = "";
//             imageInput.value = "";
//             rateInput.value = "";
            
            
//         })
//         .catch(error => {
//             console.error("Error:", error);
//         })

        
// }