console.log("sidenVises");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;
const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

async function hentProdukt() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    visProdukt(data);
    data.forEach(visProdukt);
}


function visProdukt(produkt){
    console.log(produkt);
    const copy = template.cloneNode(true);
    copy.querySelector("h2").textContent = produkt.productdisplayname;
    copy.querySelector(".pro1").textContent = produkt.subcategory;
    copy.querySelector("#pris").textContent = produkt.price;
    copy.querySelector("#model").textContent = produkt.brandname;
    copy.querySelector("#farve").textContent = produkt.color;
    copy.querySelector("#nummer").textContent = produkt.id;
    copy.querySelector("#.li1").textContent = produkt.productdisplayname;
    copy.querySelector("img").src = imagePath;

    document.querySelector("main").appendChild(copy);
}

hentProdukt();