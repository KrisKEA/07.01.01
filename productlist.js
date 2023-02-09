console.log("sidenVises");

const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get("cat");
const url = `https://kea-alt-del.dk/t7/api/products?limit=20&category=${cat}`;

async function hentData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    data.forEach(visProdukt);
}

document.querySelector(".c2").textContent = cat;

function visProdukt(produkt) {
    console.log(produkt);
    const template = document.querySelector("#templateOne").content;
    const id = produkt.id;
    const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
    const copy = template.cloneNode(true);
    copy.querySelector("h3").textContent = produkt.productdisplayname;
    copy.querySelector("h4").textContent = produkt.subcategory;
    copy.querySelector(".pris span").textContent = produkt.price;
    copy.querySelector(".rabat span").textContent = produkt.discount;
    copy.querySelector(".pris2").textContent = Math.round(produkt.price - (produkt.price * produkt.discount) / 100);
    copy.querySelector("img").src = imagePath;
    // copy.querySelector("a").href = "product.html?id=" + product.id;
 
    if(produkt.soldout) {
        copy.querySelector("article").classList.add("udsolgt");
    }
    if(produkt.discount) {
        copy.querySelector("article").classList.add("discount");
       
    }else{
       copy.querySelector(".rabat").classList.add("skjul");
    }
  

    document.querySelector("main").appendChild(copy);
}

hentData();