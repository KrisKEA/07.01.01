function hentData() {
    fetch ("endpoint")
    .then((respons) => respons.json())
    .then(visData);
}

const endpoint = "https://kea-alt-del.dk/t7/api/products";
const temp = document.querySelector("main").content;
const beholder = document.querySelector("main");

function visData(json) {
    console.log(product);
    json.forEach((product) => {
    const klon = temp.cloneNode(true);
    klon.querySelector("h1").textContent=element.productdisplayname;
    beholder.appendChild(klon);
    });
}

hentData();