let genapGanjil = (len) => {
    let rumus = len % 2;
    if (rumus === 1) {
        rumus = `Nomor ${len} adalah ganjil`;
    } else {
        rumus = `Nomor ${len} adalah genap`;
    }
   return rumus;
}


const btn1 = document.getElementById("btn-1");
const hasil = document.getElementById("hasil");


btn1.addEventListener("click", function () {
    let genap = Number(prompt(`masukan angka untuk mencari angka genap/ganjil`));
    let hasiltext = genapGanjil(genap);
    let paragrafBaru = document.createElement("p");
    hasil.style.display = "block";
    hasil.appendChild(paragrafBaru);
    paragrafBaru.textContent =hasiltext;

});