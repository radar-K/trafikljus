// Hämta alla lamporna och knappen
const rödLampa = document.getElementById("röd");
const gulLampa = document.getElementById("gul");
const grönLampa = document.getElementById("grön");
const knapp = document.getElementById("knapp");

//  Aktivt ljus
let nuvarandeLampa = 0; // 1 = röd, 2 = gul, 3 = grön

// Funktion för att släcka lamporna
function släckAllaLampor() {
    rödLampa.classList.remove("aktiv");
    gulLampa.classList.remove("aktiv");
    grönLampa.classList.remove("aktiv");
}

// En funktion som tänder nästa lampa
function tändNästaLampa() {
    släckAllaLampor(); 

    if (nuvarandeLampa === 0) {
        rödLampa.classList.add("aktiv"); // Tänd röd lampa
    } else if (nuvarandeLampa === 1) {
        gulLampa.classList.add("aktiv"); // Tänd gul lampa
    } else if (nuvarandeLampa === 2) {
        grönLampa.classList.add("aktiv"); // Tänd grön lampa
    }

    // Uppdatera till nästa lampa
    nuvarandeLampa = (nuvarandeLampa + 1) % 3; // Går tillbaka till 0 efter grön lampa
}

// Steg 5: Lägg till en "click"-händelse på knappen
knapp.addEventListener("click", tändNästaLampa);
