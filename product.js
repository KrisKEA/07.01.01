console.log("sidenVises");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;
const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

function hentProduct() {
    fetch(url)
        .then((res)=> res.json())
        .then(visProduct);
}

function visProduct(product){
    console.log(product);
    document.querySelector(".box_h2").textContent = product.productdisplayname;
    document.querySelector(".pro1").textContent = product.category;
    document.querySelector("#pris").textContent = product.price;
    document.querySelector("#model").textContent = product.brandname;
    document.querySelector("#farve").textContent = product.color;
    document.querySelector("#nummer").textContent = product.id;
    document.querySelector(".li1").textContent = product.productdisplayname;
    document.querySelector("img").src = imagePath;

    if (product.category === "Apparel") {
        document.querySelector(".option_1").textContent = "XS";
        document.querySelector(".option_2").textContent = "S";
        document.querySelector(".option_3").textContent = "M";
        document.querySelector(".option_4").textContent = "L";
        document.querySelector(".option_5").textContent = "XL";
    }
    if (product.category === "Accessories") {
        document.querySelector(".option_1").textContent = "ONESIZE";
        document.querySelector(".option_2").textContent = "";
        document.querySelector(".option_3").textContent = "";
        document.querySelector(".option_4").textContent = "";
        document.querySelector(".option_5").textContent = "";
    }
    if (product.category === "Footwear") {
        document.querySelector(".option_1").textContent = "36";
        document.querySelector(".option_2").textContent = "37";
        document.querySelector(".option_3").textContent = "38";
        document.querySelector(".option_4").textContent = "39";
        document.querySelector(".option_5").textContent = "40";
    }
}

hentProduct();