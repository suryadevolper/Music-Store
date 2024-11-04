let image = document.getElementById("images");
let names = document.getElementById("name");
let price = document.getElementById("price");
let bttn = document.getElementById("btn");
let counting = document.getElementById("count");



image.setAttribute('src', `${localStorage.getItem("d")}`);
names.innerHTML = localStorage.getItem("b");
price.innerHTML = localStorage.getItem("c");
bttn.innerHTML = localStorage.getItem("a");


let count=0;

let card = localStorage.getItem("c");


function countplus() {
    count++

    

    let total = card * count;

    console.log(total);
    
       counting.innerText ="Count___" + count +  "___Total price for___" + total+"___";
    
}
