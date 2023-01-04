var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


// Luukku 4
function avaaLuukku(pvLuukku, kkLuukku, osoite) {
    var paivamaara = new Date();
    var kuukausi = Number(paivamaara.getMonth() + 1);
    var paiva = Number(paivamaara.getDate());
    if (kkLuukku <= kuukausi) {
        if (pvLuukku <= paiva) {
            window.open(osoite);
        }else{
            alert("Väärä päivä!");
        }
    }else{
        alert("Väärä kuukausi!");
    }
}

// Sijainti
var earth;

function initialize() {
    var options = {
        atmosphere: true,
        center: [0, 0],
        zoom: 0
    };
    earth = new WE.map('earth_div', options);
  
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(earth);

}

function goHome() {
   // todo
   earth.setView([60.18221883381464,24.957594531347315]);
   earth.setZoom(15);
}