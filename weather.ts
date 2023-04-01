interface WetterDaten {
    temperatur: number;
    windgeschwindigkeit: number;
    feuchtigkeit: number;
    beschreibung: string;
}

function getWeather(stadt: string): WetterDaten {
    // Normal sollte man eine API Nutzen doch ich nutze hier Lokale Daten
    const data: WetterDaten = {
        temperatur: 18,
        windgeschwindigkeit: 10,
        feuchtigkeit: 70,
        beschreibung: "Bewölkt",
    };
    return data;
}

const city = "Berlin";
const wetterdaten = getWeather(city);

console.log(`Das Wetter in ${city}:`);
console.log(`Temperatur: ${wetterdaten.temperatur}°C`);
console.log(`Windgeschwindigkeit: ${wetterdaten.windgeschwindigkeit} km/h`);
console.log(`Luftfeuchtigkeit: ${wetterdaten.feuchtigkeit}%`);
console.log(`Beschreibung: ${wetterdaten.beschreibung}`);
