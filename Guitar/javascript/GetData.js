let Api = "https://6717676bb910c6a6e027f3ca.mockapi.io/TrendingGuitar"

let container = document.getElementById("box");

fetch(Api)

    .then(response => {
        if (!response) {
            throw new Error("Network response was not ok");

        }
        return response.json()
    })

    .then(data => {
        
        const total = data.map(post =>`
            <img src="${post.productimg}" alt="">
            <h3>${post.productname}</h3> 
            <p>${post.productprice}</p>
            <p>${post.productrate}</p>
            
`);

    container.innerHTML = total.join("");

    console.log(total[0]);
    


    
})