console.log("sidenVises");

const urlParams = new URLSearchParams(window.location.search);

console.log("igen");
const id = urlParams.get("id");
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;
const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

console.log("funktion");


async function hentData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    showProduct(data);
    // fetch(url)
    //     .then((res) => res.json())
    //     .then(showProduct);
}

hentData();

function showProduct(product) {
    console.log("funktion produkt");
    document.querySelector(".box_ h2").textContent = product.productdisplayname;
    document.querySelector(".pro1").textContent = product.category;
    document.querySelector("#pris").textContent = product.price;
    document.querySelector("#model").textContent = product.brandname;
    document.querySelector("#farve").textContent = product.color;
    document.querySelector("#nummer").textContent = product.id;
    document.querySelector(".li1").textContent = product.productdisplayname;
    document.querySelector(".img1").src = imagePath;
}
