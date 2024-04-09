function azn() {
    let pul = parseInt(document.getElementById("pul").value);
    let pullar = [500, 200, 100, 50, 20, 10, 5, 1];
    let manat = document.getElementById("manat");
    manat.innerHTML = "";
  
    for (let i = 0; i < pullar.length; i++) {
        let count = Math.floor(pul / pullar[i]);
      pul %= pullar[i];
      if (count > 0) {
        for (let j = 0; j < count; j++) {
          let image = document.createElement("img");
          image.src = "imag/" + pullar[i] + ".jpg";
          image.alt = pullar[i] + "Manat";
          image.classList.add("pul_img");
  
          manat.appendChild(image);
        }
      }
    }
  }
  



